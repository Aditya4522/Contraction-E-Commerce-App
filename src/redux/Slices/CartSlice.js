import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === newItem.id
      );

      if (existingItemIndex >= 0) {
        // Update existing item
        state.cartItems[existingItemIndex].quantity += newItem.quantity;
        state.cartItems[existingItemIndex].totalPrice +=
          newItem.price * newItem.quantity;
      } else {
        // Add new item
        state.cartItems.push({
          ...newItem,
          quantity: newItem.quantity,
          totalPrice: newItem.price * newItem.quantity,
        });
      }

      state.totalQuantity += newItem.quantity;
      state.totalPrice += newItem.price * newItem.quantity;
    },

    removeFromCart: (state, action) => {
      const removeItem = action.payload;
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === removeItem.id
      );

      if (existingItemIndex === -1) return;

      const existingItem = state.cartItems[existingItemIndex];

      state.totalQuantity -= existingItem.quantity;
      state.totalPrice -= existingItem.price * existingItem.quantity;

      state.cartItems = state.cartItems.filter(
        (item) => item.id !== removeItem.id
      );
    },

    emptyCart: (state) => {
      state.cartItems = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;
