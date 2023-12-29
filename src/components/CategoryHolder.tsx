"use client"

import { usePathname } from "next/navigation";
import Categories from "./Categories";

const CategoryHolder = () => {
  const path = usePathname();
  return (
    <>
      {path === "/" ? (
        ""
      ) : (
        <div className="sticky -mt-2 pt-2 pb-2 top-[65px] !bg-gray-100 dark:bg-gray-100/40 dark:text-white flex justify-center pr-4 z-[109]">
          <Categories
            style={`mx-1 md:mx-6 px-2 text-sm md:text-base py-2 rounded-lg border-b `}
            title={null}
            classNames={` text-[#314E52]  flex justify-space-around font-semibold items-center h-full md:w-3xl pt-2 pb-1  my-2`}
          />
        </div>
      )}
    </>
  );
};

export default CategoryHolder;
