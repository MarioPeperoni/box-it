import { NextResponse } from "next/server";

import prisma from "@/app/libs/prismadb";

interface IParams {
  listingId?: string;
}

export async function POST(request: Request, { params }: { params: IParams }) {
  try {
    const { listingId } = params;
    const listing = await prisma.productListing.findUnique({
      where: {
        id: listingId,
      },
    });
    if (!listing) return new NextResponse("Not Found", { status: 404 });
    const updatedListing = await prisma.productListing.update({
      where: {
        id: listingId,
      },
      data: {
        views: listing.views + 1,
      },
    });
    return NextResponse.json(updatedListing);
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
}
