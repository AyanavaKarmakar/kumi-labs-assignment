import { ItemsList } from "../utils/ItemsList";
import Image from "next/image";
import clsx from "clsx";
import { mulishFont } from "../fonts";

export const Products = () => {
  return (
    <div className="flex flex-row gap-x-2 overflow-y-clip overflow-x-scroll">
      {ItemsList.map(({ id, name, icon, description, cost, discount }) => (
        <div key={id} className="relative h-[220px] w-[140px] py-5">
          <Image src={icon} alt={name} height={100} width={100} />
          <span className="absolute bottom-[110px] right-[40px]">
            <Image
              className="cursor-pointer"
              src="/assets/product/add-item.svg"
              alt="add or remove item"
              height={35}
              width={35}
            />
          </span>
          <div className="space-y-1 pl-2 pt-2">
            <p
              className={
                (clsx("text-[20px] font-[700] text-[#100E3A]"),
                `${mulishFont.className}`)
              }
            >
              <span
                className={clsx(
                  `${
                    discount
                      ? "text-[20px] font-[700] text-[#737D94] line-through"
                      : "text-[20px] font-[700] text-[#100E3A]"
                  }`
                )}
              >
                ${cost}
              </span>
              {discount && (
                <span className="text-[20px] font-[700] text-[#100E3A]">
                  {`  $${discount}`}
                </span>
              )}
            </p>
            <h2
              className={clsx(
                `${mulishFont.className}`,
                "text-[16px] font-[600] text-[#100E3A]"
              )}
            >
              {name}
            </h2>
            <p
              className={clsx(
                `${mulishFont.className}`,
                "text-[16px] font-[700] text-[#B6BAC3]"
              )}
            >
              {description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
