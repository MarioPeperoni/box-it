import { NextResponse } from "next/server";

import prisma from "@/libs/prismadb";

import getUser from "@/helpers/getUser";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { id } = body;

    const user = await getUser();

    const order = await prisma.order.findUnique({
      where: {
        id: body.id,
      },
      include: {
        product: {
          include: {
            seller: true,
          },
        },
      },
    });

    if (!user?.email || !user.id)
      return new NextResponse("Unauthorized", { status: 401 });

    if (order?.buyerId === user.id || order?.product.sellerId === user.id) {
      await prisma.order.delete({
        where: {
          id,
        },
      });
      return new NextResponse("OK", { status: 200 });
    } else {
      return new NextResponse("Unauthorized", { status: 401 });
    }
  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 });
  }
}
