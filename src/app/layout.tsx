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
  metadataBase: new URL("https://www.dev-noch.com.ng"),
  title: {
    default: "Dev-Noch",
    template: "%s : Dev-Noch",
  },
  description: "Providing the best digital experiences",
  openGraph: {
    images: ['/Dev-Noch1.png']
  },
  verification:{
    google: "google-site-verification: google8736e73035654ff5.html"
   },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {process.env.NODE_ENV === "production" && (
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6981662648759585"
            crossOrigin="anonymous"
          ></script>
        )}
      </head>
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
