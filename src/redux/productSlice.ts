import { createSlice } from "@reduxjs/toolkit";
import { AllProductStateType, ProductType } from "../types/ProductType";
import productData from "../../build/assets/level3/products.json";

function isValidProductType(product: any): product is ProductType {
  return (
    (product.type === "simple" || product.type === "configurable") &&
    typeof product.id === "number" &&
    typeof product.sku === "string" &&
    typeof product.title === "string" &&
    typeof product.regular_price === "object" &&
    typeof product.regular_price.currency === "string" &&
    typeof product.regular_price.value === "number" &&
    typeof product.image === "string" &&
    typeof product.brand === "number"
  );
}

const validProducts: ProductType[] = (productData as any[]).filter(
  isValidProductType
);

const initialState: AllProductStateType = {
  products: validProducts,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productSlice.reducer;
