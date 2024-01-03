"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AnimatePresence, motion } from "framer-motion";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className=" relative w-screen overflow-x-hidden dark:bg-transparent ">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 0 }}
            transition={{dalay: 0.25}}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </body>
    </html>
  );
}
