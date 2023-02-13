import { mulishFont } from "../fonts";
import { CategoryList } from "../utils/CategoryList";
import clsx from "clsx";

export const SideBar = () => {
  return (
    <aside
      className={clsx(
        `${mulishFont.className}`,
        "ml-[20px] mt-[20px] hidden w-64 bg-white text-lg font-bold lg:block"
      )}
    >
      <div>
        {CategoryList.map(({ id, name }) => (
          <div
            key={id}
            className={clsx(
              "my-[10px] cursor-pointer py-[10px] px-3",
              `${
                name === "Bakery"
                  ? "rounded-xl bg-[#5DA9E9] text-white"
                  : "bg-white text-[#737D94]"
              }`
            )}
          >
            {name}
          </div>
        ))}
      </div>
    </aside>
  );
};
