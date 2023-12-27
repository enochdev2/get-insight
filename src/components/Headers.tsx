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
    <>
      <header
        className={` relative flex w-full gap-3 items-center  mb-0 pt-2 pb-2 px-2 bg-sky-950 shadow-md
${
  sticky
    ? "!fixed !z-[9999]   shadow-sticky backdrop:blur-sm !transition dark:!bg-primary dark:!bg-opacity-80"
    : "fixed top-0 left-0"
}
`}
      >
        <div className="flex justify-between gap-2 items-center w-full mx-auto py-2 px-2 md:pr-6 ">
          <Link href="/">
            <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
              <span className="text-slate-200">Real-</span>
              <span className="text-slate-400">Insight</span>
            </h1>
          </Link>
          <form
            onSubmit={handleSubmit}
            className="bg-slate-100 p-3 rounded-lg flex items-center"
          >
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent focus:outline-none h-4 w-24 sm:w-36 lg:w-56"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button title="submit" type="submit">
              <FaSearch className="text-slate-600" />
            </button>
          </form>
          <div>
            <div className="sm:flex hidden gap-4 mx-2">
              {item.map((items: NavBarItem, id: number) => (
                <span key={id}>
                  <Link
                    href={items.link}
                    className="hidden sm:inline grow dark:text-white sm:text-sm  rounded-lg text-white md:text-base px-2 py-1"
                  >
                    {items.name}
                  </Link>
                </span>
              ))}
            </div>
          </div>
          <div className="sm:flex hidden gap-3">
            <div className="hidden sm:block">
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
                  className="  hover:underline rounded-lg font-semibold px-3 py-2 text-white bg-rose-500"
                >
                  {" "}
                  Sign in
                </Link>
              )}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline text-slate-500 hover:underline">
              <ThemeToggler />
            </span>
            {session?.user?.email && (
              <div className="lg:flex hidden ">
                <button
                  type="button"
                  className="px-1 md:px-2 py-1 text-xs sm:text-sm md:text-base md:font-semibold bg-rose-500 rounded-full"
                  onClick={() => signOut()}
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>

          <div className="cursor-pointer sm:hidden mr-3  z-40">
            <IoMenu
              size={26}
              onClick={handleMenu}
              className="cursor-pointer sm:hidden  z-40"
            />
          </div>
        </div>
      </header>
      <div className="bg-black/10 absolute left-0 top-0">
        <SideBar handleMenu={handleMenu} />
      </div>
    </>
  );
};

export default Headers;
