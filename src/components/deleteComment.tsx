"use client"
import { useSession } from 'next-auth/react'
import React, { useState } from 'react'
import { BsTrash } from 'react-icons/bs'

const DeleteComment = ({commentUserID,commentId}:any) => {
const [comments, setComments] = useState('')
const {data:session,status} = useSession() as { data:any , status:string}


const handleDeleteComment = async (id: string) => {
    const token = session?.user?.accessToken
    try {
      await fetch(`http://localhost:3000/api/comment/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: "DELETE",
      });

    //   setComments((prev) => {
    //     return [...prev].filter((c) => c?._id !== id);
    //   });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
        <div className="">
                  {session?.user === commentUserID && (
                    <BsTrash
                      className="cursor-pointer"
                      onClick={() => handleDeleteComment(commentId)}
                    />
                  )}
    </div>
    </div>
  )
}

export default DeleteComment
