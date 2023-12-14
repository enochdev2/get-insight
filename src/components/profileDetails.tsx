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

interface Image {
  setImageUrl: (value: React.SetStateAction<string>) => void;
}

export default function ProfileDetail({ session }: { session: any }) {
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
      const body: {
        username: string;
        email: any;
        password: string;
        imageUrls?: any;
        country: string;
        phone: string;
        address: string;
        postalcode: string;
        city: string;
      } = {
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

      const res = await fetch(
        `http://localhost:3000/api/user/${session?.user?._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session?.user?.accessToken}`,
          },
          body: JSON.stringify(body),
        }
      );

      const data = await res.json();
      if (!res.ok) {
        toast.error(data.message);
      } else {
        toast.success("User Updated Successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const picture = !imageUrls
    ? session?.user?.avatar || session?.user?.image
    : imageUrls;
  console.log(
    "🚀 ~ file: profileDetails.tsx:115 ~ ProfileDetail ~ picture:",
    picture
  );

  return (
    <div className="  p-3 max-w-screen-lg h-screen mx-auto">
      <input
        onChange={(e: any) => setFile(e.target.files[0])}
        type="file"
        ref={fileRef}
        hidden
        accept="image/*"
      />
      <Image
        onClick={() => fileRef.current.click()}
        src={picture}
        width={300}
        height={300}
        alt="profile"
        className="rounded-full m-auto mb-4 h-32 w-32 object-cover bg-slate-400 cursor-pointer self-center mt-2"
      />

      <form
        onSubmit={handleSubmit}
        className=" flex-col grid grid-cols-2 gap-4"
      >
        <input
          type="text"
          placeholder="username"
          defaultValue={session?.user?.username || session?.user?.name}
          id="username"
          className="border p-3 rounded-lg"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="email"
          id="email"
          defaultValue={session?.user?.email}
          className="border p-3 rounded-lg"
        />

        <>
          <div>
            <label className="block text-left">Country</label>
            <input
              // disabled={disabled}
              type="text"
              placeholder="Country"
              className="border p-3 rounded-lg w-full"
              value={session?.user?.country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
          <div>
            <label className="block">Phone</label>
            <input
              type="tel"
              placeholder="Phone number"
              className="border p-3 rounded-lg w-full"
              value={session?.user?.phone}
              onChange={(e) => setphone(e.target.value)}
            />
          </div>
          <div>
            <label className="block">Street address</label>
            <input
              type="text"
              placeholder="Street address"
              className="border p-3 rounded-lg w-full"
              value={session?.user?.address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block">Postal code</label>
              <input
                type="text"
                placeholder="Postal code"
                className="border p-3 rounded-lg"
                value={session?.user?.postalcode}
                onChange={(ev) => setPostalCode(e.target.value)}
              />
            </div>
            <div>
              <label>City</label>
              <input
                type="text"
                placeholder="City"
                className="border p-3 rounded-lg"
                value={session?.user?.city}
                onChange={(ev) => setCity(e.target.value)}
              />
            </div>
          </div>
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            className="border p-3 rounded-lg"
          />
        </>

        <button
          title="buttton"
          //   disabled={status === "loading"}
          className="bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80"
        >
          {/* {status === "loading" ? "Loading..." : "Update"} */}
          Update
        </button>
      </form>
      <div className="flex justify-between mt-5">
        <span
          //   onClick={handleDeleteUser}
          className="text-red-700 cursor-pointer"
        >
          Delete account
        </span>
        <span
          onClick={() => {
            signOut();
          }}
          className="text-red-700 cursor-pointer"
        >
          Sign out
        </span>
      </div>
      <ToastContainer />
    </div>
  );
}
