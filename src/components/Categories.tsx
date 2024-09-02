"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "../styles";
import { fetchBlog, fetchBlogs } from "@/Services";
import { categories } from "@/utils";
import { planetVariants, staggerContainer, fadeIn } from "../utils/motion";

const Categories = ({
  classNames,
  title,
  style,
}: {
  classNames: string;
  title: string | null;
  style: string;
}) => {
  const [categorie, setCategories] = useState([]);

  useEffect(() => {
    fetchBlogs().then((result) => {
      setCategories(result);
    });
  }, []);

  return (
    <motion.div
      variants={staggerContainer as any}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-5`}
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className=" px-5 py-3 pt-0 rounded-lg flex justify-center flex-col"
      >
        <div className={`${classNames}`}>
          <h3 className="text-xl mb-0 font-semibold border-b pb-2">{title}</h3>

          {categories.map((category, index) => (
            <Link key={index} href={`/categoriesPost/${category.id}`}>
              <span className={`${style}`}>{category.label}</span>
            </Link>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Categories;
