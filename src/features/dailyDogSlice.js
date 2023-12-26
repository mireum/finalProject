import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dailyDogList: [],
};

const dailyDogSlice = createSlice({
  name: 'dailyDog',
  initialState,
  reducers: {
    addListToDailyDog: (state, action) => {
      state.dailyDogList.push(action.payload);
    },
  }
});

export const { addListToDailyDog } = dailyDogSlice.actions;

export const selectDailyDogList = state => state.dailyDog.dailyDogList;

export default dailyDogSlice.reducer;