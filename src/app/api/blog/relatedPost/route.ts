import Blog from "@/models/Blog";
import { jwtVerify } from "@/lib/jwt";
import { headers } from "next/headers";
import db from "@/lib/db";

export async function GET(req: Request) {
  try {
    // await connectDB();
    await db.connect();
    const url = new URL(req.url);
    const searchTerm = url.searchParams.get("categories");
   

    const data = await Blog.find({ categories: searchTerm })
      .sort({ createdAt: -1 })
      .limit(6);
  

    return new Response(JSON.stringify(data), { status: 201 });
  } catch (error: any) {
    console.log(error.message);
    return new Response(JSON.stringify(error.message), { status: 401 });
  }
}
