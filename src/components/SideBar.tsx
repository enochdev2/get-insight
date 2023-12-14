'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { NavBarItem } from '@/utils/types'

const SideBar = () => {
        const [openSideBar, setOpenSideBar] = useState<boolean>(true)
      
      const item : NavBarItem[] =  [
        {
          id: 1,
          name: "HOME",
          link: "/"
        },
        {
          id: 2,
          name: "BLOG",
          link: "/blog"
        },
        {
          id: 3,
          name:" SERVICE",
          link: "/"
        },
        {
          id: 4,
          name:" PROFILE",
          link: "/login"
        }
      ]

  return (
    <div>
        { 
        openSideBar &&
      <div className='sm:hidden flex flex-col absolute w-screen h-screen justify-between items-center  gap-5'>  
            {item.map((items:NavBarItem, id:number)=>(

            <Link href={items.link} key={id} className="py-2 px-4 bg-slate-400 rounded-xl hover:bg-white">
              {items.name}
            </Link>
            ))}
        </div>
        }

    </div>
  )
}

export default SideBar
