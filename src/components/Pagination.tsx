"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

// import { Button } from "../ui/button";

interface Props {
  pageNumber: number;
  isNext: boolean;
  path: string;
}

function Pagination({ isNext, pageNumber }: any) {
  // const [pageNumbers, setPageNumber] = useState<any>(1)
  const router = useRouter();

  const handleNavigation = (type: string) => {
    let nextPageNumber = pageNumber;

    if (type === "prev") {
      nextPageNumber = Math.max(1, pageNumber - 1);
    } else if (type === "next") {
      nextPageNumber = pageNumber + 1;
    }

    if (nextPageNumber > 1) {
      router.push(`/blog?page=${nextPageNumber}`);
    } else {
      router.push(`/blog`);
    }
  };

  if (!isNext && pageNumber === 1) return null;

  return (
    <div className=" flex gap-8 justify-center items-center">
      <button
        onClick={() => handleNavigation("prev")}
        disabled={pageNumber === 1}
        className={`border px-4 py-3 rounded-xl bg-sky-900 text-stone-300`}
      >
        Prev
      </button>

      <p className="text-small-semibold text-light-1">
        {" "}
        <span className="mr-6 text-sky-700">page:</span>
        {pageNumber}
      </p>

      <button
        onClick={() => handleNavigation("next")}
        disabled={!isNext}
        className="border px-4 py-3 rounded-xl bg-sky-900 text-stone-300"
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
