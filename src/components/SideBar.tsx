import { mulishFont } from "../fonts";
import { type RootState } from "../redux/store";
import { CategoryList } from "../utils/CategoryList";
import clsx from "clsx";
import { useSelector } from "react-redux";

export const SideBar = () => {
  const selectedCategory = useSelector(
    (state: RootState) => state.categoryInView.value
  );

  return (
    <aside
      className={clsx(
        `${mulishFont.className}`,
        "ml-[20px] mt-[20px] w-64 bg-white text-lg font-bold",
        "fixed left-0 top-20"
      )}
    >
      {CategoryList.map(({ id, name }) => (
        <div
          key={id}
          className={clsx(
            "my-[10px] cursor-pointer py-[10px] px-3",
            `${
              name === selectedCategory
                ? "rounded-xl bg-[#5DA9E9] text-white"
                : "bg-white text-[#737D94]"
            }`
          )}
        >
          {name}
        </div>
      ))}
    </aside>
  );
};
