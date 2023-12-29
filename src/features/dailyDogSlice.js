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
  ],
   fleamarket: [
    {
      id: 4,
      title: '네번째 물품',
      price: 10000,
      category: '',
      place: '경기도 화성시',
      content: '',
      src: '',
    },
    {
      id: 3,
      title: '세번째 물품',
      price: 20000,
      category: '',
      place: '경기도 평택시',
      content: '',
      src: '',
    },
    {
      id: 2,
      title: '두번째 물품',
      price: 15000,
      category: '',
      place: '서울시 구로구',
      content: '',
      src: '',
    },
    {
      id: 1,
      title: '첫번째 물품',
      price: 8000,
      category: '',
      place: '인천시 계양구',
      content: '',
      src: '',
    }
  ],
};

const dailyDogSlice = createSlice({
  name: 'dailyDog',
  initialState,
  reducers: {
    addListToDailyDog: (state, action) => {
      state.dailyDogList.unshift(action.payload);
    },
    addItemToFleamarket: (state, action) => {
      console.log(action.payload);
      state.fleamarket.unshift(action.payload);
    },
  }
});

export const { addListToDailyDog, addItemToFleamarket } = dailyDogSlice.actions;

export const selectDailyDogList = state => state.dailyDog.dailyDogList;
export const selectToktokList = state => state.dailyDog.toktok;
export const selectFleamarket = state => state.dailyDog.fleamarket;

export default dailyDogSlice.reducer;