import { fetchBlog } from "@/Services";
import BlogCard from "@/components/blogCard";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const metadata: Metadata = {
  title: "Dev-Noch Blog",
  description: "Bringing insight to your world",
  verification: {
    google: "google-site-verification: google8736e73035654ff5.html",
  },
};

export default async function Home() {
  const blogs: any = await fetchBlog();

  const blogCardstyle =
    "my-3 shadow-lg bg-white text-ellipsis h-[400px]  overflow-y-hidden rounded-lg py-3 gap-2 px-4 dark:bg-slate-800 py-5";

  return (
    <main className="  flex min-h-screen flex-col items-center justify-between bg-[f1f5f9]">
      <section>
        <div className="relative w-full h-96">
          <Image src="/RealInisight.jpg" alt="Real-Insight" fill />
        </div>
        <div className="w-3/4 m-auto font-serif font-semibold text-justify text-lg my-8 shadow-lg py-5 px-5 rounded-lg">
          <h1>
            From managing finances to fostering family bonds, navigating the
            complexities of business strategies, and embracing the latest
            technological advancements, our blog delves into the multifaceted
            aspects of modern life. Join us as we explore the intricate
            interplay between finance, business, family dynamics, and
            technology, offering insights, tips, and strategies to achieve
            harmony and success in today's dynamic world.
          </h1>
        </div>
      </section>
      <section>
        <div className="service lg:col-span-2 col-span-3 my-15 text-ellipsis py-8  px-12 gap-6 bg-gray-100">
          <BlogCard blogs={blogs} blogCardstyle={blogCardstyle} />
        </div>
      </section>
    </main>
  );
}
