//redux store 
// We set up the Redux store in store.js, 
// incorporating our cart reducer.

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});