"use client";
import { useRef, useState, useEffect, ChangeEvent, FormEvent } from "react";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ProfileForm } from "@/utils/types";
import { BsArrowReturnRight } from "react-icons/bs";
interface Image {
  setImageUrl: (value: React.SetStateAction<string>) => void;
}

export default function ProfileDetail({ session }: any) {
  // const { data: session, status } = useSession() as { data: any; status: any };
  const router = useRouter();

  const fileRef = useRef<any>(null);
  const [file, setFile] = useState("");
  const [filePerc, setFilePerc] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setphone] = useState("");
  const [address, setAddress] = useState("");
  const [postalcode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");

  const [imageUrls, setImageUrl] = useState<any>({});

  console.log(imageUrls);

  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);

  const handleFileUpload = (file: any) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setFilePerc(Math.round(progress));
      },
      (error) => {
        setFileUploadError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
          setImageUrl(downloadURL)
        );
      }
    );
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const body: ProfileForm = {
        username,
        email: session?.user?.email,
        password,
        imageUrls,
        country,
        phone,
        address,
        postalcode,
        city,
      };

      const res = await fetch(`/api/user/${session?.user?._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session?.user?.accessToken}`,
        },
        body: JSON.stringify(body),
      });

      const data = await res.json();
      if (!res.ok) {
        toast.error(data.message);
      } else {
        toast.success("User Updated Successfully");
        router.refresh();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!file) {
      setImageUrl(session?.user?.image);
    }
  }, []);

  return (
    <div className=" relative p-3 max-w-screen-lg pb-2 mx-auto">
      <div className="justify-self-end absolute top-3 right-1 md:max-w-lg ">
        {session?.user?.role === "admin" && (
          <span
            //   onClick={handleDeleteUser}
            className=" py-3 px-3 bg-teal-600 font-semibold rounded-2xl text-wite cursor-pointer"
          >
            <Link href="/createBlog">Create Post</Link>
          </span>
        )}
      </div>
      <form
        onSubmit={handleSubmit}
        className=" flex-col shadow-lg shadow-sky-800 rounded-lg items-center m-auto py-5 pb-3 px-5 md:max-w-[550px] w-[80%] gap-4 mb-5 dark:bg-slate-800"
      >
        <div className="w-full my-2">
          <input
            onChange={(e: any) => setFile(e.target.files[0])}
            type="file"
            ref={fileRef}
            hidden
            accept="image/*"
          />
          <Image
            onClick={() => fileRef.current.click()}
            src={imageUrls}
            width={400}
            height={400}
            alt="profile"
            className="rounded-full m-auto mb-4 h-32 w-32 object-cover bg-slate-400 cursor-pointer self-center mt-2"
          />
        </div>
        <div className="w-full my-2">
          <input
            type="text"
            placeholder="username"
            defaultValue={session?.user?.name}
            id="username"
            className="border w-full p-3 rounded-lg"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="w-full my-3">
          <input
            disabled
            type="email"
            placeholder="email"
            id="email"
            defaultValue={session?.user?.email}
            className="border w-full p-3 rounded-lg"
          />
        </div>
        <>
          <div>
            <label className="block text-left">Country</label>
            <input
              type="text"
              placeholder="Country"
              className="border p-3 rounded-lg w-full"
              value={session?.user?.country || country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
          <div>
            <label className="block">Phone</label>
            <input
              type="tel"
              placeholder="Phone number"
              className="border p-3 rounded-lg w-full"
              value={session?.user?.phone || phone}
              onChange={(e) => setphone(e.target.value)}
            />
          </div>
          <div>
            <label className="block">Street address</label>
            <input
              type="text"
              placeholder="Street address"
              className="border p-3 rounded-lg w-full"
              value={session?.user?.address || address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <div className="w-full">
              <label className="block">Postal code</label>
              <input
                type="text"
                placeholder="Postal code"
                className="border p-3  w-full rounded-lg"
                value={session?.user?.postalcode || postalcode}
                onChange={(e) => setPostalCode(e.target.value)}
              />
            </div>
            <div className="w-full">
              <label className="block">City</label>
              <input
                type="text"
                placeholder="City"
                className="border w-full p-3 rounded-lg"
                defaultValue={session?.user?.city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
          </div>

          <div className="w-full mt-5">
            <input
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              className="border w-full p-3 rounded-lg"
            />
          </div>
        </>

        <button
          title="buttton"
          type="submit"
          //   disabled={status === "loading"}
          className="bg-slate-700 text-white rounded-lg p-3 uppercase w-[80%] my-2 mt-5 mx-auto hover:opacity-95 self-center disabled:opacity-80 dark:bg-slate-950"
        >
          {/* {status === "loading" ? "Loading..." : "Update"} */}
          Update
        </button>
      </form>
      <div className="flex justify-between -my-5 m-auto md:w-[550px] w-[80%]">
        <div className="flex justify-between mt-5">
          <span
            //   onClick={handleDeleteUser}
            className=" py-3 px-3 bg-rose-600 font-semibold rounded-2xl text-wite cursor-pointer"
          >
            Delete account
          </span>
        </div>
        <div className="flex justify-between mt-5">
          <span
            onClick={() => {
              signOut();
            }}
            className=" py-3 px-3 bg-rose-600 font-semibold rounded-2xl text-wite cursor-pointer"
          >
            Sign out
          </span>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
