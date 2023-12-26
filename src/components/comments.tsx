"use client";

import moment from "moment";
import React, { useEffect, useState } from "react";
import { BsTrash } from "react-icons/bs";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { localhost } from "@/Services";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import parse from 'html-react-parser';

interface Commentss {
  _id: string;
  blogId: string;
  userId: { username: string; _id: string };
  text: string;
  createdAt?: Date;
  updatedAt?: Date;
}
const Comments = ({ id }: any) => {
  const [comments, setComments] = useState([]);
  const { data: session, status } = useSession() as unknown as {
    data: any;
    status: any;
  };
  console.log("🚀 ~ file: comments.tsx:25 ~ Comments ~ session:", session);
  for (const comment in comments) {
    console.log("🚀 ~ file: comments.tsx:29 ~ Comments ~ comment:", comment);
  }

  useEffect(() => {
    const fetchComment = async () => {
      const res = await fetch(`http://localhost:3000/api/comment/${id}`, {
        cache: "no-store",
      });
      const data = await res.json();

      setComments(data);
    };
    fetchComment();
  }, []);

  const handleDeleteComment = async (id: string) => {
    const token = session?.user?.accessToken;
    try {
      const res = await fetch(`http://localhost:3000/api/comment/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: "DELETE",
      });
      const data: any = res.json();
      if (res.ok) {
        toast.success(data.msg);
        setComments((prev) => {
          return [...prev].filter((c: string | any) => c?._id !== id);
        });
      }

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="bg-white  shadow-lg rounded-lg p-8 sm:w-11/12   m-auto sm:col-span-4  pb-12 mb-8">
        <h3 className="text-xl  w-11/12 mb-8 font-semibold border-b pb-4">
          {comments?.length} Comments
        </h3>
        {comments?.length > 0 && (
          <div className="bg-white w-11/12 sm:w-full dark:bg-slate-800 sm:col-span-4 shadow-lg rounded-lg p-8 pb-12 my-8 m-auto">
            {comments.map((comment: any, index: any) => (
              <div
                key={index}
                className="border-b border-gray-100 mb-4 pb-4 dark:bg-slate-800"
              >
                <div className="flex gap-3 mb-4">
                  <div className="relative dark:bg-slate-800 overflow-hidden w-9 h-[36px] bg-red-800 rounded-s-full ">
                    <Image
                      src={comment?.userId?.avatar}
                      fill
                      alt="blog"
                      className=""
                    />
                  </div>
                  <h4 className="font-semibold text-lg ">
                    {comment?.userId?.username}
                  </h4>
                </div>

                <p> {moment(comment.createdAt).format("MM-DD- YYYY")}</p>
                <div className="flex justify-between">
                  <p className="mb-4">
                    <span className="font-semibold">{comment.text}</span>
                  </p>
                  <div className="">
                    {session?.user?._id === comment?.userId?._id && (
                      <BsTrash
                        className="cursor-pointer"
                        onClick={() => handleDeleteComment(comment._id)}
                      />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <ToastContainer />
    </>
  );
};

export default Comments;
