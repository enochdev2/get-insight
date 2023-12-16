import React from "react";
import Image from "next/image";
import FeaturedPosts from "@/components/FeaturedPosts";
import Categories from "@/components/Categories";
import RelatedPost from "@/components/RelatedPost";
import { fetchBlog } from "@/Services";
import Link from "next/link";

const Blog = async () => {
  const blogs: any = await fetchBlog();

  const classNames =
    " bg-slate-300 flex gap-4 flex-col shadow-lg rounded-lg p-8 pb-12 mb-8";

  return (
    <main className="w-full pt-2   ">
      <div className="sticky -mt-2 pt-4 pb-3 top-[65px] bg-slate-300 flex justify-center pr-4 z-[999]">
        <Categories
          style={`mx-3 md:mx-6 px-3 py-2 rounded-lg bg-slate-200 `}
          title={null}
          classNames={` text-[#314E52]  flex justify-space-around font-bold items-center h-full md:w-3xl pt-2 pb-1  my-2`}
        />
      </div>
      <div className=" mt-2 w-full   m-auto border-b-black-700 text-xl text-center font-semibold">
        FeaturedPosts{" "}
      </div>
      <div className="container  mx-auto px-5 lg:px-10 mt-4 mb-8">
        <FeaturedPosts />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 my-15">
          <div className="lg:col-span-8 col-span-1 my-15">
            {blogs.map((blog: any, index: number) => (
              <div
                key={index}
                className="my-14 shadow-md lg:flex  bg-slate-200 rounded-lg py-5 gap-2 px-4"
              >
                <div className="relative w-[95%] h-36 lg:h-52 m-auto mr-4 ">
                  <Image
                    src={blog.imageUrl}
                    fill
                    className=" m-auto "
                    alt="blog"
                  />
                </div>
                <div className="px-2">
                  <h2 className="font-bold my-2 mb-8 text-xl">{blog.title}</h2>
                  <p className="my-4">
                    {`${blog.desc}`.substring(1, 200)}...
                    <Link href={`blog/${blog._id}`} className="">
                      <button
                        type="button"
                        className="py-1 px-3 ml-5 text-white bg-cyan-700 rounded-md hover:bg-teal-600 "
                      >
                        Read More
                      </button>
                    </Link>
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="lg:col-span-4 col-span-1">
            <div className="md:hidden lg:block relative top-8">
              <RelatedPost />
              <Categories
                style={`cursor-pointer grow block  py-3 px-2 mb-3 w-[95%] rounded-lg
                 bg-slate-200`}
                title={"Categories :"}
                classNames={classNames}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Blog;
