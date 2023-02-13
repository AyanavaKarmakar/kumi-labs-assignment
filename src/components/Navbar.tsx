import Image from "next/image";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-[#FFE475] px-4 py-6 shadow-md">
      <div className="text-2xl text-[#100E3A]">E-Commerce</div>

      <div className="flex h-9 w-20 flex-row items-center justify-center gap-x-[2px] rounded-3xl bg-white text-center shadow-md">
        <Image src="/cart.png" alt="cart icon" height="70" width="30" />
        <span className="text-lg text-black">3</span>
      </div>
    </nav>
  );
};
