import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextThemeProvider from "../Provider/ThemeProvider";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Provider from "@/Provider";
import SideBar from "@/components/SideBar";
import Categories from "@/components/Categories";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TechNoch Blog",
  description: "Bringing insight to your world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className=" w-screen overflow-x-hidden dark:bg-transparent ">
        <Provider>
          <NextThemeProvider>
            <Navbar />
            <div className="sticky -mt-2 pt-4 pb-3 top-[65px] bg-slate-300 flex justify-center pr-4 z-[999]">
              <Categories
                style={`mx-1 md:mx-6 px-3 text-sm md:text-lg py-2 rounded-lg bg-slate-200 `}
                title={null}
                classNames={` text-[#314E52]  flex justify-space-around font-bold items-center h-full md:w-3xl pt-2 pb-1  my-2`}
              />
            </div>
            {children}
            <Footer />
          </NextThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
