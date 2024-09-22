import { NextResponse } from "next/server";
import Stripe from "stripe";

import prisma from "@/libs/prismadb";
import { stripe } from "@/libs/stripe";

import getUser from "@/helpers/getUser";

interface IParams {
  listingId?: string;
}

export async function POST(request: Request, { params }: { params: IParams }) {
  try {
    const { listingId } = params;
    const user = await getUser();

    if (!user?.id) {
      return NextResponse.json({ url: "/login" });
    }

    const product = await prisma.productListing.findUnique({
      where: {
        id: listingId,
      },
    });

    if (
      !product ||
      product.status !== "active" ||
      product.sellerId === user.id
    ) {
      return new NextResponse("Not found", { status: 404 });
    }

    const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = [
      {
        price_data: {
          currency: "PLN",
          product_data: {
            name: product.title,
            images: [product.images[0]],
          },
          unit_amount: product.itemPrice * 100,
        },
        quantity: 1,
      },
    ];

    let stripeCustomer = await prisma.user.findUnique({
      where: {
        id: user.id,
      },
      select: {
        stripeCustumerId: true,
      },
    });

    if (stripeCustomer?.stripeCustumerId === null) {
      const custumer = await stripe.customers.create({
        email: user.email,
      });
      stripeCustomer = await prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          stripeCustumerId: custumer.id,
        },
        select: {
          stripeCustumerId: true,
        },
      });
    }

    const order = await prisma.order.create({
      data: {
        buyerId: user.id,
        productId: product.id,
        status: "pending",
        fullPrice: product.itemPrice + product.shippingPrice,
        stripeSessionUrl: "waiting for stripe session url",
      },
    });

    const session = await stripe.checkout.sessions.create({
      customer: stripeCustomer!.stripeCustumerId!,
      line_items,
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/listing/${product.id}/order-placed?orderId=${order.id}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/listing/${product.id}`,
      shipping_address_collection: {
        allowed_countries: ["PL"],
      },
      shipping_options: [
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: {
              amount: product.shippingPrice * 100,
              currency: "PLN",
            },
            display_name: "Seller individual shipping",
          },
        },
      ],
      metadata: {
        userId: user.id,
        listingId: product.id,
        orderId: order.id,
      },
      payment_intent_data: {
        capture_method: "manual",
      },
    });

    await prisma.order.update({
      where: {
        id: order.id,
      },
      data: {
        stripeSessionUrl: session.url!,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
}
