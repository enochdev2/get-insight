import moment from "moment";
import React, { useEffect, useState } from "react";
import { BsTrash } from "react-icons/bs";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { fetchComment } from "@/Services";
import Image from "next/image";

// import parse from 'html-react-parser';

interface Commentss {
  _id: string;
  blogId: string;
  userId: { username: string; _id: string };
  text: string;
  createdAt?: Date;
  updatedAt?: Date;
}
const Comments = async ({ id }: any) => {
  

  const comments: any = await fetchComment(id);
  // {commentSection.map((comment)=>(

  //   <p>{comment.text}</p>
  // ))}

  // const handleDeleteComment = async (id: string) => {
  //   try {
  //     await fetch(`http://localhost:3000/api/comment/${id}`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //       method: "DELETE",
  //     });

  //     setComments((prev) => {
  //       return [...prev].filter((c) => c?._id !== id);
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <>
      <div className="bg-white  shadow-lg rounded-lg p-8 sm:w-11/12   m-auto sm:col-span-4  pb-12 mb-8">
        <h3 className="text-xl  w-11/12 mb-8 font-semibold border-b pb-4">
          {comments?.length} Comments
        </h3>
        {comments?.length > 0 && (
          <div className="bg-white w-11/12 sm:w-full sm:col-span-4 shadow-lg rounded-lg p-8 pb-12 my-8 m-auto">
            {comments.map((comment: any, index: any) => (
              <div key={index} className="border-b border-gray-100 mb-4 pb-4">
                <div className="flex gap-3 mb-4">

                <div className="relative overflow-hidden w-9 h-[36px] bg-red-800 rounded-s-full ">
            <Image src={comment?.userId?.avatar} fill alt="blog" className="" />
          </div>
                <h4 className="font-semibold text-xl uppercase">{comment?.userId?.username}</h4>
                </div>

                
                <p> {moment(comment.createdAt).format("MM-DD- YYYY")}</p>
                <div className="flex justify-between">
                  <p className="mb-4">
                  
                    <span className="font-semibold">{comment.text}</span>
                  </p>
                  {/* <div className="">
                  {session?.user === comment?.userId && (
                    <BsTrash
                      className="cursor-pointer"
                      onClick={() => handleDeleteComment(comment._id)}
                    />
                  )}
                </div> */}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Comments;
