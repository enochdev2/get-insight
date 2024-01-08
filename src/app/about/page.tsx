import { Metadata } from "next";
import React from "react";


export const metadata: Metadata = {
  title: "Dev-Noch",
  description: "about Dev-Noch",
};


const About = () => {
  return (
    <section className="w-full min-h-screen py-12 ">
      <div className="w-5/6 m-auto text-xl py-8 px-5 rounded-lg bg-slate-200 dark:bg-transparent">
        <h2 className="text-teal-900 underline font-bold my-3 text-2xl">About Us </h2>
        <p className="text-justify my-4 text-[18px]">
         Dev-Noch Technology is a Web Development company having the goal of providing our clients with  the  web  user experiences. Delivering top-quality software solutions that tackle complex business challenges.
        </p>
        <p className="text-justify my-4 text-[18px]">
         
        </p>
      </div>
    </section>
  );
};

export default About;
