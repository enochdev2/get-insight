import Image from "next/image";
import { fetchSingleBlog } from "@/Services";
import CommentsForm from "@/components/commentsForm";
import BlogDetailsClient from "@/components/BlogDetailsClient";
import moment from "moment";
import RelatedPost from "@/components/RelatedPost";
import { Metadata } from "next";



// export const generatemetadata: Metadata = {
//   title: "TechNoch Blog",
//   description: "Bringing insight to your world",
// };




const BlogDetails = async ({ params }: any) => {
  const BlogDetail = await fetchSingleBlog(params.id);
  const idx = params.id as string;

  const handleLike = () => {};

  return (
    <main className="w-full md:grid flex flex-col md:grid-cols-4 pt-0 px-1 py-5">
      <div className="px-2 w-[98%] m-auto mt-20 lg:col-span-3 col-span-4 grid place-items-center gap-3">
        <div className="w-full">
          <div className="font-bold my-8 m-auto text-center text-2xl">
            {BlogDetail?.title}
          </div>
          <div className="relative overflow-hidden w-[90%] h-[200px] bg-red-800 m-auto">
            <Image src={BlogDetail?.imageUrl} fill alt="blog" className="" />
          </div>
          <div className="my-1 py-5 px-2">
            <p className="text-black m-2 mb-4 shadow-md font-semibold text-base w-full flex justify-between dark:text-white dark:border py-3 px-3 rounded-lg ">
              <span>
                {" "}
                Author: <span>{BlogDetail?.userId?.username}</span>{" "}
              </span>{" "}
              Time posted:{" "}
              {moment(BlogDetail?.createdAt).format("MMM DD, YYYYY")}{" "}
            </p>
          </div>

          <div className="flex w-full ">
            <BlogDetailsClient id={BlogDetail._id} BlogDetail={BlogDetail} />
          </div>
          <div
            className=" content py-3 px-5 text-lg 
          text-justify"
            dangerouslySetInnerHTML={{ __html: BlogDetail?.desc }}
          />
        </div>
      </div>
      <div className="md:hidden lg:block relative top-8 right-3">
        <div className="md:hidden lg:block relative top-8 right-3">
          <RelatedPost categories={BlogDetail?.categories} />
        </div>
      </div>

      <div className="sm:col-span-4 col-span-1">
        <CommentsForm idx={idx} />
       
      </div>
    </main>
  );
};

export default BlogDetails;
