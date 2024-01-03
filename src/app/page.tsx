"use client";

import MainContent from "@/components/MainContent";
import ServicesOffer from "@/components/ServicesOffer";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.refresh();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <section className="bg-primary-50 bg-dotted-pattern bg-contain  min-h-screen w-screen">
      
        <div className="relative flex flex-col pb-5 h-full w-full" id="">
          <div className="rotate-0 absolute top-0  h-full w-full bg-black/50 left-0 z-[2] object-cover "></div>
          <video
            autoPlay
            muted
            loop
            className="rotate-0 absolute top-0  h-full w-full left-0 z-[1] object-cover "
          >
            <source src="/videoplayback.webm" type="video/webm" />
          </video>
          <MainContent />
        </div>
      </section>

      <section
        id=""
        className="max-w-7xl lg:mx-auto p-5 md:px-10 xl:px-0 w-full my-8 flex flex-col gap-8 md:gap-12"
      >
        <ServicesOffer/>
      </section>
    </main>
  );
}
