"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AnimatePresence, motion } from "framer-motion";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="  w-screen overflow-x-hidden bg-[url('/4.png')] dark:bg-[url('/7.png')] ">
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
