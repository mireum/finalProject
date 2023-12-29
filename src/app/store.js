import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/productSlice";
import dailyDogReducer from "../features/dailyDogSlice"

export const store = configureStore({
    reducer: {
      product: productReducer,      
      dailyDog: dailyDogReducer,
    }
});

export default store;