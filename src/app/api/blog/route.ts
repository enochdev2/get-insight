import Blog from "@/models/Blog";
import { jwtVerify } from "@/lib/jwt";
import { headers } from 'next/headers'
import  db from "@/lib/db";

export async function GET(req:Request) {
  try {
    await db.connect()
    const url = new URL(req.url);
    const page = url.searchParams.get("page");
    const pageNumber = Number(page);
    console.log("🚀 ~ GET ~ pageNumber :", pageNumber )

    const pageSize = 10

     // Calculate the number of users to skip based on the page number and page size.
     const skipAmount = (pageNumber - 1) * pageSize;


    const datas : any = await Blog.find().sort({ createdAt: -1}).skip(skipAmount)
    .limit(pageSize);


    const totalBlogCount = await Blog.countDocuments();
    console.log("🚀 ~ GET ~ totalBlogCount:", totalBlogCount)

    
    // const blogs = await datas.exec();
    
    const isNext = totalBlogCount > skipAmount + datas.length;
    console.log("🚀 ~ GET ~ skipAmount:", skipAmount)
    console.log("🚀 ~ GET ~ datas.length:", datas.length)
    console.log("🚀 ~ GET ~ isNext:", isNext)

    const data = {datas, isNext}
    return new Response(JSON.stringify(data), { status: 201 });

  } catch (error: any) {
    console.log(error.message);
    return new Response(JSON.stringify(error.message), { status: 401 });
  }
}

export async function POST(req:any) {
 await db.connect()
 console.log(db.connect);
 
 const headersList = headers();
 const  accessToken:any  = headersList.get("authorization");
  const token = accessToken.split(" ")[1]

  
  const decodedToken = jwtVerify(token)
  
  if(!decodedToken){
    return new Response(JSON.stringify({error: "unauthorize"}))
  }
  
  const body = await req.json()
  console.log("🚀 ~ file: route.ts:35 ~ POST ~ body:", body.except)
  
  const NewBlog = new Blog(body)
  console.log("🚀 ~ file: route.ts:36 ~ POST ~ NewBlog:", NewBlog)
  
  try {
    await NewBlog.save();

        return new Response(JSON.stringify(NewBlog), { status: 201 })
    } catch (error:any) {
        return new Response(JSON.stringify(error.message), { status: 500 })
    }
    
}