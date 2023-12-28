import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dailyDogList: [
    {
      id: 4,
      title: '네번째',
      content: '테스트',
      src: '',
    },
    {
      id: 3,
      title: '세번째',
      content: '테스트',
      src: '',
    },
    {
      id: 2,
      title: '두번째',
      content: '테스트',
      src: '',
    },
    {
      id: 1,
      title: '첫번째',
      content: '테스트',
      src: '',
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
      title: '7777123123131321313123132313213',
      content: '안녕하세요, 텍스트가 넘치게 작성중입니다. 텍스트가 빨리 넘쳤으면 좋겠어요 언제 넘칠까요? 왜 안넘치고 뭐죠? 계속 작성 되는데요?',
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