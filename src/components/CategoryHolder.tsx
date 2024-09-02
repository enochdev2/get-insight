"use client";

import { usePathname } from "next/navigation";
import Categories from "./Categories";

const CategoryHolder = () => {
  const path = usePathname();
  return (
    <>
      {path === "/" ? (
        ""
      ) : (
        <div className="sticky max-w-xl mx-auto rounded-xl -mt-2 pt-2 pb-1 top-[65px] bg-[url('/7.png')] text-white flex justify-center items-center pr-4 z-[109]">
          <div className=" pt-2  ">
            <Categories
              style={`mx-1 md:mx-4 bg-black/30 px-3   text-sm md:text-base py-3 rounded-lg border  `}
              title={null}
              classNames={` text-[#ffffff]  flex justify-space-around font-semibold items-center h-full m-auto pt-2 pb-1  my-2 `}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CategoryHolder;
