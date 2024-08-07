'use client';

import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from '../utils/motion';

export const TypingText = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    className={`font-bold p-4  bg-gradient-to-r from-sky-900 via-blue-700 to-black/30 text-[24px] rounded-3xl text-secondary-white ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[4px] font-bold md:text-[44px] text-[40px] bg-gradient-to-r from-sky-500 to-sky-800 text-transparent bg-clip-text ${textStyles}`}
  >
    {title}
  </motion.h2>
);
