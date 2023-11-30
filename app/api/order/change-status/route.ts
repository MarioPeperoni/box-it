import { NextResponse } from "next/server";

import prisma from "@/app/libs/prismadb";
import getUser from "@/app/helpers/getUser";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { id, status } = body;

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
      await prisma.order.update({
        where: {
          id,
        },
        data: {
          status,
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
