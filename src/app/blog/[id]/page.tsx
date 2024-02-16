import Image from "next/image";
import { fetchSingleBlog } from "@/Services";
import CommentsForm from "@/components/commentsForm";
import BlogDetailsClient from "@/components/BlogDetailsClient";
import moment from "moment";
import RelatedPost from "@/components/RelatedPost";
import { Metadata } from "next";


export async function generateMetadata({
  params,
}: {
  params: any;
}): Promise<Metadata> {
  const BlogDetail = await fetchSingleBlog(params.id);
  if (!BlogDetail)
    return {
      title: "not Found",
      description: "the page is not found",
  
    };

  return {
    title: BlogDetail.title,
    description: BlogDetail.except,
    openGraph: {
      images: [BlogDetail.imageUrl]
    },
    verification:{
      google: "google-site-verification: google8736e73035654ff5.html"
     },
    alternates:{
      canonical: `https://www.dev-noch.com.ng/blog/${params.id}`
    }
  };
}



const BlogDetails = async ({ params }: any) => {
  const BlogDetail = await fetchSingleBlog(params.id);
  
  const idx = params.id as string;

  const handleLike = () => {};

  return (
    <main className="w-full sm:grid flex flex-col md:grid-cols-4 gap-2 pt-2 px-0 py-5">
      <div className="px-4 md:px-5 overflow-x-hidden shadow-lg w-[98%] m-auto mt-20 lg:col-span-3 col-span-4 grid place-items-center gap-3">
        <div className="w-full">
          <div className="font-bold my-8 m-auto text-center text-2xl">
            {BlogDetail?.title}
          </div>
          <div className="relative overflow-hidden w-[90%] h-[200px] shadow-md rounded-lg m-auto">
            <Image src={BlogDetail?.imageUrl} fill alt="blog" className="shadow-md" />
          </div>
          <div className="my-1 py-5 px-2">
            <p className="text-black m-2 mb-4 shadow-md font-semibold text-base w-full flex justify-between dark:text-white dark:border py-3 px-3 rounded-lg ">
              <span>
                {" "}
                Author:{" "}
                <span>
                  {BlogDetail?.userId?.username
                    ? BlogDetail?.userId?.username
                    : "Enoch Promise"}
                </span>{" "}
              </span>{" "}
              Time: {moment(BlogDetail?.createdAt).format("MMM DD, YYYYY")}{" "}
            </p>
          </div>

          <div className="flex w-full ">
            <BlogDetailsClient id={BlogDetail._id} BlogDetail={BlogDetail} />
          </div>
          <div
            className=" content py-3 px-3 md:px-5 md:text-lg text-[18px] 
          text-justify whitespace-no-wrap md:whitespace-normal font-sans"
            dangerouslySetInnerHTML={{ __html: BlogDetail?.desc }}
          />
        </div>
      </div>

      <div className=" lg:block lg:relative top-10 right-1 m-auto w-full bg-red-500">
        <div className="md:hidden relative lg:block  mx-auto top-8 right-3">
          <RelatedPost categories={BlogDetail?.categories} />
        </div>
      </div>

      <div className="sm:col-span-4 col-span-1">
        <CommentsForm idx={idx} />
      </div>
    </main>
  );
};

export default BlogDetails;
