import { fetchBlog, fetchBlogs, fetchRecentPost } from "@/Services";
import Categories from "@/components/Categories";
import WhatsNew from "@/components/WhatsNew";
import BlogCard from "@/components/blogCard";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import Feedbacks from "../components/Feedbacks"
import Product from "@/components/Product";
import TechArvel from "@/components/TechArvel";
import FeaturedPosts from "@/components/FeaturedPosts";

export const metadata: Metadata = {
  title: "Dev-Noch Blog",
  description: "Bringing insight to your world",
  verification: {
    google: "google-site-verification: google8736e73035654ff5.html",
  },
};

export default async function Home() {
  const blogs: any = await fetchBlogs();
  const blogl = blogs?.datas.slice(0, 4);

  return (
    <main className="  flex min-h-screen flex-col items-center overflow-x-hidden justify-between ">
      <section className="w-screen  mx-0 px-0">
        <div className="relative w-screen lg:h-96 h-[430px]">
          <Image src="/banner.png" alt="Real-Insight" fill />
        </div>
        <div className="z-10 md:w-2/3 w-full bg-slate-300 absolute translate-x-[-50%] md:translate-x-[-50%]  translate-y-[-38%] lg:translate-y-[-30%] left-[50%] bg-transparent top-48 font-semibold m-auto text-center py-8 px-2 dark:text-black">
          <h2 className="font-bold text-2xl lg:text-3xl my-2 bg-gradient-to-r from-pink-700 via-green-800 to-blue-900 text-transparent bg-clip-text">
            Welcome to Dev-Noch Blog,
          </h2>
          <h4 className="md:text-xl bg-black/50 py-3 px-4 text-gray-200 font-medium rounded-lg text-lg font-sans w-9/12 m-auto">
            Your ultimate destination for insightful and enriching content.
            Here, we embark on a journey through the realms of business,
            finance, Web3, and technology, offering you a treasure trove of
            knowledge and wisdom.
          </h4>
        </div>
        <div className=" max-w-3xl rounded-xl bg-custom-image bg-cover bg-center flex justify-center my-5 m-auto text-center">
          <Categories
            style={`cursor-pointer grow block md:mx-3 py-3 px-2 dark:bg-slate-950 rounded-lg
          bg-slate-100`}
            title={null}
            classNames=" m-auto md:w-[70%] w-full flex  justify-between
             dark:bg-slate-800/30   rounded-lg py-3 px-1 font-bold dark:text-sky-200 text-sky-950
             "
          />
        </div>
        <div className="w-11/12 md:w-3/4 m-auto font-serif font-medium md:font-semibold md:text-justify text-lg md:text-lg my-6 bg-black/40 shadow-lg py-5 lg:px-5 px-3 rounded-lg">
          <h1 className="m-auto text-[#eeeff3]">
            From managing finances to navigating the
            complexities of business strategies, and embracing the latest
            technological advancements, Dev-Noch blog delves into the
            multifaceted aspects of modern life. Join us as we explore the
            intricate interplay between finance, business, technology, and
            Web3, offering insights, tips, and strategies to achieve
            harmony and success in today&lsquo;s dynamic world.
          </h1>
        </div>
      </section>
      <section className=" overflow-hidden xs:px-3 sm:px-3 md:px-5 md:w-3xl xl:max-w-[92rem]">
        <TechArvel/>
        {/* <div className=" mt-20 max-w-xl  px-5 rounded-xl  text- m-auto bg-gradient-to-tr from-[#080935] via-[#321894] to-[#686ec2] border-b-black-700 py-3 text-sky-100  text-xl text-center font-semibold">
        FeaturedPosts{" "}
      </div>
      <div className="w-[80%]">
      <FeaturedPosts />
      </div> */}
        <Product />
      </section>
      


      <section className="mx-2 w-full py-3 overflow-x-hidden mt-10">
      <div className=" mt-20 mb-5 max-w-xl  px-5 rounded-xl  text- m-auto bg-gradient-to-tr from-[#080935] via-[#321894] to-[#686ec2] border-b-black-700 py-3 text-sky-100  text-xl text-center font-semibold">
        Blog Post{" "}
      </div>
        <div className="sm:service flex-wrap flex bg-gray-200/10 dark:bg-transparent py-3 px-3 max-w-[85rem] gap-3 m-auto overflow-x-hidden ">
        {blogl?.map((blog: any, index: number) => (
        <div key={index} className=" px-4 m-2  bg-[#ced1e6]/70 dark:bg-black/30 py-8 rounded-lg space-y-2">
          <div
            className="relative w-[90%] h-24  md:h-36 m-auto "
          >
            <Image src={blog.imageUrl} fill className=" m-auto " alt="blog" />
          </div>
          <div className="px-2 md:px-5 dark:text- shadow-lg rounded-xl py-3" >
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
        </div>
      </section>

      <section className="md:max-w-[90%] max-w-[95%] md:px-8 bg-custom-image bg-cover bg-center dark:bg-black/30 rounded-lg my-4 px-3">
        <WhatsNew/>
      </section>
      
    </main>
  );
}

{/* <BlogCard
  blogs={blogl}
  blogCardstyle={` dark:bg-inherit bg-gray-100 my-3 py-3 mx-auto`}
  value="home"
/> */}