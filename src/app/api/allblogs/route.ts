import db from "@/lib/db";
import Blog from "@/models/Blog";

export async function GET(req: Request) {
  try {
    await db.connect();

    const url = new URL(req.url);
    const page = url.searchParams.get("page");

    // Convert the page parameter to a number, defaulting to 1 if not provided or invalid.
    const pageNumber: number = page ? Number(page) || 1 : 1;
    // console.log("🚀 ~ GET ~ pageNumber:", pageNumber);

    const pageSize = 10;

    // Calculate the number of documents to skip based on the page number and page size.
    const skipAmount = (pageNumber - 1) * pageSize;

    // Ensure skipAmount is not negative
    const skipValue = Math.max(0, skipAmount);

    // Fetch blogs with pagination and sorting by creation date (most recent first).
    const blogs = await Blog.find().sort({ createdAt: -1 }).skip(+skipValue).limit(pageSize);

    // Count the total number of blog documents in the collection.
    const totalBlogCount = await Blog.countDocuments();

    // Determine if there are more blogs to fetch after the current page.
    const isNext = totalBlogCount > skipAmount + blogs.length;

    // Prepare the response data object.
    const data = { blogs, isNext };

    // Return the paginated blogs and whether there are more blogs to fetch.
    return new Response(JSON.stringify(data), { status: 201 });
  } catch (error: any) {
    console.log(error.message);
    return new Response(JSON.stringify({ error: error.message }), { status: 401 });
  }
}
