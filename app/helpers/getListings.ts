import prisma from "@/app/libs/prismadb";

const getListings = async (page?: string, sort?: string) => {
  try {
    let skip = 0;
    if (page) skip = 50 * (parseInt(page) - 1);
    if (sort === "priceasc" || sort === "pricedesc") {
      const listings = await prisma.productListing.findMany({
        orderBy: {
          itemPrice: sort === "priceasc" ? "asc" : "desc",
        },
        take: 50,
        skip: skip,
      });

      if (!listings) {
        return [];
      }

      return listings;
    } else {
      const listings = await prisma.productListing.findMany({
        orderBy: {
          createdAt: "desc",
        },
        take: 20,
        skip: skip,
      });

      if (!listings) {
        return [];
      }

      return listings;
    }
  } catch (error) {
    return [];
  }
};

export default getListings;
