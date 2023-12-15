import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { fetchRecentPost, fetchRelatedPost } from "@/Services";

type Post = {
  title: string;
  _id: string;
  imageUrl: string;
};

const ReletedPost = async ({ categories }: any) => {
  // const path = usePathname()

  const relatedPosts = categories
    ? await fetchRelatedPost(categories)
    : await fetchRecentPost();

    console.log(categories);
    

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        {categories ?  "related Posts" : "recent Posts" }
      </h3>
      {relatedPosts.map((post: Post, index: number) => (
        <div
          key={index}
          className="flex items-center w-full py-2 px-1 rounded-lg bg-neutral-200 mb-4"
        >
          <div className="w-16 flex-none">
            <Image
              alt={post.title}
              height="60"
              width="60"
              unoptimized
              className="align-middle rounded-full"
              src={post.imageUrl}
            />
          </div>
          <div className="flex-grow ml-4">
            {/* <p className="text-gray-500 font-xs">{moment(post.createdAt).format('MMM DD, YYYY')}</p> */}
            <Link href={`blog/${post._id.toString()}`} className="text-sm" key={index}>
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReletedPost;
