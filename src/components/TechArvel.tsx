'use client'
import React from 'react'

import { motion } from "framer-motion";

import styles from "../styles";
import { fadeIn, textVariant } from '@/utils/motion';


const testimonials = [
    {
      testimonial:
        "Craft stunning and intuitive user interfaces that captivate and engage. Our frontend development ensures a seamless and responsive user experience across all devices.",
      name: "FRONTEND",
      designation: "CFO",
      company: "🌐 Frontend Development",
      image: "frontend.jpg",
    },
    {
      testimonial:
        "Build robust and scalable backend systems to power your applications. From database design to server-side logic, we provide the infrastructure that drives your app's performance.",
      name: "BACKEND",
      designation: "COO",
      company: "🔧 Backend Development",
      image: "backend.jpg",
    },
    {
      testimonial:
        "Unlock the potential of blockchain technology with our expert solutions. We offer smart contract development, decentralized applications (DApps), and more to make your blockchain projects a reality.",
      name: "BLOCKCHAIN",
      designation: "CTO",
      company: "🔗 Blockchain Development",
      image: "blockchain.svg",
    },
  ];

const TechArvel = () => {
    return(
    <div className={`mt-12 mx-auto bg-[url("/22.png")] rounded-[20px]`}>
        <div
            className={`bg-[#151030] rounded-2xl sm:px-16 px-6 sm:py-5 py-10 md:min-h-[380px] min-h-[400px]  lg:min-h-[350px]`}
        >
            <motion.div variants={textVariant()}>
            <p className="sm:text-[18px] text-[14px] text-[#aaa6c3] uppercase">Transform Your Vision into Reality with Expert Development Services! </p>
            <h2 className="text-white font-bold md:text-[50px] sm:text-[40px] text-[30px]">Services</h2>
            <p className='text-[#abacf1] text-base md:text-xl'>Are you ready to elevate your project with cutting-edge development solutions? Look no further! At TechArvel, we specialize in delivering top-notch development services across the full stack. Whether you&apos;re building a new web application, creating a blockchain solution, or anything in between, we&apos;ve got you covered!</p>
            </motion.div>
        </div>
        <div className={`-mt-20 pb-14 sm:px-2 px-2 md:px-5 lg:px-8 flex flex-wrap  gap-3`}>
              {testimonials.map((testimonial:any, index:any) => (
         <motion.div key={index}
         variants={fadeIn("", "spring", index * 0.5, 0.75)}
         className='bg-black p-3 rounded-3xl  w-full md:w-[48.5%] lg:w-[32%]'
         >
          <div className='w-full relative'>
           <img
          src={testimonial.image}
          alt={`{testimonial.name}`}
          className='w-full h-44 rounded-lg object-cover'
        />
          <h2 className='mt-1 text-[#d6d4ec] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-clip text-[32px]'>
            {''}{testimonial.company}
          </h2>
          </div>
             <p className='text-white font-bold text-[48px]'></p>
             <div className='mt-1'>
             <p className='text-[#bac6ec] px-1 pt-4 text-[16px] md:text-[20px]'>{testimonial.testimonial}</p>
             
      <div className='mt-7 flex justify-between items-center gap-1'> 
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-center text-[16px]'>
            <span className='blue-text-gradient'></span> {testimonial.name}
          </p>
        
          </div>
          </div>
        </div>
         </motion.div>
        ))}
      <div className='flex flex-wrap gap-5 mt-3 text-white w-full justify-between' >
        <p className='bg-gradient-to-r from-[#080935] via-[#321894] to-[#686ec2] rounded-lg  px-3 py-2   '>👉 Contact Us: <a href="" className='text-[#f78d8d]'> Techarvel.info@gmail.com</a></p>
        <p className='bg-gradient-to-r from-[#080935] via-[#321894] to-[#686ec2] rounded-lg  px-3 py-2   '>👉 Visit Our Website: <a href="" className='text-[#f78d8d]'> wwww.techarvelsoftwaresolution.com</a> </p>
        <p className='bg-gradient-to-r from-[#080935] via-[#321894] to-[#686ec2] rounded-lg  px-3 py-2   '>👉 Follow Us: <a href="" className='text-[#f78d8d]'> TechArvel</a> </p>
        {/* <p> TechArvel, Where Innovation Meets Excellence🌟  </p> */}
      </div>
        </div>

    </div>
    )
} 

export default TechArvel