import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import brandsSlice from "./brandsSlice";
import cartSlice from "./cartSlice";

export const store = configureStore({
  reducer: {
    products: productSlice,
    brands: brandsSlice,
    cart: cartSlice,
  },
});

export type StoreT = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
