
import React from 'react';
import { format } from 'timeago.js'

import Image from 'next/image';
import Link from 'next/link';

const FeaturedPostCard = ({ post }: any) => (
  <div className="relative h-72">
    <div className="topimages absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-72"
     style={{ backgroundImage: `url('${post.imageUrl}')` }}
     />
    <div className="absolute rounded-lg bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full h-72" />
    <div className="flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full">
      <p className="text-white mb-4 text-shadow font-semibold text-xs">{format(post?.createdAt)}</p>
      <p className="text-white mb-4 text-shadow font-semibold text-1xl text-center">
        {post.title}
        </p>
      <div className="flex items-center absolute bottom-5 w-full justify-center">
        <Image
          unoptimized
          alt={post.title}
          height={50}
          width={50}
          className="align-middle drop-shadow-lg rounded-full"
          src={post.imageUrl}
        />
        <p className="inline align-middle text-white text-shadow ml-2 font-medium">
          {post?.userId?.username}
          </p>
      </div>
    </div>
    <Link href={`/blog/${post._id}`}
    ><span className="cursor-pointer absolute w-full h-full" /></Link>
  </div>
);

export default FeaturedPostCard;
