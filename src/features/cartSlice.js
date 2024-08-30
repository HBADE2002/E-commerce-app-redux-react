// created a new file cartSlice.js to define 
// our Redux slice for the cart. 
// This includes actions for adding 
// and removing items from the cart.


import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    itemCount: 0
  },
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
      state.itemCount += 1;
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
      state.itemCount = state.items.length;
    },
  },
});



export const { addToCart, removeFromCart } = cartSlice.actions;
export const selectCartItems = (state) => state.cart.items;
export const selectCartItemCount = (state) => state.cart.itemCount;
export default cartSlice.reducer;