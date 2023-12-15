"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
import { AiOutlineFileImage } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';


interface Image {
  setImageUrl: (value: React.SetStateAction<string>) => void;
}

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'image'],
    ['clean'],
  ],
};



const Create_post = () => {
  const CLOUD_NAME = "dg9ikhw52";
  const UPLOAD_PRESET = "My_Blog";

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [imageUrls, setImageUrl] = useState<any>({});
  const [categories, setCategories] = useState("");

  const { data: session, status } = useSession() as {data: any, status:any};
  const router = useRouter();

  if (status === "loading") {
    return (
      <div className="w-screen h-screen flex justify-center items-center text-center">
        {" "}
        <p className="text-2xl font-semibold text-[000]">Loading...</p>{" "}
      </div>
    );
  }

  if (status === "unauthenticated") {
    return <p className="">Access Denied</p>;
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!imageUrls || !title || !categories || !desc) {
      toast.error("All fields are required");
      return;
    }

    try {
      const imageUrl = await uploadImage();
      console.log(imageUrl);

      const res = await fetch(`http://localhost:3000/api/blog`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session?.user?.accessToken}`,
        },
        body: JSON.stringify({
          title,
          desc,
          categories,
          imageUrl,
          userId: session?.user?._id,
        }),
      });

      // if(!res.ok){
      //   throw new Error("Error occured")
      // }

      const blog = await res.json();

      router.push(`/blog/${blog?._id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const uploadImage = async () => {
    if (!imageUrls) return;

    const formData = new FormData();

    formData.append("file", imageUrls);
    formData.append("upload_preset", UPLOAD_PRESET);

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();

      const imageUrls = data["secure_url"];

      return imageUrls;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="w-screen h-auto pt-10 mb-5 bg-slate-200 py-4 px-2">
      <div className="w-11/12 m-auto  bg-slate-400 h-fit  py-10 px-10">
        <form
          onSubmit={handleSubmit}
          className="flex w-full flex-col justify-between gap-5 border-l-indigo-100"
        >
          <h3 className="font-bold text-3xl">Create a post</h3>
          <div className="flex flex-col">
            <label htmlFor="title" className="font-bold text-lg">
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              className="h-10 px-2 py-5"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="desc" className="font-bold text-lg ">
              Description
            </label>
            {/* <Editor value={desc} onChange={setDesc} /> */}
            <div className="content">
    <ReactQuill
      value={desc}
      theme={'snow'}
      onChange={setDesc}
      modules={modules} />
    </div>
            {/* <textarea 
            name="desc"
            id="desc"
        onChange={(e) => setDesc(e.target.value)}
        value={desc}
        className="p-4 outline-none w-full rounded-lg h-40 focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" placeholder="Description" /> */}
          </div>

          <div>
            <label
              htmlFor="image"
              className="font-bold gas-6 flex flex-row text-lg border-2 bg-slate-400 rounded-md px2 py-3"
            >
              <AiOutlineFileImage size="25" /> <p> Upload Image</p>
            </label>
            <input
              type="file"
              name="image"
              id="image"
              className={!imageUrls ? "hidden" : "block"}
              onChange={(e:any) => setImageUrl(e.target.files[0])}
              accept="image/*"
            />
          </div>
          <div className="flex gap-3">
            <label htmlFor="categories" className="font-bold text-lg ">
              Categories
            </label>
            <select
              title="categories"
              name="categories"
              id="category"
              className="w-lg"
              onChange={(e) => setCategories(e.target.value)}
            >
              <option value="all">All</option>
              <option value="Finance">Finance</option>
              <option value="Leadership">Leadership</option>
              <option value="Family">Family</option>
              <option value="Business">Business</option>
              <option value="Lifestyle">Lifestyle</option>
            </select>
          </div>
          <div className="m-auto w-10/12">
            <button
              type="submit"
              title="submit"
              className="w-full bg-gradient-to-r from-emerald-700 to-indigo-400 text-2xl font-semibold hover:bg-gradient-to-t  rounded-lg py-2 "
            >
              Submit
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </section>
  );
};

export default Create_post;
