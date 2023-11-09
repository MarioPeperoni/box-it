import Stripe from "stripe";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

import prisma from "@/app/libs/prismadb";
import { stripe } from "@/app/libs/stripe";

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
    if (!userId || !listingId || !orderId || !addressStripe || !nameStripe) {
      return new NextResponse("Webhook error: Missing metadata", {
        status: 400,
      });
    }

    await prisma.productListing.update({
      where: {
        id: listingId,
      },
      data: {
        status: "active", // Set to "active" for testing purposes
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