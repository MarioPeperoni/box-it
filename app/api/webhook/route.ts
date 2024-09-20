import Stripe from "stripe";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

import prisma from "@/libs/prismadb";
import { stripe } from "@/libs/stripe";

export async function POST(request: Request) {
  const body = await request.text();
  const sig = headers().get("stripe-signature") as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!,
    );
  } catch {
    return new NextResponse("Webhook error", { status: 400 });
  }

  const session = event.data.object as Stripe.Checkout.Session;
  const userId = session?.metadata?.userId;
  const listingId = session?.metadata?.listingId;
  const orderId = session?.metadata?.orderId;

  const addressStripe = session.customer_details?.address;
  const nameStripe = session.customer_details?.name;

  if (event.type === "checkout.session.completed") {
    if (
      !userId ||
      !listingId ||
      !orderId ||
      !addressStripe ||
      !nameStripe ||
      !session.payment_intent
    ) {
      return new NextResponse("Webhook error: Missing metadata", {
        status: 400,
      });
    }

    const product = await prisma.productListing.findUnique({
      where: {
        id: listingId,
      },
    });

    // Cancel payment if listing was already sold or deleted
    if (!product || product?.status !== "active") {
      await stripe.paymentIntents.cancel(session.payment_intent.toString());
      await prisma.order.delete({
        where: {
          id: orderId,
        },
      });
      await stripe.checkout.sessions.expire(session.id);
      return new NextResponse("Listing was already sold or deleted", {
        status: 404,
      });
    }

    await stripe.paymentIntents.capture(session.payment_intent?.toString());

    await prisma.productListing.update({
      where: {
        id: listingId,
      },
      data: {
        status: "sold",
      },
    });

    const address = await prisma.address.create({
      data: {
        name: nameStripe,
        line1: addressStripe.line1,
        line2: addressStripe.line2,
        city: addressStripe.city,
        zip: addressStripe.postal_code,
        country: addressStripe.country,
      },
    });

    await prisma.order.update({
      where: {
        id: orderId,
      },
      data: {
        status: "paid",
        addres: {
          connect: {
            id: address.id,
          },
        },
      },
    });
  } else {
    return new NextResponse("Webhook error: Unhandled event type", {
      status: 200,
    });
  }

  return new NextResponse(null, { status: 200 });
}
