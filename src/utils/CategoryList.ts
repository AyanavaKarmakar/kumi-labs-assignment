import { z } from "zod";

const CategoryListValidator = z.array(
  z.object({
    id: z.number(),
    name: z.string(),
    icon: z.string(),
    activeIcon: z.string(),
  })
);

export type TCategoryList = z.infer<typeof CategoryListValidator>;

export const CategoryList: TCategoryList = [
  {
    id: 1,
    name: "Produce",
    icon: "/assets/fa-solid_carrot.svg",
    activeIcon: "/assets/active-fa-solid_carrot.svg",
  },
  {
    id: 2,
    name: "Prepared foods",
    icon: "/assets/mdi_chocolate.svg",
    activeIcon: "/assets/active-mdi_chocolate.svg",
  },
  {
    id: 3,
    name: "Canned foods & Soups",
    icon: "/assets/game-icons_canned-fish.svg",
    activeIcon: "/assets/active-game-icons_canned-fish.svg",
  },
  {
    id: 4,
    name: "Bakery",
    icon: "/assets/material-symbols_cake-rounded.svg",
    activeIcon: "/assets/active-material-symbols_cake-rounded.svg",
  },
  {
    id: 5,
    name: "Dairy & Eggs",
    icon: "/assets/jam_eggs-f.svg",
    activeIcon: "/assets/active-jam_eggs-f.svg",
  },
  {
    id: 6,
    name: "Frozen",
    icon: "/assets/ion_fast-food.svg",
    activeIcon: "/assets/active-ion_fast-food.svg",
  },
  {
    id: 7,
    name: "Meat & Seafood",
    icon: "/assets/ion_fast-food.svg",
    activeIcon: "/assets/active-ion_fast-food.svg",
  },
];
