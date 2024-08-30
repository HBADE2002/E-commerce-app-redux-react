// Import the configureStore function from Redux Toolkit
// This function simplifies the store setup process
import { configureStore } from '@reduxjs/toolkit';

// Import the cart reducer from the cartSlice file
import cartReducer from '../features/cartSlice';

// Create and export the Redux store
export const store = configureStore({
  // The reducer object is where we define all the slices of our application state
  reducer: {
    // Here, we're adding our cartReducer under the key 'cart'
    // This means our cart state will be available at state.cart in our application
    cart: cartReducer,
  },
  // Note: configureStore automatically sets up some middleware,
  // including Redux Thunk for async actions and development tools
});