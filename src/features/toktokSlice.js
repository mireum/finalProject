import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toktokList: [],
};

const toktokSlice = createSlice({
  name: 'toktok',
  initialState,
  reducers: {
    addToktokList: (state, action) => {
      state.toktokList.push(action.payload);
    },
  }
});

export const { addToktokList } = toktokSlice.actions;

export const selecttoktokList = state => state.toktok.toktokList;

export default toktokSlice.reducer;