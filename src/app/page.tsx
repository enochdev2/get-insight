import { fetchBlog } from "@/Services";
import Categories from "@/components/Categories";
import BlogCard from "@/components/blogCard";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dev-Noch Blog",
  description: "Bringing insight to your world",
  verification: {
    google: "google-site-verification: google8736e73035654ff5.html",
  },
};

export default async function Home() {
  const blogs: any = await fetchBlog();

  const classNames =
    " bg-slate-100 flex gap-2 flex-col dark:bg-slate-800 shadow-lg rounded-lg p-8 pb-12 mb-8";

  const blogCardstyle =
    "my-3 shadow-lg bg-white text-ellipsis h-[400px]  overflow-y-hidden rounded-lg py-3 gap-2 px-4 dark:bg-slate-800 py-5";

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
        <div className="w-10/12 md:w-3/4 m-auto font-serif font-semibold text-justify text-lg my-8 shadow-lg py-5 lg:px-5 px-2 rounded-lg">
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
      <section className="w-full px-3">
        <div className=" w-10/12 lgw-3/4 m-auto">

        <Categories
          style={`cursor-pointer grow block  py-3 px-2 mb-3 w-[90%] dark:bg-slate-950 rounded-lg
          bg-slate-100`}
          title={"Categories :"}
          classNames={classNames}
          />
          </div>
      </section>
      <section className="mx-2 w-full overflow-x-hidden">
        <div className="service w-10/12 overflow-x-hidden  lg:col-span-2 col-span-3 my-15 text-ellipsis py-8 mx-auto justify-center px-3 md:px-12 gap-6 bg-gray-100">
          <BlogCard blogs={blogs} blogCardstyle={blogCardstyle} />
        </div>
      </section>
    </main>
  );
}
