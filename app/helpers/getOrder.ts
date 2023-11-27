import prisma from "@/app/libs/prismadb";

const getOrder = async (orderId: string) => {
  try {
    const order = prisma.order.findFirst({
      where: {
        id: orderId,
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
