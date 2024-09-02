import Blog from "@/models/Blog";
import db from "@/lib/db";

export async function GET(req: Request) {
  try {
    await db.connect();

    const data = await Blog.find().sort({ createdAt: -1 }).limit(6);
    return new Response(JSON.stringify(data), { status: 201 });
  } catch (error: any) {
    return new Response(JSON.stringify(error.message), { status: 401 });
  }
}
