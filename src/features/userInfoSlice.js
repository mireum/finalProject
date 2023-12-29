import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: [],
  loginUserInfo: null,
}
const userInfoSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    pushUserInfo: (state, action) => { // 회원가입
      state.userInfo.push(action.payload)
    },

    getLoginUserInfo: (state, action) => { // 현재 로그인 ID
      state.loginUserInfo = action.payload;
    },
  }
});

export const { pushUserInfo, getLoginUserInfo } = userInfoSlice.actions;

export const getLoginUser = state => state.user.loginUserInfo;

export default userInfoSlice.reducer;