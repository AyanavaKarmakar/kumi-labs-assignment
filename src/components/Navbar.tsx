import Image from "next/image";
import clsx from "clsx";
import { mortiseFont, mulishFont } from "../fonts";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 z-50 flex w-full items-center justify-between bg-white px-[20px] pt-5 pb-6 lg:bg-[#FFE475] lg:shadow-md">
      <div
        className={clsx("text-3xl text-[#100E3A]", `${mortiseFont.className}`)}
      >
        E-Commerce
      </div>

      <div className="relative flex h-10 w-20 cursor-pointer flex-row items-center justify-center gap-x-[10px] rounded-3xl bg-white px-[15px] text-center shadow-md">
        <Image
          priority={true}
          src="/assets/cart.svg"
          alt="cart icon"
          height="50"
          width="50"
        />
        <span
          className={clsx(
            `${mulishFont.className}`,
            "pb-[2px] text-lg text-black"
          )}
        >
          3
        </span>
      </div>
    </nav>
  );
};
