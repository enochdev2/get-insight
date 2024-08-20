import Blog from "@/models/Blog";
import { jwtVerify } from "@/lib/jwt";
import { headers } from 'next/headers'
import  db from "@/lib/db";

export async function GET(req:Request) {
  try {
    await db.connect()

    const data  = await Blog.find().sort({ createdAt: -1});
    // console.log("🚀 ~ GET ~ data:", data)

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