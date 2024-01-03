import React from "react";

const ServicesOffer = () => {
  return (
    <section>
      <div className="w-full flex justify-center">
        <h2 className="font-bold">We Offer Quality Web Service</h2>
      </div>
      <div className=" service gap-5 w-full h-full justify-center px-4 py-4 items-center">
        <div className=" flex justify-center shadow-lg px-3  py-4">
          Front-End
        </div>
        <div className=" shadow-lg px-3  py-4">Back-End</div>
        <div className=" shadow-lg px-3  py-4">Full-Stack</div>
        <div className=" shadow-lg px-3  py-4">Smart-Contract</div>
      </div>
    </section>
  );
};

export default ServicesOffer;
