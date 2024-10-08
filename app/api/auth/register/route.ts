import { NextResponse } from "next/server";

import prisma from "@/libs/prismadb";

import bcrypt from "bcrypt";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, username, password } = body;

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await prisma.user.create({
    data: {
      email,
      username,
      password: hashedPassword,
    },
  });

  return NextResponse.json(user);
}
