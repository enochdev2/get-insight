import BlogCard from "@/components/blogCard";
import Categories from "@/components/Categories";
import FeaturedPosts from "@/components/FeaturedPosts";
import Pagination from "@/components/Pagination";
import RelatedPost from "@/components/RelatedPost";
import { fetchBlog } from "@/Services";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dev-Noch Blog",
  description: "Bringing insight to your world",
  verification: {
    google: "google-site-verification: google8736e73035654ff5.html",
  },
};

const Blog = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  // const pageNumbers = pageNumber
  const bloog: any = await fetchBlog(page);
  const blogs = bloog.datas;
  const isNext = bloog.isNext;

  const path = "blog";

  const blogCardstyle =
    "my-14 shadow-md lg:flex  bg-slate-200 rounded-lg pt-5 pb-3 gap-2 px-4 dark:bg-slate-800";

  const classNames =
    " ";

  return (
    <main className="w-full pt-2  ">
      <div className=" mt-20 w-full  text- m-auto border-b-black-700 text-sky-900 text-xl text-center font-semibold">
        FeaturedPosts{" "}
      </div>
      <div className="container  mx-auto px-5 lg:px-10 mt-4 mb-8">
        <FeaturedPosts />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 my-15">
          <div className="lg:col-span-8 gap-3 col-span-1 my-15">
            <BlogCard
              blogs={blogs}
              blogCardstyle={blogCardstyle}
              value={path}
            />
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
      <Pagination
        pageNumber={searchParams?.page ? +searchParams.page : 1}
        isNext={isNext}
      />
    </main>
  );
};

export default Blog;
