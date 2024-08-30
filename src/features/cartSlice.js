// Import the createSlice function from Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";

// Create a slice for the cart state
const cartSlice = createSlice({
  // Name of the slice, used in action types
  name: "cart",
  // Initial state of the slice
  initialState: {
    items: [],    // Array to store cart items
    itemCount: 0, // Counter for total items in cart
  },
  // Reducer functions to handle state changes
  reducers: {
    // Action to add an item to the cart
    addToCart: (state, action) => {
      state.items.push(action.payload); // Add new item to items array
      state.itemCount += 1;             // Increment item count
    },
    // Action to remove an item from the cart
    removeFromCart: (state, action) => {
      // Filter out the item with the matching id
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      // Update item count to match the new number of items
      state.itemCount = state.items.length;
    },
  },
});

// Export the action creators
export const { addToCart, removeFromCart } = cartSlice.actions;

// Selector to get cart items from the state
export const selectCartItems = (state) => state.cart.items;

// Selector to get cart item count from the state
export const selectCartItemCount = (state) => state.cart.itemCount;

// Export the reducer function
export default cartSlice.reducer;