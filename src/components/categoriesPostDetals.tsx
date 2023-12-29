"use client";
import Categories from "@/components/Categories";
import FeaturedPosts from "@/components/FeaturedPosts";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import RelatedPost from "@/components/RelatedPost";

import { useRouter } from "next/navigation";

const CategoriesPostDetals = ({ categoriesPost }: any) => {
  const router = useRouter();

  const classNames =
    "dark:bg-teal-800 bg-white flex gap-4 flex-col shadow-lg rounded-lg p-8 pb-12 mb-8";

  const linkRedirect = (blog: any) => {
    const id = blog;
    router.push(`blog/${id}`);
  };

  return (
    <main className="w-full pt-0 p-2">
      <div className=" mt-3 w-full  m-auto border-b-black-700 text-xl text-center">
        FeaturedPosts{" "}
      </div>
      <div className="container  mx-auto px-5 lg:px-10 mt-4 mb-8">
        <FeaturedPosts />
        <div className="grid grid-cols-1  justify-center  gap-12 my-15">
          <div className=" col-span-1 grid grid-cols-1 lg:grid-cols-2  my-15">
            {categoriesPost?.map((blog: any, index: number) => (
              <div
                key={index}
                className="my-11 mx-8 bg-slate-200 rounded-lg m-auto  dark:bg-slate-800 shadow-md py-5 px-4"
              >
                <div className="relative w-[80%] h-36 lg:h-52 m-auto ">
                  <Image
                    src={blog.imageUrl}
                    fill
                    className=" m-auto "
                    alt="blog"
                  />
                </div>
                <h2 className="font-bold my-2 text-xl">{blog.title}</h2>
                <p>
                  {`${blog.except}`}...
                  <div onClick={() => linkRedirect(`${blog._id}`)} className="">
                    <button
                      type="button"
                      className="py-1 px-3 ml-5 text-white bg-cyan-700 rounded-md hover:bg-teal-600 "
                    >
                      Read More
                    </button>
                  </div>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default CategoriesPostDetals;
