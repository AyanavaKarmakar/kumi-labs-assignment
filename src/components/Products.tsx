import { ItemsList } from "../utils/ItemsList";
import Image from "next/image";
import clsx from "clsx";

export const Products = () => {
  return (
    <div className="flex flex-row">
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
          <div className="pl-2 pt-1">
            <p>
              <span className={clsx(`${discount && "line-through"}`)}>
                ${cost}
              </span>
              {discount && <span> ${discount}</span>}
            </p>
            <h2>{name}</h2>
            <p>{description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
