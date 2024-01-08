import Image from "next/image";
import React from "react";
import { LiaStarSolid } from "react-icons/lia";

const Icons = () => {
  return <LiaStarSolid className="text-blue-900" />;
};

const ServicesOffer = () => {
  return (
    <section>
      <div className="w-full flex justify-center mb-4">
        <h2 className="font-bold text-2xl my-3">
          We Offer Quality Web Service
        </h2>
      </div>
      <div className=" service lg:grid-cols-2 gap-8 lg:gap-8 lg:px-32 w-full h-full justify-center px-4 py-4 items-center">
        <div className=" h-96 flex flex-col  sm:h-[450px] lg:h-96 overflow-hidden  shadow-xl dark:shadow-slate-900 px-5  py-4 dark:border rounded-xl ">
          <div className=" overflow-hidden relative w-full h-[40%] justify-center items-center rounded-lg ">
            <Image src="/frontend.jpg" fill alt="frontend" />
            <h2 className="m-auto absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-bold text-2xl z-10 text-transparent bg-clip-text bg-gradient-to-r from-sky-800 to-violet-900-500">
              Front-End
            </h2>
          </div>
          <div>
            <h4 className="underline font-semibold text-xl my-3">Stack</h4>
          </div>
          <div className=" flex flex-wrap gap-2 my-2">
            <p className="flex gap-3 items-center border rounded-lg px-2 py-1">
              <Icons />
              Tailwind
            </p>
            <p className="flex gap-3 items-center border rounded-lg px-2 py-1">
              <Icons />
              Javascript
            </p>
            <p className="flex gap-3 items-center border rounded-lg px-2 py-1">
              <Icons />
              Typescript
            </p>
            <p className="flex gap-3 items-center border rounded-lg px-2 py-1">
              <Icons />
              React
            </p>
            <p className="flex gap-3 items-center border rounded-lg px-2 py-1">
              <Icons />
              Next js
            </p>
          </div>
          <p className="text-justify">
            We provide our clients with stuning design,seamless and intuitive user interfaces that drive exceptional user experiences.
          </p>
        </div>
        <div className="flex flex-col h-96 sm:h-[450px] lg:h-96 overflow-hidden justify-between shadow-xl dark:shadow-slate-950 px-5  py-4 dark:border rounded-xl">
          <div className="relative w-full overflow-hidden h-[40%] justify-center items-center rounded-lg ">
            <Image src="/backend.jpg" fill alt="backend" />
            <h2 className="m-auto absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-bold text-2xl z-10 text-transparent bg-clip-text bg-gradient-to-r from-sky-800 to-violet-900-500">
              Back-End
            </h2>
          </div>
          <div>
            <h4 className="underline my-3 font-semibold text-xl">Stack</h4>
          </div>
          <div className=" flex flex-wrap gap-2 my-2">
            <p className="flex gap-3 items-center border rounded-lg px-2 py-1">
              <Icons />
              Javascript
            </p>
            <p className="flex gap-3 items-center border rounded-lg px-2 py-1">
              <Icons />
              Node js
            </p>
            <p className="flex gap-3 items-center border rounded-lg px-2 py-1">
              <Icons />
              Express
            </p>
          </div>
          <p className="text-justify">
            We provide our clients with stuning design,seamless and intuitive user interfaces that drive exceptional user experiences.
          </p>
        </div>
        <div className=" flex flex-col h-96  sm:h-[450px] lg:h-96 overflow-hidden shadow-xl dark:shadow-slate-95 px-5  py-4 dark:border rounded-xl">
          <div className=" overflow-hidden relative w-full h-[40%] justify-center items-center rounded-lg ">
            <Image src="/fullstack.jpg" fill alt="fullstack" />
            <h2 className="m-auto absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-bold text-2xl z-10 text-transparent bg-clip-text bg-gradient-to-r from-sky-800 to-violet-900-500">
              Full-Stack
            </h2>
          </div>

          <div>
            <h4 className="underline my-3 font-semibold text-xl">Stack</h4>
          </div>
          <div className=" flex flex-wrap gap-2 my-2">
            <p className="flex gap-3 items-center border rounded-lg px-2 py-1">
              <Icons />
              Javascript
            </p>
            <p className="flex gap-3 items-center border rounded-lg px-2 py-1">
              <Icons />
              Typescript
            </p>
            <p className="flex gap-3 items-center border rounded-lg px-2 py-1">
              <Icons />
              React
            </p>
            <p className="flex gap-3 items-center border rounded-lg px-2 py-1">
              <Icons />
              Next js
            </p>
            <p className="flex gap-3 items-center border rounded-lg px-2 py-1">
              <Icons />
              Node js
            </p>
            <p className="flex gap-3 items-center border rounded-lg px-2 py-1">
              <Icons />
              Express
            </p>
          </div>
          <p className="text-justify">
            We provide our clients with stuning design,seamless and intuitive user interfaces that drive exceptional user experiences.
          </p>
        </div>

        <div className=" shadow-lg h-96  sm:h-[450px] lg:h-96 overflow-hidden dark:shadow-slate-95 px-5  py-4 dark:border rounded-xl">
          <div className="relative overflow-hidden w-full h-[40%] justify-center items-center rounded-lg ">
            <Image src="/solidity2.jpg" fill alt="mernstack" />
            <h2 className="m-auto absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-bold text-2xl z-10 text-transparent bg-clip-text bg-gradient-to-r from-sky-800 to-violet-900-500">
              smart-contract
            </h2>
          </div>
          <div>
            <h4 className="underline my-3 font-semibold text-xl">Stack</h4>
          </div>
          <div className=" flex flex-wrap gap-2 my-2">
            <p className="flex gap-3 items-center border rounded-lg px-2 py-1">
              <Icons />
              Javascript
            </p>
            <p className="flex gap-3 items-center border rounded-lg px-2 py-1">
              <Icons />
              Solidity
            </p>
            <p className="flex gap-3 items-center border rounded-lg px-2 py-1">
              <Icons />
              React
            </p>
            <p className="flex gap-3 items-center border rounded-lg px-2 py-1">
              <Icons />
              Next js
            </p>
            <p className="flex gap-3 items-center border rounded-lg px-2 py-1">
              <Icons />
              Node js
            </p>
          </div>
            <p className="text-justify">
            We provide our clients with stuning design,seamless and intuitive user interfaces that drive exceptional user experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesOffer;
