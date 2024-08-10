"use client"
import React from "react";

const Product = () => {
  return (
    <section className="px-[35px] app__ md:px-[120px] py-[60px] text-white border-t border-t-[--color-golden] md:items-center">
    <div className="px-[20px mx-auto max-w-[1500px]">
      <div className="md:-mx-[10px] xl-:mx-[20] flex flex-wrap ">
        <div className="col-lg-6 col-md-12 flex-1 col-sm-12 col-xs-12">
          <header className="crumina-module relative z-[5] mb-[30px] text-[1.375em] leading-[1.6] my-[10px] text-[#ffba00] text-inherit  block  ">
            <div className="mb-[25px] text-[#ffba00] text-3xl "> Custom Software Solutions for Your Business </div>
             <h2 className="inline-block leading-[1.3em] relative text-5xl mb-8 "> 
             Tailored Software Solutions for 
             <span className="font-bold"> your Business </span>
             </h2>

             <div className="inline-block leading-[1.3em] text-2xl relative">
             Every business is unique, and so are its software needs. At TechArvel, we offer custom software development services that cater to your specific requirements. Whether you need a new application, system integration, or software maintenance, our solutions are designed to solve your problems and propel your business forward. Let us help you achieve your goals with innovative and reliable software.

             </div>
          </header>

          <p className=" text-2xl">

          Is your business struggling to keep up with the latest technology? At TechArvel, we provide cutting-edge software development services tailored to meet your unique needs. From custom applications to seamless integrations, our solutions are designed to solve your toughest challenges. Don&apos;t let outdated systems hold you back. Contact TechArvel today and transform your business for the digital age.
            
          </p>

          <div className="flex-wrap md:ml-32  gap-10 flex items-center mt-24">
            <a 
            href="#"
            className="  font-bold rounded-[50px]  items-center text-white px-5 border-[3px]  py-[px] flex gap-3  "
            >
              <img src="/apple_store.png" alt="" />
                <div className=" my-1 ">
                  <span className=""> download on</span>
                  <br />
                  <span className=""> Apple Store</span>
                </div>
            </a>
            <a 
            href="#"
             className="  font-bold rounded-[50px]  items-center text-white px-5 border-[3px]  py-[4px] flex gap-3  "
            >
              <img src="/google_play.png" alt="" />
                <div className="text">
                  <span className="sup-title"> download on</span>
                  <br />
                  <span className="sup-title"> Google Play </span>
                </div>
            </a>
          </div>
        </div>


          <div className="col-lg-6 col-md-12 md:w-[40%] col-sm-12 col-xs-12">
            <img className=" max-h-[900px] max-w-[600px] m-auto" src="/phone.png" alt="phone" />
          </div>
      </div>
    </div>
    </section>
  );
};

export default Product;