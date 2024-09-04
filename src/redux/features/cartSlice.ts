import { createSlice } from "@reduxjs/toolkit";
import { TCartItem } from "../../types";

interface CartState {
  products: TCartItem[];
}

const initialState: CartState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = state.products.find(
        (product) => product._id === action.payload._id
      );
      if (product) {
        product.number = product.number + 1;
        product.price = product.price * product.number;
      } else {
        state.products.push({ ...action.payload, number: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.products = state.products.filter(
        (product) => product._id !== action.payload._id
      );
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
