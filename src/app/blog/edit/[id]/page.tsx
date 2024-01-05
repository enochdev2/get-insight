"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, {
  ChangeEvent,
  FormEvent,
  InputHTMLAttributes,
  useEffect,
  useState,
} from "react";
import { AiOutlineFileImage } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface Image {
  setImageUrl: (value: React.SetStateAction<string>) => void;
}

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    ["clean"],
  ],
};

const EditPost = ({ params }: any) => {
  const CLOUD_NAME = "dg9ikhw52";
  const UPLOAD_PRESET = "My_Blog";

  const [title, setTitle] = useState("");
  const [except, setExcept] = useState("");
  const [desc, setDesc] = useState("");
  const [imageUrls, setImageUrl] = useState<any>({});
  const [categories, setCategories] = useState("");

  const { data: session, status } = useSession() as { data: any; status: any };
  const router = useRouter();

  useEffect(() => {
    async function fetchBlog() {
      const res = await fetch(
        `https://get-insight.vercel.app/api/blog/${params.id}`
      );
      const blog = await res.json();

      setTitle(blog.title);
      setDesc(blog.desc);
      setExcept(blog.except);
      setCategories(blog.categories);
      setImageUrl(blog.imageUrl);
    }
    fetchBlog();
  }, [params.id]);

  console.log(imageUrls);

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

    if (!imageUrls || !title || !except || !categories || !desc) {
      toast.error("All fields are required");
      return;
    }
    console.log(title);

    try {
      let imageUrl = null;
      if (imageUrls) {
        imageUrl = await uploadImage();
      }

      const body: {
        title: string;
        except: string;
        desc: string;
        categories: string;
        imageUrl?: string;
      } = {
        title,
        except,
        desc,
        categories,
      };

      if (imageUrl != null) {
        body.imageUrl = imageUrl;
      }

      const res = await fetch(`/api/blog/${params.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session?.user?.accessToken}`,
        },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        throw new Error("Error occured");
      }

      const BlogDetail = await res.json();

      router.push(`/blog/${BlogDetail?._id}`);
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
    <section className="w-screen min-h-screen pt-10 bg-slate-100 ">
      <div className="w-11/12 m-auto  bg-slate-300 rounded-lg h-fit  py-10 px-10">
        <form
          onSubmit={handleSubmit}
          className="flex w-full flex-col justify-between gap-5 border-l-indigo-100"
        >
          <h3 className="font-bold text-3xl">Edit post</h3>
          <div className="flex flex-col">
            <label htmlFor="title" className="font-bold text-lg">
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              className="h-10 px-2 py-5"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="except" className="font-bold text-lg">
              Except
            </label>
            <input
              type="text"
              name="except"
              id="except"
              className="h-10 px-2 py-5"
              value={except}
              onChange={(e) => setExcept(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="desc" className="font-bold text-lg ">
              Description
            </label>
            <ReactQuill
              value={desc}
              theme={"snow"}
              onChange={setDesc}
              modules={modules}
            />
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
              onChange={(
                e: ChangeEvent | any | InputHTMLAttributes<HTMLInputElement>
              ) => setImageUrl(e.target.files[0])}
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
              value={categories}
              onChange={(e) => setCategories(e.target.value)}
            >
              <option value="all">All</option>
              <option value="Finance">Finance</option>
              <option value="Technology">Technology</option>
              <option value="Family">Family</option>
              <option value="Business">Business</option>
            </select>
          </div>
          <div className="m-auto w-10/12">
            <button
              type="submit"
              title="submit"
              className="w-full bg-gradient-to-r from-emerald-700 to-indigo-400 text-2xl font-semibold hover:bg-gradient-to-t  rounded-lg py-2 "
            >
              Update Post
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </section>
  );
};

export default EditPost;
