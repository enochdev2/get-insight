"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BsFillPencilFill } from "react-icons/bs";
import { AiFillDelete, AiFillLike, AiOutlineDislike } from "react-icons/ai";
import { useSession } from "next-auth/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Blog } from "@/utils/types";
import { useRouter } from "next/navigation";

const BlogDetailsClient = ({ id, BlogDetail }:{id:string|number,BlogDetail:Blog}) => {
  const { data: session, status } = useSession() as {data:any, status:any};
  const Router = useRouter();
  const [isLiked, setIsLiked] = useState(true);
  const [blogLikes, setBlogLikes] = useState(0);


  const handleDelete = async () => {
    try {
      const confirmModal = confirm(
        "Are you sure you want to delete your blog?"
      );

      if (confirmModal) {
        const res = await fetch(`http://localhost:3000/api/blog/${id}`, {
          headers: {
            Authorization: `Bearer ${session?.user?.accessToken}`,
          },
          method: "DELETE",
        });
        const data = await res.json();
        toast.error(data.message);
        if (res.ok) {
          Router.push("/");
        }
      }
    } catch (error) {
      toast.error("Error occured while logging");
    }
  };

  const handleLike = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/blog/${id}/likes`, {
        headers: {
          Authorization: `Bearer ${session?.user?.accessToken}`,
        },
        method: "PUT",
      });

      if (res.ok) {
        if (isLiked) {
          setIsLiked((prev) => !prev);
          setBlogLikes((prev) => prev + 1);
        } else {
          setIsLiked((prev) => !prev);
          setBlogLikes((prev) => prev - 1);
        }
      }
    } catch (error) {
      toast.error("You must first Log in");
    }
  };

  return (
    <>
      <div className="flex w-full bg-slate-300 p-2 rounded-md dark:bg-white justify-between mt-1 m-3 px-4">
        <div className="">
          Category: <span>{BlogDetail?.categories}</span>
        </div>
        <div className="flex items-center  cursor-pointer">
          {blogLikes}{" "}
          {isLiked ? (
            <AiFillLike
              size={20}
              onClick={handleLike}
              style={{ color: "blue" }}
            />
          ) : (
            <AiOutlineDislike
              size={20}
              onClick={handleLike}
              style={{ color: "blue" }}
            />
          )}
        </div>
        {session?.user?.id === BlogDetail?.userId?.username && (
          <div className="flex gap-4">
            <Link className="flex items-center gap-1" href={`/blog/edit/${id}`}>
              Edit
              <BsFillPencilFill style={{ color: "blue" }} />
            </Link>
            <button
              type="button"
              className="flex gap-1 items-center"
              onClick={handleDelete}
            >
              Delete
              <AiFillDelete style={{ color: "red" }} />
            </button>
          </div>
        )}
      </div>
      <ToastContainer />
    </>
  );
};

export default BlogDetailsClient;
