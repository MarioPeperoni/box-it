import { NextResponse } from "next/server";

import prisma from "@/libs/prismadb";

import getUser from "@/helpers/getUser";

export async function POST(request: Request) {
  try {
    const user = await getUser();
    const body = await request.json();
    const {
      title,
      category,
      images,
      description,
      condition,
      itemPrice,
      shippingPrice,
    } = body;
    if (!user?.email || !user.id)
      return new NextResponse("Unauthorized", { status: 401 });

    const parsedItemPrice = parseFloat(itemPrice);
    const parsedShippingPrice = parseFloat(shippingPrice);

    const newListing = await prisma.productListing.create({
      data: {
        title,
        category,
        images,
        description,
        condition,
        itemPrice: parsedItemPrice,
        shippingPrice: parsedShippingPrice,
        seller: {
          connect: {
            id: user.id,
          },
        },
      },
    });

    return NextResponse.json(newListing);
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
}
