"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { fetchBlog } from "@/Services";
import { categories } from "@/utils";

const Categories = ({classNames,title,style}:{classNames:string, title:string|null,style:string}) => {
  const [categorie, setCategories] = useState([]);

  useEffect(() => {
    fetchBlog().then((result) => {
      setCategories(result);
    });
  }, []);

  return (
    <div className={`${classNames}`}>
      <h3 className="text-xl mb-0 font-semibold border-b pb-2">{title}</h3>

      {categories.map((category, index) => (
        <Link key={index} href={`/categoriesPost/${category.id}`}>
          <span className={`${style}`}>
            {category.label}
            </span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
