import db from "@/lib/db";
import User from "@/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req: any) {
  const { username, password, email } = await req.json();

  await db.connect();

  const NewUser = await User.findOne({ email: email });

  if (NewUser) {
    return new NextResponse("User already Exist!", { status: 400 });
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const UserInfo = new User({
    username,
    password: hashPassword,
    email,
  });

  try {
    await UserInfo.save();

    return new NextResponse(JSON.stringify(UserInfo), { status: 201 });
  } catch (error: any) {
    return new Response(JSON.stringify(error.message));
  }
}
