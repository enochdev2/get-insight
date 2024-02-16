import React from "react";
import Image from "next/image";
import FeaturedPosts from "@/components/FeaturedPosts";
import Categories from "@/components/Categories";
import RelatedPost from "@/components/RelatedPost";
import { fetchBlog } from "@/Services";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { Metadata } from "next";
import BlogCard from "@/components/blogCard";

export const metadata: Metadata = {
  title: "Dev-Noch Blog",
  description: "Bringing insight to your world",
  verification: {
    google: "google-site-verification: google8736e73035654ff5.html",
  },
};

const Blog = async () => {
  const blogs: any = await fetchBlog();

  const path = "blog"
  
  const blogCardstyle = "my-14 shadow-md lg:flex  bg-slate-200 rounded-lg pt-5 pb-3 gap-2 px-4 dark:bg-slate-800"

  const classNames =
    " bg-slate-300 flex gap-4 flex-col dark:bg-slate-800 shadow-lg rounded-lg p-8 pb-12 mb-8";

  return (
    <main className="w-full pt-2  ">
      <div className=" mt-20 w-full  text- m-auto border-b-black-700 text-sky-900 text-xl text-center font-semibold">
        FeaturedPosts{" "}
      </div>
      <div className="container  mx-auto px-5 lg:px-10 mt-4 mb-8">
        <FeaturedPosts />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 my-15">
          <div className="lg:col-span-8 gap-3 col-span-1 my-15">
            <BlogCard blogs={blogs} blogCardstyle={blogCardstyle} value={path} />
          </div>

          <div className="lg:col-span-4 col-span-1">
            <div className="md:hidden lg:block relative top-8">
              <RelatedPost />
              <Categories
                style={`cursor-pointer grow block  py-3 px-2 mb-3 w-[95%] dark:bg-slate-950 rounded-lg
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
