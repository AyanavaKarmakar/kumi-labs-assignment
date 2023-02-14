import { mortiseFont } from "../fonts";
import { CategoryList } from "../utils/CategoryList";
import clsx from "clsx";
import Image from "next/image";

export const ItemListContainer = () => {
  return (
    <div className="mt-[24px]">
      {/* Category Title */}
      {CategoryList.map(({ id, name }) => (
        <div key={id} className="flex flex-row">
          <h1
            className={clsx(
              `${mortiseFont.className}`,
              "text-3xl font-[700px] text-[#100E3A]"
            )}
          >
            {name}
          </h1>

          <Image
            className="pt-[4px]"
            src="/assets/entypo_chevron-small-right.svg"
            alt={"right arrow"}
            width={36}
            height={36}
          />
        </div>
      ))}
    </div>
  );
};
