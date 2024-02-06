"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState, useEffect, ChangeEvent } from "react";
import Comments from "./comments";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CommentsForm = ({ idx }: any) => {
  const { data: session, status } = useSession() as { data: any; status: any };
  const [error, setError] = useState(false);

  const [commentId, setCommentId] = useState("");
  const [commentText, setCommentText] = useState<any>("");
  const router = useRouter();

  const handlePostSubmission = async () => {
    const blogId = idx;
    console.log(blogId);

    if (!session) {
      toast.error("login to comment");
    }

    const body = {
      userId: session?.user?._id,
      blogId: idx,
      text: commentText,
    };
    const res = await fetch("https://www.dev-noch.com.ng/api/comment", {
      method: "Post",
      headers: {
        "Content-Type": "Application/json",
        Authorization: `Bearer ${session?.user?.accessToken}`,
      },
      body: JSON.stringify(body),
    });
    router.refresh();
    setCommentText("");
  };

  return (
    <>
      <div className="bg-white w-11/12 shadow-lg dark:bg-slate-800 rounded-lg p-8 pb-12 my-8 m-auto">
        <h3 className="text-xl mb-8 font-semibold border-b pb-4">
          Leave a Reply
        </h3>
        <div className="grid grid-cols-1 gap-4 mb-4 dark:bg-slate-950">
          <textarea
            onChange={(e) => setCommentText(e.target.value)}
            value={commentText}
            className="p-4 outline-none w-full rounded-lg h-40 focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700 dark:text-white  dark:bg-slate-950"
            name="comment"
            placeholder="Comment"
          />
        </div>

        {error && (
          <p className="text-xs text-red-500">All fields are mandatory</p>
        )}
        <div className="mt-8">
          <button
            type="button"
            onClick={handlePostSubmission}
            className="transition duration-500 ease hover:bg-indigo-900 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer"
          >
            Post Comment
          </button>
        </div>
        <ToastContainer />
      </div>
      <div>
        <Comments id={idx} />
      </div>
    </>
  );
};

export default CommentsForm;
