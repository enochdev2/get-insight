import db from "@/lib/db";
import { jwtVerify } from "@/lib/jwt";
import User from "@/models/User";
import Comment from "@/models/comments";
import { headers } from "next/headers";

export async function GET(req: Request, { params }: any) {
  await db.connect();
  const { id } = params;
  console.log(id);

  try {
    const comments = await Comment.find({ blogId: id }).populate("userId");

    // console.log(comments);

    return new Response(JSON.stringify(comments), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify(null), { status: 500 });
  }
}

export async function DELETE(req: Request, ctx: any) {
  await db.connect();

  const id = ctx.params.id;

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

  try {
    const comment = await Comment.findById(id);
    console.log("🚀 ~ file: route.ts:48 ~ DELETE ~ comment:", comment);
    if (comment.userId.toString() !== decodedToken._id.toString()) {
      return new Response(
        JSON.stringify({ msg: "Only author can delete his blog" }),
        { status: 401 }
      );
    }

    await Comment.findByIdAndDelete(id);

    return new Response(
      JSON.stringify({ msg: "Successfully deleted comment" }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(JSON.stringify(null), { status: 500 });
  }
}
