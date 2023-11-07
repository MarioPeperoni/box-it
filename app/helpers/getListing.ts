import prisma from "@/app/libs/prismadb";

const getListing = async (listingId: string) => {
  try {
    const listing = await prisma.productListing.findFirst({
      where: {
        id: listingId,
      },
    });

    if (!listing) {
      return null;
    }

    return listing;
  } catch (error) {
    return null;
  }
};

export default getListing;
