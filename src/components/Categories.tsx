"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { fetchBlog } from "@/Services";
import { categories } from "@/utils";

const Categories = ({classNames}:any) => {
  const [categorie, setCategories] = useState([]);

  useEffect(() => {
    fetchBlog().then((result) => {
      setCategories(result);
    });
  }, []);

  return (
    <div className={`${classNames}`}>
      <h3 className="text-xl mb-0 font-semibold border-b pb-4">Categories:</h3>

      {/* <Link href="/">
        <span
          className={`cursor-pointer mb-0 pb-0 border-b p-3  m-3`}
        >
          Finance
        </span>
      </Link>
       */}

      {categories.map((category, index) => (
        <Link key={index} href={`/categoriesPost/${category.id}`}>
          <span className={`cursor-pointer block ${(index === categorie.length - 1) ? 'border-b-0' : 'border-b'} pb-3 mb-3`}>
            {category.label}
            </span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
