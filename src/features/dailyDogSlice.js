import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dailyDogList: [
    {
      id: 4,
      title: '네번째',
      content: '테스트',
    },
    {
      id: 3,
      title: '세번째',
      content: '테스트',
    },
    {
      id: 2,
      title: '두번째',
      content: '테스트',
    },
    {
      id: 1,
      title: '첫번째',
      content: '테스트',
    }
  ],
  toktok: [
    {
      title: '1111',
      content: '2222',
      author: '준우강아지',
      img: '사진들어감',
      like: 0,
      view: 0,
      comment: 0, 
    }, {
      title: '3333',
      content: '4444',
      author: '지민강아지',
      img: '사진들어감',
      like: 0,
      view: 0,
      comment: 0,
    }, {
      title: '5555',
      content: '6666',
      author: '지우강아지',
      img: '사진들어감',
      like: 0,
      view: 0,
      comment: 0,
    }, {
      title: '5555',
      content: '6666',
      author: '하은강아지',
      img: '사진들어감',
      like: 0,
      view: 0,
      comment: 0,
    }, {
      title: '5555',
      content: '6666',
      author: '민수강아지',
      img: '사진들어감',
      like: 0,
      view: 0,
      comment: 0,
    },
    {
      title: '7777',
      content: '6666',
      author: '길동강아지',
      img: '사진들어감',
      like: 0,
      view: 0,
      comment: 0,
    },
  ]
};

const dailyDogSlice = createSlice({
  name: 'dailyDog',
  initialState,
  reducers: {
    addListToDailyDog: (state, action) => {
      state.dailyDogList.unshift(action.payload);
    },
  }
});

export const { addListToDailyDog } = dailyDogSlice.actions;

export const selectDailyDogList = state => state.dailyDog.dailyDogList;
export const selectToktokList = state => state.dailyDog.toktok;

export default dailyDogSlice.reducer;