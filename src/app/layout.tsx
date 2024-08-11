import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextThemeProvider from "../Provider/ThemeProvider";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Provider from "@/Provider";
import CategoryHolder from "@/components/CategoryHolder";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dev-noch.com.ng"),
  title: "Dev-Noch",
  
  description: "Providing the best digital experiences",
  openGraph: {
    images: ["/Dev-Noch1.png"],
  },
  verification: {
    google: "google-site-verification: google8736e73035654ff5.html",
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
          <head>
            {/* <script
              async
              src="https://www.googletagmanager.com/gtag/js?id=G-MN69E65JZV"
            ></script> */}
            <meta
              name="google-site-verification"
              content="LqB4UQLPw3sKncsnA4dKYWLX6epHf4JNcrdSlsQTzwU"
            />
            <script
              async
              src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2895511936246845"
              crossOrigin="anonymous"
            ></script>
          </head>
        )}
      </head>
      <body className=" relative w-screen overflow-x-hidden bg-[url('/4.png')] dark:bg-[url('/7.png')] ">
        <Provider>
          <NextThemeProvider>
            <Navbar />
            <script
              async
              src="https://www.googletagmanager.com/gtag/js?id=G-MN69E65JZV"
            ></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', "G-MN69E65JZV", {
                page_path: window.location.pathname,
              });
            `,
              }}
            />
            <CategoryHolder />
            {children}
            <Footer />
          </NextThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
