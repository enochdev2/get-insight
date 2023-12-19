"use client";
import { useTheme } from "next-themes";
import { MdDarkMode } from "react-icons/md";
import { BsSunFill } from "react-icons/bs";
import { useEffect, useState } from "react";

export default function ThemeToggler() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted,setMounted] = useState(false)

  useEffect(() =>  ()=> {setMounted(true)}, [])
  
const currentTheme = theme === "system" ? systemTheme : theme
  return (
    <>
    { mounted &&
    <button type="button" onClick={() => setTheme(  currentTheme === "dark" ? "light" : "dark")}>
        {
            theme ==='dark' ? <BsSunFill size={25} /> : <MdDarkMode size={25}/>
        }
    </button>
}
    </>
  );
}
