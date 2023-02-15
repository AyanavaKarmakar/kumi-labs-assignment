import { mortiseFont, mulishFont } from "../fonts";
import { CategoryList } from "../utils/CategoryList";
import { Products } from "./Products";
import clsx from "clsx";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Scrollspy } from "@makotot/ghostui";
import { useDispatch } from "react-redux";
import { setCategory } from "../redux/CategoryViewSlice";

export const ItemListContainer = () => {
  const [categoryInView, setCategoryInView] = useState("");
  const dispatch = useDispatch();

  /**
   * Create a ref for each category
   */
  const sectionRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  useEffect(() => {
    if (categoryInView !== "") {
      dispatch(setCategory(categoryInView));
    }
  }, [categoryInView, dispatch]);

  return (
    <div className="mt-[165px] lg:mt-[120px]">
      {/* Category Title */}
      <Scrollspy sectionRefs={sectionRefs}>
        {({ currentElementIndexInViewport }) => (
          <>
            {CategoryList.map(({ id, name }, i) => {
              /**
               * Set the category in view to the redux store
               */
              if (currentElementIndexInViewport === i) {
                setCategoryInView(name);
              }

              return (
                <div key={id} className="px-5 lg:px-0">
                  <div className="flex flex-row lg:mr-5">
                    <h1
                      ref={sectionRefs[i]}
                      className={clsx(
                        `${mortiseFont.className}`,
                        "ml-3 text-[16px] font-bold text-[#100E3A] lg:text-3xl lg:font-[700px]"
                      )}
                    >
                      {name}
                    </h1>

                    <Image
                      priority={true}
                      className="block pt-[2px] lg:hidden"
                      src="/assets/entypo_chevron-small-right.svg"
                      alt={"right arrow"}
                      width={24}
                      height={24}
                    />

                    <Image
                      priority={true}
                      className="hidden pt-[4px] lg:block"
                      src="/assets/entypo_chevron-small-right.svg"
                      alt={"right arrow"}
                      width={36}
                      height={36}
                    />

                    <div
                      className={clsx(
                        `${mulishFont.className}`,
                        "ml-auto mr-1 block pt-[6px] text-[12px] font-[700] text-[#5DA9E9] lg:hidden"
                      )}
                    >
                      View All
                    </div>
                  </div>
                  <Products />
                  <hr className="py-5" />
                </div>
              );
            })}
          </>
        )}
      </Scrollspy>
    </div>
  );
};
