import db from "@/lib/db";
import { jwtVerify } from "@/lib/jwt";
import Blog from "@/models/Blog";
import User from "@/models/User";
import { JwtPayload } from "jsonwebtoken";
import { headers } from "next/headers";

export async function GET(req: any, ctx: any) {
  await db.connect();
  const id = ctx.params.id;
  // const accessToken = req.header.get("authorization")
  //  const token = accessToken.split(" ")[1]

  //  const decodedToken = jwtVerify(token)
  //  if(!decodedToken){
  //   return new Response(JSON.stringify({ error: "unauthorized (wrong or expired token)" }), { status: 403 })

  //  }
  try {
    const blog = await Blog.findById(id);

    return new Response(JSON.stringify(blog), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(null), { status: 500 });
  }
}

export async function PUT(req: any, { params }: any) {
  const { id } = params;
  const headersList = headers();
  const accessToken:any = headersList.get("authorization");
  const token = accessToken.split(" ")[1];

  const decodedToken: any = jwtVerify(token);

  if (!accessToken || !decodedToken) {
    return new Response(
      JSON.stringify({ error: "unauthorized (wrong or expired token)" }),
      { status: 403 }
    );
  }
 
  
  const body = await req.json();
  try {
    // const blog = await Blog.findById(id)

    // if (blog?.userId !== decodedToken._id) {
    //     return new Response(JSON.stringify({ msg: 'Only author can update his blog' }), { status: 403 })
    // }
    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      { $set: { ...body } },
      { new: true }
    );

    return new Response(JSON.stringify(updatedBlog), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify(null), { status: 500 });
  }
}

export async function DELETE(req: any, ctx: any) {
  await db.connect();

  const id = ctx.params.id;

  const headersList = headers();
  const accessToken:any = headersList.get("authorization");
  const token = accessToken.split(" ")[1];

  const decodedToken: any = jwtVerify(token);


  if (!accessToken || !decodedToken) {
    return new Response(
      JSON.stringify({ message: "unauthorized (wrong or expired token)" }),
      { status: 403 }
    );
  }

  try {
    const blog = await Blog.findById(id)
    if (blog?.userId?._id.toString() !== decodedToken._id.toString()) {
      return new Response(
        JSON.stringify({ message: "Only author can delete his blog" }),
        { status: 403 }
      );
    }

    await Blog.findByIdAndDelete(id);

    return new Response(JSON.stringify({ message: "Successfully deleted blog" }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify(null), { status: 500 });
  }
}
