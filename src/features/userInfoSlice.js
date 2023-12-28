import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: [],
  loginUserInfo: null,
}
const userInfoSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getAllUserInfo: (state, action) => {
      state.userInfo = action.payload.data;
    },


    // 회원가입
    getUserInfo: (state, { payload: inputInfo }) => {
      const targetInfo = state.userInfo.find(info => info.id === inputInfo.id)
      if (targetInfo) {
        alert('이미 가입된 아이디 입니다.')
        return;
      } else {
        state.userInfo.push(inputInfo)
      }
    },
    pushUserInfo: (state, action) => {
      state.userInfo.push(action.payload)
    },


    // 현재 로그인 ID
    getLoginUserInfo: (state, action) => {
      console.log(action.payload);
      state.loginUserInfo = action?.payload;
    },


  }
});

export const { getUserInfo, getAllUserInfo, pushUserInfo, getAllTeamInfo, getAllCalendarInfo, getLoginUserInfo } = userInfoSlice.actions;

export const selectUserList = state => state.userInfo.userInfo;
export const getTeamInfo = state => state.userInfo.teamInfo;
export const getMyCalendarInfo = state => state.userInfo.myCalendar;
export const getLoginUser = state => state.userInfo.loginUserInfo;

export default userInfoSlice.reducer;