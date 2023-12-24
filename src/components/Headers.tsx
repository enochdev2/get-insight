"use client";
import React, { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import { NavBarItem } from "../utils/types";
import { FaBars, FaSearch } from "react-icons/fa";
import Image from "next/image";
import ThemeToggler from "./theme";
import { IoMenu } from "react-icons/io5";

import { BiSearchAlt } from "react-icons/bi";
import { Sarpanch } from "next/font/google";
import SideBar from "./SideBar";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const Headers = ({ session }: any) => {
  const [navMenu, setNavMenu] = useState<boolean>(false);
  const [sticky, setSticky] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string | any>("");

  const router = useRouter();

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

  const handleMenu = () => {
    setNavMenu(!navMenu);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchParams = new URLSearchParams(window.location.search);
    const search: any = searchParams.set("searchTerm", searchTerm);
    const searchTerms = search.toString();
    router.push(`/seachPage${searchTerms}`);
  };

  return (
    <header
      className={` relative flex w-full gap-3 items-center bg-[#7E909A] mb-0 px-2
${
  sticky
    ? "!fixed !z-[9999] !bg-[#7E909A]  shadow-sticky backdrop:blur-sm !transition dark:!bg-primary dark:!bg-opacity-80"
    : "fixed top-0 left-0"
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
          onSubmit={handleSubmit}
          className="bg-slate-100 p-3 rounded-lg flex items-center"
        >
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none h-4 w-24 sm:w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
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
            <div className="hidden md:block">
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
        {session?.user?.email && (
          <div className="px-3 ">
            <button
              type="button"
              className="px-1 md:px-3 py-2 md:font-semibold bg-rose-500 rounded-full"
              onClick={() => signOut()}
            >
              LogOut
            </button>
          </div>
        )}
        <div
          className="cursor-pointer md:hidden mr-3  z-40"
          onClick={handleMenu}
        >
          <IoMenu size={30} className="cursor-pointer md:hidden  z-40" />
        </div>
        {navMenu && <SideBar handleMenu={handleMenu} />}
      </div>
    </header>
  );
};

export default Headers;
