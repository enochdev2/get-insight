import { fetchBlog, fetchRecentPost } from "@/Services";
import Categories from "@/components/Categories";
import BlogCard from "@/components/blogCard";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Dev-Noch Blog",
  description: "Bringing insight to your world",
  verification: {
    google: "google-site-verification: google8736e73035654ff5.html",
  },
};

export default async function Home() {
  const blogs: any = await fetchBlog();
  const blogl = blogs.slice(0, 6);

  return (
    <main className="  flex min-h-screen flex-col items-center overflow-x-hidden justify-between bg-[f1f5f9]">
      <section className="w-screen  mx-0 px-0">
        <div className="relative w-screen lg:h-96 h-[430px]">
          <Image src="/RealInisight.jpg" alt="Real-Insight" fill />
        </div>
        <div className="z-10 md:w-2/3 w-full bg-slate-300 absolute translate-x-[-50%] md:translate-x-[-50%] translate-y-[-30%] lg:translate-y-[-30%] left-[50%] bg-transparent top-48 font-semibold m-auto text-center py-8 px-2 dark:text-black">
          <h2 className="font-bold text-2xl lg:text-3xl my-2">
            Welcome to Dev-Noch Blog,
          </h2>
          <h4 className="md:text-xl text-lg font-sans w-9/12 m-auto">
            Your ultimate destination for insightful and enriching content.
            Here, we embark on a journey through the realms of business,
            finance, family, and technology, offering you a treasure trove of
            knowledge and wisdom.
          </h4>
        </div>
        <div className="  w-10/12 lgw-3/4 flex justify-center my-5 m-auto text-center">
          <Categories
            style={`cursor-pointer grow block py-3 px-2 dark:bg-slate-950 rounded-lg
          bg-slate-100`}
            title={null}
            classNames="gradient-bg-services m-auto md:w-[60%] flex  justify-between dark:bg-slate-800 shadow-lg rounded-lg py-3 px-3 font-bold text-sky-800"
          />
        </div>
        <div className="w-10/12 md:w-3/4 m-auto font-serif font-medium md:font-semibold md:text-justify text-base md:text-lg my-8 shadow-lg py-5 lg:px-5 px-2 rounded-lg">
          <h1 className="m-auto">
            From managing finances to fostering family bonds, navigating the
            complexities of business strategies, and embracing the latest
            technological advancements, Dev-Noch blog delves into the
            multifaceted aspects of modern life. Join us as we explore the
            intricate interplay between finance, business, family dynamics, and
            technology, offering insights, tips, and strategies to achieve
            harmony and success in today&lsquo;s dynamic world.
          </h1>
        </div>
      </section>
      <section className="w-full px-3"></section>
      <section className="mx-2 w-full py-3 overflow-x-hidden">
        <div className="sm:service flex-wrap flex bg-gray-200 py-3 px-3 max-w-[85rem] gap-3 m-auto overflow-x-hidden ">
        {blogl.map((blog: any, index: number) => (
        <div key={index} className=" px-4 m-2 bg-slate-100 py-2 space-y-2">
          <div
            className="relative w-[90%] h-24 md:h-36 m-auto "
          >
            <Image src={blog.imageUrl} fill className=" m-auto " alt="blog" />
          </div>
          <div className="px-2 md:px-5 m bg-black/10 rounded-xl py-3" >
            <h2 className="font-bold my-2 mb-4 text-xl text-center">{blog.title}</h2>
            <p className="my-4  md:text-justify text-base md:text-lg text-ellipsis">
              {blog.except.substring(0, 200)}...
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
          {/* <BlogCard
            blogs={blogl}
            blogCardstyle={` dark:bg-inherit bg-gray-100 my-3 py-3 mx-auto`}
            value="home"
          /> */}
        </div>
      </section>
    </main>
  );
}


// w-10/12 overflow-x-hidden  lg:col-span-2  py-8 mx-auto justify-center px-6 md:px-12 gap-12 bg-gray-100 dark:bg-transparent

// sm:w-11/12 w-[90%] dark:bg-transparent mx-auto md:px-4 px-2 lg:px-10 gap-6 py-5 bg-gray-900 overflow-x-hidden