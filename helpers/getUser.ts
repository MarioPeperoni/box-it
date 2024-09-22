import prisma from "@/libs/prismadb";

import getSession from "./getSession";

const getUser = async (id?: string) => {
  if (id) {
    try {
      const user = await prisma.user.findUnique({
        where: {
          id,
        },
      });

      if (!user) {
        return null;
      }

      return user;
    } catch {
      return null;
    }
  } else {
    try {
      const session = await getSession();

      if (!session?.user?.email) {
        return null;
      }

      const currentUser = await prisma.user.findUnique({
        where: {
          email: session.user.email as string,
        },
      });

      if (!currentUser) {
        return null;
      }

      return currentUser;
    } catch {
      return null;
    }
  }
};

export default getUser;
