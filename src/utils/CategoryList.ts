import { z } from "zod";

const CategoryListValidator = z.array(
  z.object({ id: z.number(), name: z.string() })
);

export type TCategoryList = z.infer<typeof CategoryListValidator>;

export const CategoryList: TCategoryList = [
  { id: 1, name: "Produce" },
  { id: 2, name: "Prepared foods" },
  { id: 3, name: "Canned foods & Soups" },
  { id: 4, name: "Bakery" },
  { id: 5, name: "Dairy & Eggs" },
  { id: 6, name: "Frozen" },
  { id: 7, name: "Meat & Seafood" },
];
