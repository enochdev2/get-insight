import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextThemeProvider from "../Provider/ThemeProvider";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Provider from "@/Provider";
import SideBar from "@/components/SideBar";
import Categories from "@/components/Categories";
import CategoryHolder from "@/components/CategoryHolder";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dev-Noch",
  description: "Providing the best digital experiences",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className=" relative w-screen overflow-x-hidden dark:bg-transparent ">
        <Provider>
          <NextThemeProvider>
            <Navbar />
            <CategoryHolder />
            {children}
            <Footer />
          </NextThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
