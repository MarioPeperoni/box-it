import prisma from "@/app/libs/prismadb";

const getListings = async (
  page?: string,
  sort?: string,
  search?: string,
  category?: string,
) => {
  try {
    let skip = 0;
    if (page) skip = 50 * (parseInt(page) - 1);

    if (sort === "priceasc" || sort === "pricedesc") {
      const listings = await prisma.productListing.findMany({
        where: {
          title: {
            contains: search,
            mode: "insensitive",
          },
          category: {
            contains: category,
          },
          status: "active",
        },
        orderBy: {
          itemPrice: sort === "priceasc" ? "asc" : "desc",
        },
        take: 50,
        skip: skip,
      });
      const listingsNumber = await prisma.productListing.count({
        where: {
          title: {
            contains: search,
            mode: "insensitive",
          },
          category: {
            contains: category,
          },
          status: "active",
        },
        orderBy: {
          itemPrice: sort === "priceasc" ? "asc" : "desc",
        },
      });

      if (!listings) {
        console.log({ listings: [], count: 0 });
        return { listings: [], count: 0 };
      }

      console.log({ listings: listings, count: listingsNumber as number });
      return { listings: listings, count: listingsNumber as number };
    } else {
      const listings = await prisma.productListing.findMany({
        where: {
          title: {
            contains: search,
            mode: "insensitive",
          },
          category: {
            contains: category,
          },
          status: "active",
        },
        orderBy: {
          createdAt: "desc",
        },
        take: 20,
        skip: skip,
      });

      const listingsNumber = await prisma.productListing.count({
        where: {
          title: {
            contains: search,
            mode: "insensitive",
          },
          category: {
            contains: category,
          },
          status: "active",
        },
        orderBy: {
          createdAt: "desc",
        },
      });

      if (!listings) {
        console.log({ listings: [], count: 0 });
        return { listings: [], count: 0 };
      }

      console.log({ listings: listings, count: listingsNumber as number });
      return { listings: listings, count: listingsNumber as number };
    }
  } catch (error) {
    return { listings: [], count: 0 };
  }
};

export default getListings;
