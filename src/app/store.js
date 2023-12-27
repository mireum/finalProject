import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../slice/productSlice";
import cartReducer from "../slice/cartSlice";
import dailyDogReducer from "../features/dailyDogSlice"

export const store = configureStore({
    reducer: {
      product: productReducer,      
      cart: cartReducer,
      dailyDog: dailyDogReducer,
    }
});

export default store;