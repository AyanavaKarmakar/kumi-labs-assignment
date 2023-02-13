import { CategoryList } from "../utils/CategoryList";
import { mulishFont } from "../fonts";
import Image from "next/image";
import clsx from "clsx";

export const TopBar = () => {
  return (
    <div className={clsx(`${mulishFont.className}`, "block text-lg lg:hidden")}>
      {CategoryList.map(({ id, name, icon }) => (
        <div
          key={id}
          className={clsx(
            "flex flex-col items-center justify-center gap-x-3",
            "my-[10px] cursor-pointer py-[10px] px-3",
            `${
              name === "Bakery"
                ? "rounded-xl bg-[#5DA9E9] text-white"
                : "bg-white text-[#737D94]"
            }`
          )}
        >
          <Image src={icon} width={20} height={20} alt="category icon" />
          {name}
        </div>
      ))}
    </div>
  );
};
