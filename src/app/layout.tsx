import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import NextThemeProvider from "../Provider/ThemeProvider";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Provider from "@/Provider";
import SideBar from "@/components/SideBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TechNoch Blog",
  description: "Information for daily living",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className=" w-screen dark:bg-transparent ">
        <Provider>
          {/* <NextThemeProvider> */}
            <Navbar />
            <SideBar />
            {children}
            <Footer />
          {/* </NextThemeProvider> */}
        </Provider>
      </body>
    </html>
  );
}
