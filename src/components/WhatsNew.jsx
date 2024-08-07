'use client';
import { motion } from 'framer-motion';

import styles from '../styles';
import { newFeatures } from '../utils';
import { NewFeatures, TitleText, TypingText } from '.';
import { planetVariants, staggerContainer, fadeIn } from '../utils/motion';

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[1.7]  bg-black/50 px-5 py-3 pt-0 rounded-lg flex justify-center flex-col"
      >
        <TypingText title=" Our Service?" />
        <TitleText title={<>Unlock the Potential of Web3 with Expert Developement</>} />
        <div className="mt-[28px] flex flex-wrap justify-between gap-[18px]">
          {newFeatures.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={planetVariants('right')}
        className={`flex-1 ${styles.flexCenter} h-[750px]`}
      >
        {/* <img
          src="/blockchain.svg"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
        /> */}
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
