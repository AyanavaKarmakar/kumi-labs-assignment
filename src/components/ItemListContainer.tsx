import { mortiseFont } from "../fonts";
import { CategoryList } from "../utils/CategoryList";
import clsx from "clsx";

export const ItemListContainer = () => {
  return (
    <div>
      {CategoryList.map(({ id, name }) => (
        <h1
          key={id}
          className={clsx(
            `${mortiseFont.className}`,
            "text-3xl font-[700px] text-[#100E3A]"
          )}
        >
          {name}
        </h1>
      ))}
    </div>
  );
};
