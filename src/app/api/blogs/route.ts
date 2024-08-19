import db from "@/lib/db";
import Blog from "@/models/Blog";

export async function GET(req:Request) {
  try {
    await db.connect()
    const url = new URL(req.url);
    const page = url.searchParams.get("page");
    const pageNumber: number = Number(page);
    console.log("🚀 ~ GET ~ pageNumber :", pageNumber )

    const pageSize = 10

     // Calculate the number of users to skip based on the page number and page size.
     const skipAmount = (pageNumber - 1) * pageSize;
     const skipValue = Math.max(0, skipAmount)


    const datas : any = await Blog.find().sort({ createdAt: -1}).skip(skipValue)
    .limit(pageSize);


    const totalBlogCount = await Blog.countDocuments();

    
    // const blogs = await datas.exec();
    
    const isNext = totalBlogCount > skipAmount + datas.length;

    const data = {datas, isNext}
    return new Response(JSON.stringify(data), { status: 201 });

  } catch (error: any) {
    console.log(error.message);
    return new Response(JSON.stringify(error.message), { status: 401 });
  }
}