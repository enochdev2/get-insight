import React from "react";
import { IoCheckmarkCircleSharp } from "react-icons/io5";

const ServicesOffer = () => {
  return (
    <section>
      <div className="w-full flex justify-center">
        <h2 className="font-bold">We Offer Quality Web Service</h2>
      </div>
      <div className=" service gap-5 lg:px-24 w-full h-full justify-center px-4 py-4 items-center">
        <div className=" flex flex-col justify-center shadow-xl dark:shadow-slate-500 px-3  py-4">
          <h2 className="m-auto font-bold text-2xl">

          Front-End
          </h2>
          <div>
            <h4 className="underline font-semibold text-xl">Stack</h4>
            <p className="flex gap-3" ap-3">
            <IoCheckmarkCircleSharp />
              Tailwind
            </p>
            <p className="flex gap-3" >
            <IoCheckmarkCircleSharp />
              Javascript
            </p>
            <p className="flex gap-3">
            <IoCheckmarkCircleSharp />
              Typescript
            </p>
            <p className="flex gap-3">
            <IoCheckmarkCircleSharp />
              React
            </p>
            <p className="flex gap-3">
            <IoCheckmarkCircleSharp />
              Next js
            </p>
          </div>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quisquam, vel velit distinctio soluta ipsam corporis quae eligendi ea odit optio atque magni aliquid consectetur explicabo dolore quasi ad voluptatum dolorum accusantium iure? Reprehenderit, sunt labore magni voluptatem corporis perspiciatis? Repellat tempore odio necessitatibus maxime quam, minus officia sequi cumque.
          </p>
        </div>
        <div className=" flex flex-col justify-center shadow-xl dark:shadow-white px-3  py-4">
          <h2 className="m-auto font-bold text-2xl">

          Back-End
          </h2>
          <div>
            <h4  className="underline font-semibold text-xl">Stack</h4>
            <p className="flex gap-3">
            <IoCheckmarkCircleSharp />
              Javascript
            </p>
            <p className="flex gap-3">
            <IoCheckmarkCircleSharp />
              Node js
            </p>
            <p className="flex gap-3">
            <IoCheckmarkCircleSharp />
              Express
            </p>
            
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quisquam, vel velit distinctio soluta ipsam corporis quae eligendi ea odit optio atque magni aliquid consectetur explicabo dolore quasi ad voluptatum dolorum accusantium iure? Reprehenderit, sunt labore magni voluptatem corporis perspiciatis? Repellat tempore odio necessitatibus maxime quam, minus officia sequi cumque.
          </p>
        </div>
        <div className=" flex flex-col justify-center shadow-xl dark:shadow-white px-3  py-4">
          <h2 className="m-auto font-bold text-2xl">

          Full-Stack
          </h2>
          <div>
            <h4  className="underline font-semibold text-xl">Stack</h4>
            <p className="flex gap-3">
            <IoCheckmarkCircleSharp />
              Javascript
            </p>
            <p className="flex gap-3">
            <IoCheckmarkCircleSharp />
              Typescript
            </p>
            <p className="flex gap-3">
            <IoCheckmarkCircleSharp />
              React
            </p>
            <p className="flex gap-3">
            <IoCheckmarkCircleSharp />
              Next js
            </p>
            <p className="flex gap-3">
            <IoCheckmarkCircleSharp />
              Node js
            </p>
            <p className="flex gap-3">
            <IoCheckmarkCircleSharp />
              Express
            </p>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quisquam, vel velit distinctio soluta ipsam corporis quae eligendi ea odit optio atque magni aliquid consectetur explicabo dolore quasi ad voluptatum dolorum accusantium iure? Reprehenderit, sunt labore magni voluptatem corporis perspiciatis? Repellat tempore odio necessitatibus maxime quam, minus officia sequi cumque.
          </p>
        </div>
       
        <div className=" shadow-lg px-3  py-4">
          <h2>
          Smart-Contract
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quisquam, vel velit distinctio soluta ipsam corporis quae eligendi ea odit optio atque magni aliquid consectetur explicabo dolore quasi ad voluptatum dolorum accusantium iure? Reprehenderit, sunt labore magni voluptatem corporis perspiciatis? Repellat tempore odio necessitatibus maxime quam, minus officia sequi cumque.
          </p>
          </div>
      </div>
    </section>
  );
};

export default ServicesOffer;
