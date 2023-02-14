import { ItemsList } from "../utils/ItemsList";
import Image from "next/image";
import clsx from "clsx";
import { mulishFont } from "../fonts";

export const Products = () => {
  return (
    <div className="flex flex-row gap-x-2 overflow-x-auto">
      {ItemsList.map(({ id, name, icon, description, cost, discount }) => (
        <div
          key={id}
          className="relative h-[200px] w-[120px] py-5 px-3 lg:h-[220px] lg:w-[140px] lg:px-0"
        >
          {/* For large screens */}
          <Image
            className="hidden lg:block"
            src={icon}
            alt={name}
            height={100}
            width={100}
          />
          <span className="absolute bottom-[110px] right-[40px]">
            <Image
              className="hidden cursor-pointer lg:block"
              src="/assets/product/add-item.svg"
              alt="add or remove item"
              height={35}
              width={35}
            />
          </span>

          {/* For small/medium screens */}
          <Image
            className="block lg:hidden"
            src={icon}
            alt={name}
            height={75}
            width={75}
          />
          <span className="absolute bottom-[120px] right-[15px]">
            <Image
              className="block cursor-pointer lg:hidden"
              src="/assets/product/add-item.svg"
              alt="add or remove item"
              height={25}
              width={25}
            />
          </span>

          <div className="space-y-0 pl-2 pt-2 lg:space-y-1">
            <p
              className={
                (clsx("text-[16px] font-[700] text-[#100E3A] lg:text-[20px]"),
                `${mulishFont.className}`)
              }
            >
              <span
                className={clsx(
                  `${
                    discount
                      ? "text-[16px] font-[700] text-[#737D94] line-through lg:text-[20px]"
                      : "text-[16px] font-[700] text-[#100E3A] lg:text-[20px]"
                  }`
                )}
              >
                ${cost}
              </span>
              {discount && (
                <span className="text-[16px] font-[700] text-[#100E3A] lg:text-[20px]">
                  {`  $${discount}`}
                </span>
              )}
            </p>
            <h2
              className={clsx(
                `${mulishFont.className}`,
                "text-[14px] font-[600] text-[#100E3A] lg:text-[16px]"
              )}
            >
              {name}
            </h2>
            <p
              className={clsx(
                `${mulishFont.className}`,
                "text-[12px] font-[700] text-[#B6BAC3] lg:text-[16px]"
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
