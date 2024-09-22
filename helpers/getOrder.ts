import prisma from "@/libs/prismadb";

const getOrder = async (orderId: string, includeAll = true) => {
  try {
    const order = prisma.order.findFirst({
      where: {
        id: orderId,
      },
      include: {
        addres: includeAll,
        product: {
          include: {
            seller: includeAll,
          },
        },
      },
    });

    if (!order) {
      return null;
    }

    return order;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default getOrder;
