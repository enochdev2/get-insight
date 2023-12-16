"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { NavBarItem } from "../utils/types";
import { FaBars, FaSearch } from "react-icons/fa";
import Image from "next/image";
import ThemeToggler from "./theme";

import { BiSearchAlt } from "react-icons/bi";
import { Sarpanch } from "next/font/google";
import SideBar from "./SideBar";

const Headers = ({ session }: any) => {
  const [navMenu, setNavMenu] = useState<boolean>(false);
  const [sticky, setSticky] = useState<boolean>(false);

  const item: NavBarItem[] = [
    {
      id: 1,
      name: "HOME",
      link: "/",
    },
    {
      id: 2,
      name: "BLOG",
      link: "/blog",
    },

    {
      id: 3,
      name: " ABOUT",
      link: "/about",
    },
  ];

  function handleStickyNavbar() {
    if (window.scrollY >= 80) setSticky(true);
    else setSticky(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  return (
    <header
      className={` relative flex w-full gap-3 items-center bg-[#7E909A] mb-0
${
  sticky
    ? "!fixed !z-[9999] !bg-[#7E909A]  shadow-sticky backdrop:blur-sm !transition dark:!bg-primary dark:!bg-opacity-20"
    : "absolute"
}
`}
    >
      <div className="flex justify-between gap-5 items-center w-full mx-auto p-3 ">
        <Link href="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">My-</span>
            <span className="text-slate-700">Insight</span>
          </h1>
        </Link>
        <form
          // onSubmit={handleSubmit}
          className="bg-slate-100 p-3 rounded-lg flex items-center"
        >
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
            // value={searchTerm}
            // onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button title="submit" type="submit">
            <FaSearch className="text-slate-600" />
          </button>
        </form>
        <div>
          <div className="flex gap-4 mx-2">
            {item.map((items: NavBarItem, id: number) => (
              <span key={id}>
                <Link
                  href={items.link}
                  className="hidden sm:inline text-slate-700  rounded-lg bg-[#A5D8DD] px-2 py-1"
                >
                  {items.name}
                </Link>
              </span>
            ))}
            <span className="hidden sm:inline text-slate-700 hover:underline">
              <ThemeToggler />
            </span>
            <div>
              {session?.user?.email ? (
                <Link href="/profile">
                  <Image
                    className="rounded-full h-7 w-7 object-cover"
                    width={36}
                    height={36}
                    src={session?.user?.image || session?.user?.avatar}
                    alt="profile"
                  />
                </Link>
              ) : (
                <Link
                  href="/login"
                  className="  hover:underline rounded-lg font-semibold px-3 py-2 text-white bg-red-300"
                >
                  {" "}
                  Sign in
                </Link>
              )}
            </div>
          </div>
        </div>
        {navMenu && 
        <SideBar/>
        }
      </div>
    </header>
  );
};

export default Headers;
