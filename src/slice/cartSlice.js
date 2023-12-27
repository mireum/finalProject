import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartList: [

  ],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState ,
  reducers: {
    increaseCount: (state, action) => { // 여기서 find는 id가 같은 객체를 반환한다
      const targetItem = state.cartList.find((cart) => cart.id === action.payload);
      targetItem.count += 1;
    },
    decreaseCount: (state, { payload: id }) => {
      const targetItem = state.cartList.find((cart) => cart.id === id);
      targetItem.count -= 1;
    },
    addItemToCart: (state, { payload: item }) => {
      const targetItem = state.cartList.find((cart) => cart.id === item.id);
      if (!targetItem) {
        state.cartList.push(item);
      } else {
        targetItem.count += item.count;
      }
    },
    removeItemFromCart: (state, { payload: id }) => {
      const newCartList = state.cartList.filter(cart => cart.id !== id);
      state.cartList = newCartList;
    },
  }
});

export const { increaseCount, decreaseCount, addItemToCart, removeItemFromCart } = cartSlice.actions;

export const selectCartList = state => state.cart.cartList;

export default cartSlice.reducer;