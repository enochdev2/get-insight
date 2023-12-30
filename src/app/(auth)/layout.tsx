import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "login | register",
  description: "Bringing insight to your world",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className=" relative w-screen overflow-x-hidden dark:bg-transparent ">
        {children}
      </body>
    </html>
  );
}
