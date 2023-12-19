"use client";

import React, { FormEvent, useState } from "react";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signIn } from "next-auth/react";
import Image from "next/image";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (username === "" || email === "" || password === "") {
      toast.error("Fill all fields");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    try {
      const res = await fetch("https://get-insight.vercel.app/api/register", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ username, email, password }),
      });

      console.log(await res.json());
      if (res.ok) {
        toast.success("Successfully registered the user");
        setTimeout(() => {
          signIn();
        }, 1500);
        return;
      } else {
        toast.error("Error occured while registering");
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="mb-5 py-8">
    <div className="m-auto mb-4 flex shadow-md rounded-xl h-[90%]  md:max-w-[80%] border-slate-300 border-2   ">
      <div className="flex-1 bg-[url('/register.jpeg')] bg-cover bg-center">

      </div>
      <div className="flex-1 " >
      <form onSubmit={handleSubmit} className="w-[80%] m-auto py-4">
        <h3 className="font-semibold text-2xl text-center text-sky-700 mt-2">Create an account!</h3>

        <div className="my-2 flex flex-col text-2">
          <label htmlFor="username" className="my-3 ml-2 text-lg ">
            Username:
          </label>
          <input
            type="text"
            name="username"
            id="username"
            className=" h-12 text-lg border-slate-400 border  px-3 py-3 rounded-full"
            placeholder="John Doe"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

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
          className=" h-12 text-lg border-slate-400 w-[95%] m-auto border my-2 mb-5 bg-sky-900 text-white px-3 py-3 rounded-full"
        >
          Register
        </button>
        <button type="button" onClick={() => signIn('google')}
                className="flex gap-4 justify-center w-[85%] m-auto  py-2 px-2 border border-sky-900 text-lg font-semibold rounded-full bg-slate-100  dark:bg-slate-800">
          <Image src={'/google.png'} alt={'googleLogin'} width={24} height={24} />
          Sign-Up with google
        </button>
      </form>
      <h3 className="mb-4 text-center text-lg">
        Already have an account? <Link href="/login" className="text-sky-900">Login Here</Link>
      </h3>
      </div>
      <ToastContainer />
    </div>
    </section>
  );
};

export default Register;
