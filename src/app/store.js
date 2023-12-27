import { configureStore } from "@reduxjs/toolkit";
import dailyDogReducer from "../features/dailyDogSlice"

export const store = configureStore({
    reducer: {
        dailyDog: dailyDogReducer,
    }
});


export default store;