import FeaturedPosts from "@/components/FeaturedPosts";
import Product from "@/components/Product";
import TechArvel from "@/components/TechArvel";
import WhatsNew from "@/components/WhatsNew";
import React from "react";

const Services = () => {
  return (
    <section className=" overflow-hidden mt-12 xs:px-3 sm:px-3 md:px-5 md:w-3xl xl:max-w-[92rem]">
      <div className=" max-w-[92rem] mx-auto min-h-screen">
        <TechArvel />
        <div className=" mt-20 max-w-xl  px-5 rounded-xl  text- m-auto bg-gradient-to-tr from-[#080935] via-[#321894] to-[#686ec2] border-b-black-700 py-3 text-sky-100  text-xl text-center font-semibold">
          FeaturedPosts{" "}
        </div>
        <div>
          <FeaturedPosts />
        </div>
        <Product />
      </div>
      <section className="max-w-[90%] md:px-8 bg-custom-image bg-cover mx-auto bg-center dark:bg-black/30 rounded-lg my-4 px-3">
        <WhatsNew />
      </section>
    </section>
  );
};

export default Services;
