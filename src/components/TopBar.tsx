import { CategoryList } from "../utils/CategoryList";
import { mulishFont } from "../fonts";
import Image from "next/image";
import clsx from "clsx";

export const TopBar = () => {
  return (
    <div
      className={clsx(
        "fixed z-10 mt-[85px] mb-4 flex w-full flex-row items-center space-x-[15px] overflow-hidden overflow-x-auto bg-white",
        `${mulishFont.className}`
      )}
    >
      <div className="flex flex-row items-center space-x-3 overflow-x-auto px-7">
        {CategoryList.map(({ id, name, icon, activeIcon }) => {
          /**
           * Split the name into words
           * and get the first word
           * to display in the top bar
           */
          const words = name.split(" ");
          const firstWord = words[0];

          return (
            <div key={id} className="flex flex-col items-center">
              <div
                className={clsx(
                  "h-[48px] w-[48px] cursor-pointer rounded-md p-[12px] shadow-md",
                  firstWord === "Dairy" ? "bg-[#5DA9E9]" : "bg-[#EDEDED]"
                )}
              >
                <Image
                  src={firstWord === "Dairy" ? activeIcon : icon}
                  alt={name}
                  height={24}
                  width={24}
                />
              </div>

              <div
                className={clsx(
                  "mt-[5px] text-center text-[12px] font-bold",
                  `${
                    firstWord === "Dairy" ? "text-[#5DA9E9]" : "text-[#B6BAC3]"
                  }`
                )}
              >
                {firstWord}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
