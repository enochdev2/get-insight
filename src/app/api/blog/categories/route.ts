import Blog from "@/models/Blog";
import { jwtVerify } from "@/lib/jwt";
import { headers } from "next/headers";
import db from "@/lib/db";

export async function GET(req: Request) {
  try {
    await db.connect();
    const url = new URL(req.url);
    const searchTerm = url.searchParams.get("categories");
    console.log("🚀 ~ file: route.ts:12 ~ GET ~ searchTerm:", searchTerm);

    const data = await Blog.find({ categories: searchTerm });

    return new Response(JSON.stringify(data), { status: 201 });
  } catch (error: any) {
    console.log(error.message);
    return new Response(JSON.stringify(error.message), { status: 401 });
  }
}
