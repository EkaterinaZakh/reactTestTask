import { ProductType } from "./ProductType";

export type CartType = {
  product: ProductType;
};

export type CartTypeState = {
  cart: ProductType[];
};
