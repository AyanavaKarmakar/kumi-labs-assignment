import Image from "next/image";
import clsx from "clsx";
import { mortiseFont, mulishFont } from "../fonts";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-[#FFE475] px-4 py-6 shadow-md">
      <div
        className={clsx("text-3xl text-[#100E3A]", `${mortiseFont.className}`)}
      >
        E-Commerce
      </div>

      <div className="flex h-9 w-20 flex-row items-center justify-center gap-x-[2px] rounded-3xl bg-white text-center shadow-md">
        <Image src="/cart.png" alt="cart icon" height="70" width="30" />
        <span className={clsx(`${mulishFont.className}`, "text-lg text-black")}>
          3
        </span>
      </div>
    </nav>
  );
};
