import prisma from "@/app/libs/prismadb";

const GetListingsPages = async () => {
  try {
    const listingsNumber = await prisma.productListing.count();
    return listingsNumber;
  } catch {
    return 0;
  }
};

export default GetListingsPages;
