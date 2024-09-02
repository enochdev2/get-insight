import db from "@/lib/db";
import { jwtVerify } from "@/lib/jwt";
import Comment from "@/models/comments";
import { headers } from "next/headers";

export async function POST(req: Request) {
  db.connect();

  const headersList = headers();
  const accessToken = headersList.get("authorization");

  const token = accessToken?.split(" ")[1];

  const decodedToken = jwtVerify(token);

  if (!decodedToken) {
    return new Response(JSON.stringify({ message: "unauthorized" }), {
      status: 401,
    });
  }

  const body = await req.json();

  let newComment = new Comment(body);
  newComment = await newComment.populate("userId");

  try {
    await newComment.save();
    return new Response(JSON.stringify(newComment), { status: 201 });
  } catch (error: any) {
    return new Response(JSON.stringify({ message: error.message }), {
      status: 500,
    });
  }
}
