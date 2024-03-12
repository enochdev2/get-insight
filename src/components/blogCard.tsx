import { Blog, BlogFormData } from '@/utils/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const BlogCard = ({blogs, value, blogCardstyle}: any) => {

  const path = value;
  return (
    <>
      {blogs.map((blog: any, index: number) => (
        <div key={index} className={`${blogCardstyle}`}>
          <div
            className={`relative w-[95%] ${path === "home" ? "h-24" : "h-36"} ${
              path === "home" ? "lg:h-36" : "lg:h-52"
            }  m-auto mr-4 `}
          >
            <Image src={blog.imageUrl} fill className=" m-auto " alt="blog" />
          </div>
          <div className="px-2">
            <h2 className="font-bold my-2 mb-4 text-xl">{blog.title}</h2>
            <p className="my-4 text-justify text-ellipsis">
              {path === "home"
                ? `${blog.except.substring(0, 200)}...`
                : `${blog.except}`}
              <Link href={`blog/${blog._id}`} className="">
                <button
                  type="button"
                  className="py-1 items-center px-3 flex ml-5  text-cyan-700 rounded-md hover:text-teal-600 "
                >
                  Read More <FaArrowRightLong className="w-12" width="80px" />
                </button>
              </Link>
            </p>
          </div>
        </div>
      ))}
    </>
  );
}

export default BlogCard
