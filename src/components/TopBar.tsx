import { CategoryList } from "../utils/CategoryList";
import { mulishFont } from "../fonts";
import Image from "next/image";
import clsx from "clsx";

export const TopBar = () => {
  return (
    <div
      className={clsx(
        "flex flex-row items-center space-x-[15px] overflow-x-auto px-7",
        `${mulishFont.className}`
      )}
    >
      {CategoryList.map(({ id, name, icon }) => {
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
                "cursor-pointer rounded-md p-4 shadow-md",
                firstWord === "Produce" ? "bg-[#5DA9E9]" : "bg-[#EDEDED]"
              )}
            >
              <Image src={icon} width={20} height={50} alt="category icon" />
            </div>
            <div
              className={clsx(
                "mt-[5px] text-center text-[12px] font-bold",
                `${
                  firstWord === "Produce" ? "text-[#5DA9E9]" : "text-[#B6BAC3]"
                }`
              )}
            >
              {firstWord}
            </div>
          </div>
        );
      })}
    </div>
  );
};
