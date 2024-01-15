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
    clearLoginUserInfo: (state) => {
      state.loginUserInfo = null;
    },
    changeLoginUserInfo: (state, action) => {
      const { signDogName, signDogAge, signDogType, signUserNicname } = action.payload;
      let user = {...state.loginUserInfo};
      console.log(user);
      user.signUserNicname = signUserNicname;
      user.signDogName = signDogName;
      user.signDogAge = signDogAge;
      user.signDogType = signDogType;
      console.log(user);
      state.loginUserInfo = user;
    }
  }
});

export const { pushUserInfo, getLoginUserInfo, clearLoginUserInfo, changeLoginUserInfo } = userInfoSlice.actions;

export const getLoginUser = state => state.user.loginUserInfo;

export default userInfoSlice.reducer;