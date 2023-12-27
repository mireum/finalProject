import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../slice/productSlice";
import cartReducer from "../slice/cartSlice";

export const store = configureStore({
    reducer: {
      product: productReducer,      
      cart: cartReducer,
    }
});


export default store;