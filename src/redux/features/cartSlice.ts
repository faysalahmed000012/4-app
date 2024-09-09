import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
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
        if (product.quantity <= product.orderQuantity) {
          toast.error("You Cannot order more than available quantity");
          return;
        }
        product.orderQuantity = product.orderQuantity + 1;
        product.price = product.price * product.orderQuantity;
        toast.success("Product Added To Cart");
      } else {
        state.products.push({ ...action.payload, orderQuantity: 1 });
        toast.success("Product Added To Cart");
      }
    },
    removeFromCart: (state, action) => {
      state.products = state.products.filter(
        (product) => product._id !== action.payload._id
      );
    },
    clearCart: (state) => {
      state.products = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
