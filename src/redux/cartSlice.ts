import { createSlice } from "@reduxjs/toolkit";
import { CartTypeState } from "../types/CartType";

const initialState: CartTypeState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartProduct>) => {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.selectedOptions = action.payload.selectedOptions;
        existingItem.selectedVariant = action.payload.selectedVariant;
      } else {
        state.cart.push(action.payload);
      }
    },
    deleteFromCart(state, action) {
      state.cart = state.cart.filter(
        (product) => product.id !== action.payload
      );
    },
  },
});

export const { addToCart, deleteFromCart } = cartSlice.actions;

export default cartSlice.reducer;
