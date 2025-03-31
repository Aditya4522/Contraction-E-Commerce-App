import { createSlice } from "@reduxjs/toolkit";

// Helper function to load cart from localStorage
const loadCartFromLocalStorage = () => {
  try {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : { cartItems: [], totalQuantity: 0, totalPrice: 0 };
  } catch (error) {
    console.error("Error loading cart from localStorage", error);
    return { cartItems: [], totalQuantity: 0, totalPrice: 0 };
  }
};

// Initial state, loaded from localStorage if available
const initialState = loadCartFromLocalStorage();

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item._id === newItem._id
      );

      if (existingItemIndex >= 0) {
        state.cartItems[existingItemIndex].quantity += newItem.quantity;
      } else {
        state.cartItems.push({
          ...newItem,
          quantity: newItem.quantity,
        });
      }

      state.totalQuantity += newItem.quantity;
      state.totalPrice += newItem.price * newItem.quantity;

      // Persist updated cart to localStorage
      localStorage.setItem("cart", JSON.stringify(state));
    },

    removeFromCart: (state, action) => {
      const removeItem = action.payload;
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item._id === removeItem._id
      );

      if (existingItemIndex === -1) return;

      const existingItem = state.cartItems[existingItemIndex];

      state.totalQuantity = Math.max(0, state.totalQuantity - existingItem.quantity);
      state.totalPrice = Math.max(0, state.totalPrice - existingItem.price * existingItem.quantity);

      state.cartItems = state.cartItems.filter(
        (item) => item._id !== removeItem._id
      );

      // Persist updated cart to localStorage
      localStorage.setItem("cart", JSON.stringify(state));
    },

    emptyCart: (state) => {
      state.cartItems = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;

      // Persist empty cart to localStorage
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;
