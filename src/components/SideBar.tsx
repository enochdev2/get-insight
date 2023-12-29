"use client";

import React, { useState } from "react";
import Link from "next/link";
import { NavBarItem } from "@/utils/types";

const SideBar = ({ handleMenu }: any) => {
  const [openSideBar, setOpenSideBar] = useState<boolean>(true);

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
      name: " SERVICE",
      link: "/service",
    },
    {
      id: 4,
      name: " PROFILE",
      link: "/profile",
    },
  ];

  return (
    <>
      <div
        className="sm:hidden flex flex-col  absolute top-[70px] bg-slate-700 left-0 w-screen h-screen justify-between items-center py-12  z-[30] gap-5"
        onClick={() => handleMenu()}
      >
        <div className="flex justify-center flex-col w-full gap-3">
          {item.map((items: NavBarItem, id: number) => (
            <Link
              href={items.link}
              key={id}
              className="py-2 px-4 my-3 text-center w-[80%] bg-slate-400  mx-auto rounded-xl hover:bg-white"
            >
              {items.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default SideBar;
