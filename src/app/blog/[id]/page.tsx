import Image from "next/image";
import { fetchSingleBlog } from "@/Services";
import CommentsForm from "@/components/commentsForm";
import BlogDetailsClient from "@/components/BlogDetailsClient";
import Comments from "@/components/comments";
import moment from "moment";
import RelatedPost from "@/components/RelatedPost";
// import {ShareSocial} from 'react-share-social'

import { getServerSession } from "next-auth/next";
import Categories from "@/components/Categories";

const BlogDetails = async ({ params }: any) => {
  const BlogDetail = await fetchSingleBlog(params.id);
  const idx = params.id as string;

  const handleLike = () => {};

  return (
    <main className="w-full md:grid flex flex-col md:grid-cols-4 pt-0 py-5">
      <div className="sticky col-span-4 w-full -mt-2 pt-4 pb-3 top-[60px] bg-slate-300 flex justify-center pr-4 z-[999]">
        <Categories
          style={`mx-3 md:mx-6 px-3 py-2 rounded-lg bg-slate-200 `}
          title={null}
          classNames={` text-[#314E52]  flex justify-space-around font-bold items-center h-full md:w-3xl py-2  my-2`}
        />
      </div>

      <div className="px-3 w-[90%] m-auto md:col-span-3  grid place-items-center gap-3">
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

          {/* <p className="py-3 px-5 text-lg text-justify">{BlogDetail?.desc.slice(0,370)}</p> */}
          <div className="relative overflow-hidden w-[70%] h-[150px] bg-red-800 m-auto">
            <Image src={BlogDetail.imageUrl} fill alt="blog" className="" />
          </div>
          {/* <p className="py-3 px-5 text-lg 
          text-justify">{BlogDetail?.desc.slice(370,700)}</p> */}
          <div
            className=" content py-3 px-5 text-lg 
          text-justify"
            dangerouslySetInnerHTML={{ __html: BlogDetail?.desc }}
          />
        </div>
      </div>
      <div className="">
        <div className="md:hidden lg:block relative top-8">
          <RelatedPost categories={BlogDetail?.categories} />
        </div>
      </div>

      <div className="sm:col-span-4 col-span-1">
        <CommentsForm idx={idx} />
        <Comments id={params.id} />
      </div>
    </main>
  );
};

export default BlogDetails;
