"use client";

import React, { FormEvent, useState } from "react";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signIn } from "next-auth/react";

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
      const res = await fetch("http://localhost:3000/api/register", {
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
    <div className="m-auto my-10 shadow-lg rounded-md max-w-[350px] border-blue-900 border-2 px-4 py-8 ">
      <form onSubmit={handleSubmit} className="w-full ">
        <h3 className="font-bold text-2">Create an account</h3>

        <div className="my-2 flex flex-col text-2">
          <label htmlFor="username" className="my-2">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            className="h-9"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="my-2 flex flex-col text-2">
          <label htmlFor="email" className="my-2">
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            className="h-9"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="my-2 mb-4 flex flex-col">
          <label htmlFor="password" className="my-2">
            Password
          </label>
          <input
            type={`password`}
            name="password"
            id="password"
            className="h-9"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className=" text-white bg-blue-900 w-full m-auto rounded-md py-1 my-2 px-2 "
        >
          Register
        </button>
        <button className=" my-2 text-white bg-blue-900 w-full m-auto rounded-md py-1 px-2 ">
          Google
        </button>
      </form>
      <h3>
        Don&apos;t have an account? <Link href="/login">Login Here</Link>
      </h3>
      <ToastContainer />
    </div>
  );
};

export default Register;
