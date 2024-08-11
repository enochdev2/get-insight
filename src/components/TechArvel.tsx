'use client'
import React from 'react'

import { motion } from "framer-motion";

import styles from "../styles";
import { fadeIn, textVariant } from '@/utils/motion';


const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];

const TechArvel = () => {
    return(
    <div className={`mt-12 bg-black rounded-[20px]`}>
        <div
            className={`bg-[#151030] rounded-2xl sm:px-16 px-6 sm:py-16 py-10 min-h-[300px]`}
        >
            <motion.div variants={textVariant()}>
            <p className="sm:text-[18px] text-[14px] text-[#aaa6c3] uppercase">What others say</p>
            <h2 className="text-white font-bold md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Service</h2>
            </motion.div>
        </div>
        <div className={`-mt-20 pb-14 sm:px-16 px-6 flex flex-wrap gap-7`}>
              {testimonials.map((testimonial:any, index:any) => (
         <motion.div key={index}
         variants={fadeIn("", "spring", index * 0.5, 0.75)}
         className='bg-black p-10 rounded-3xl xs:w-[320px] w-full'
         >
             <p className='text-white font-bold text-[48px]'></p>
             <div className='mt-1'>
             <p className='text-white  text-[18px]'>{testimonial.testimonial}</p>
             
              <div className='mt-7 flex justify-between items-center gap-1'> 
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> {testimonial.name}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {testimonial.designation} of {testimonial.company}
          </p>
        </div>

        <img
          src={testimonial.image}
          alt={`feedback_by-${testimonial.name}`}
          className='w-10 h-10 rounded-full object-cover'
        />
      </div>
              </div>
         </motion.div>
        ))}

        </div>
    </div>
    )
} 

export default TechArvel