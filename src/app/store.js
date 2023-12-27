import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/productSlice";
import cartReducer from "../features/cartSlice";
import dailyDogReducer from "../features/dailyDogSlice"

export const store = configureStore({
    reducer: {
      product: productReducer,      
      cart: cartReducer,
      dailyDog: dailyDogReducer,
    }
});

export default store;