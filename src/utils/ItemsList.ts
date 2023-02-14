import { z } from "zod";

const ItemsListValidator = z.array(
  z.object({
    id: z.number(),
    name: z.string(),
    icon: z.string(),
    cost: z.string(),
    description: z.string(),
    discount: z.string().optional(),
  })
);

export type TItemsList = z.infer<typeof ItemsListValidator>;
export const ItemsList: TItemsList = [
  {
    id: 1,
    name: "Banana 1 ct",
    icon: "/assets/product/banana.svg",
    cost: "0.69",
    description: "18 oz",
  },
  {
    id: 2,
    name: "Strawberries",
    icon: "/assets/product/strawberry.svg",
    cost: "0.69",
    description: "1 lb",
    discount: "0.69",
  },
  {
    id: 3,
    name: "Yogurt",
    icon: "/assets/product/yogurt.svg",
    cost: "0.69",
    description: "1 lb",
  },
  {
    id: 4,
    name: "Blackberries",
    icon: "/assets/product/blackberry.svg",
    cost: "0.69",
    description: "1 lb",
  },
  {
    id: 5,
    name: "Strawberries",
    icon: "/assets/product/strawberry.svg",
    cost: "0.69",
    description: "1 lb",
    discount: "0.69",
  },
  {
    id: 6,
    name: "Yogurt",
    icon: "/assets/product/yogurt.svg",
    cost: "0.69",
    description: "1 lb",
  },
  {
    id: 7,
    name: "Banana 1 ct",
    icon: "/assets/product/banana.svg",
    cost: "0.69",
    description: "18 oz",
  },
  {
    id: 2,
    name: "Strawberries",
    icon: "/assets/product/strawberry.svg",
    cost: "0.69",
    description: "1 lb",
    discount: "0.69",
  },
  {
    id: 3,
    name: "Yogurt",
    icon: "/assets/product/yogurt.svg",
    cost: "0.69",
    description: "1 lb",
  },
];
