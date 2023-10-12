import { NextResponse } from "next/server";

import prisma from "@/app/libs/prismadb";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, username, password } = body;

  const user = await prisma.user.create({
    data: {
      email,
      username,
      password,
    },
  });

  return NextResponse.json(user);
}
