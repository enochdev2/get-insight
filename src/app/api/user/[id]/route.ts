// import User from "@/models/User";
import bcrypt from "bcrypt";
import db from "@/lib/db";
import User from "@/models/User";
import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { jwtVerify } from "@/lib/jwt";

export async function PUT(req: any, { params }: any) {
  const { id } = params;
  const headersList = headers();
  const accessToken: any = headersList.get("authorization");
  const token = accessToken.split(" ")[1];

  const decodedToken: any = jwtVerify(token);

  if (!accessToken || !decodedToken) {
    return new Response(
      JSON.stringify({ error: "unauthorized (wrong or expired token)" }),
      { status: 403 }
    );
  }

  const {
    username,
    email,
    imageUrl,
    country,
    phone,
    address,
    postalcode,
    city,
  } = await req.json();
  

  await db.connect();

  try {
    const NewUser = await User.findOne({ _id: decodedToken._id });

    if (NewUser?._id.toString() !== decodedToken._id.toString()) {
      return new Response(
        JSON.stringify({ message: "Only author can update his profile" }),
        { status: 403 }
      );
    }

    if (req.body.password) {
      req.body.password = await bcrypt.hash(req.body.password, 10);
    }

    const UserInfo = await User.findByIdAndUpdate(
      id,
      {
        $set: {
          username: username,
          email: email,
          password: req.body.password,
          avatar: imageUrl,
          country: country,
          phone: phone,
          address: address,
          postalcode: postalcode,
          city: city,
        },
      },
      { new: true }
    );

    await UserInfo.save();
    const { password, ...rest } = UserInfo._doc;
    console.log(rest);

    return new NextResponse(JSON.stringify(rest), { status: 201 });
  } catch (error: any) {
    return new Response(JSON.stringify(error.message));
  }
}
