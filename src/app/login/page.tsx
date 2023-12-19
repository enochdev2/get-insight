"use client";

import React, { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSession } from "next-auth/react";

import { signIn } from "next-auth/react";
import Image from "next/image";

const LogIn = () => {
  const { data: session, status } = useSession();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [refresh, setRefresh] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (refresh) {
      router.refresh();
      router.push("/");
    }
  }, [refresh]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password === "" || email === "") {
      toast.error("Fill all fields!");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    }

    try {
      const res: any = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.ok) {
        setRefresh(true);
      } else {
        toast.error("Error occured while logging");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="mb-5 py-8">
      <div className="m-auto mb-4 flex shadow-md rounded-xl h-[90%]  md:max-w-[80%] border-slate-300 border-2   ">
        <div className="flex-1 bg-[url('/register.jpeg')] bg-cover bg-center"></div>
        <div className="flex-1 ">
          <form onSubmit={handleSubmit} className="w-[80%] m-auto py-4">
            <h3 className="font-semibold text-2xl text-center text-sky-700 mt-2">
              Welcome back!
            </h3>

            <div className="my-2 flex flex-col text-2">
              <label htmlFor="email" className="my-2  ml-2 text-lg">
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="example@gmail.com"
                className=" h-12 text-lg border-slate-400 border  px-5 py-3 rounded-full"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="my-2 mb-4 flex flex-col">
              <label htmlFor="password" className="my-2  ml-2">
                Password
              </label>
              <input
                type={`password`}
                name="password"
                id="password"
                placeholder="*********"
                className=" h-12 text-lg border-slate-400 border  px-5 py-3 rounded-full"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className=" h-12 text-lg border-slate-400 w-[95%] m-auto border my-2 mb-5 bg-sky-900 text-white px-3 font-semibold text-center py-3 rounded-full"
            >
              SignIn
            </button>
            <button
              type="button"
              onClick={() => signIn('google', {callbackUrl: '/'})}
              className="flex gap-4 justify-center w-[85%] m-auto  py-2 px-2 border border-sky-900 text-lg font-semibold rounded-full bg-slate-100  dark:bg-slate-800"
            >
              <Image
                src={"/google.png"}
                alt={"googleLogin"}
                width={24}
                height={24}
              />
              Sign-in with google
            </button>
          </form>
          <h3 className="mb-4 text-center text-lg">
            Already have an account?{" "}
            <Link href="/register" className="text-sky-900">
              register Here
            </Link>
          </h3>
        </div>
        <ToastContainer />
      </div>
    </section>
  );
};

export default LogIn;
