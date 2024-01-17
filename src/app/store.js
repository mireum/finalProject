import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/productSlice";
import dailyDogReducer from "../features/dailyDogSlice"
import useReducer from "../features/userInfoSlice"

export const store = configureStore({
  reducer: {
    product: productReducer,
    dailyDog: dailyDogReducer,
    user: useReducer
  }
});

export default store;