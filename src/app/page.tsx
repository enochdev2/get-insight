"use client";

import MainContent from "@/components/MainContent";
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
      <section className="bg-primary-50 bg-dotted-pattern bg-contain  h-screen w-screen">
      
        <div className="relative flex flex-col h-full w-full" id="">
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
        {/* </div> */}
      </section>

      <section
        id="events"
        className="max-w-7xl lg:mx-auto p-5 md:px-10 xl:px-0 w-full my-8 flex flex-col gap-8 md:gap-12"
      >
        <h2 className="h2-bold">
          Trust by <br /> Thousands of Events
        </h2>

        {/* <div className="flex w-full flex-col gap-5 md:flex-row">
          <Search />
          <CategoryFilter />
        </div>

        <Collection 
          data={events?.data}
          emptyTitle="No Events Found"
          emptyStateSubtext="Come back later"
          collectionType="All_Events"
          limit={6}
          page={page}
          totalPages={events?.totalPages}
        /> */}
      </section>
    </main>
  );
}
