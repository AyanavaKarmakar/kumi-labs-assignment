import { z } from "zod";

const CategoryListValidator = z.array(
  z.object({ id: z.number(), name: z.string(), icon: z.string() })
);

export type TCategoryList = z.infer<typeof CategoryListValidator>;

export const CategoryList: TCategoryList = [
  { id: 1, name: "Produce", icon: "/fa-solid_carrot.png" },
  { id: 2, name: "Prepared foods", icon: "/mdi_chocolate.png" },
  { id: 3, name: "Canned foods & Soups", icon: "/game-icons_canned-fish.png" },
  { id: 4, name: "Bakery", icon: "/material-symbols_cake-rounded.png" },
  { id: 5, name: "Dairy & Eggs", icon: "/jam_eggs-f.png" },
  { id: 6, name: "Frozen", icon: "/public/ion_fast-food.png" },
  { id: 7, name: "Meat & Seafood", icon: "🍖" },
];
