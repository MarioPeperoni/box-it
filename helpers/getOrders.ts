import prisma from "@/libs/prismadb";

const getOrders = async (userId: string, includeAll = true) => {
  try {
    const orders = prisma.order.findMany({
      where: {
        buyerId: userId,
      },
      include: {
        addres: includeAll,
        product: {
          include: {
            seller: includeAll,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    if (!orders) {
      return null;
    }

    return orders;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default getOrders;
