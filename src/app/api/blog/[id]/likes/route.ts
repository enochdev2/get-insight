import Blog from "@/models/Blog";
import { jwtVerify } from "@/lib/jwt";
import { headers } from 'next/headers'
import  db from "@/lib/db";

export async function PUT(req:Request, { params }: any) {
    await db.connect()

    const id = params.id
    const headersList = headers();
    const accessToken:any = headersList.get("authorization");
    const token = accessToken.split(" ")[1];


    const decodedToken: any = jwtVerify(token);





    if (!accessToken || !decodedToken) {
        return new Response(JSON.stringify({ error: "unauthorized (wrong or expired token)" }), { status: 403 })
    }

    try {
        const blog = await Blog.findById(id)
        
        if(blog.likes.includes(decodedToken._id)){
          blog.likes = blog.likes.filter((id:any) => id.toString() !== decodedToken._id.toString())
        } else {
            blog.likes.push(decodedToken._id)
        }
    
        await blog.save()

        return new Response(JSON.stringify({msg: 'Successfully interacted with the blog'}), {status: 200})
    } catch (error) {
        return new Response(JSON.stringify(null), { status: 200 })
    }
}