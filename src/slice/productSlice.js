import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: [],
  selectedCategory: '',
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getProducts: (state, action) => {
      state.productList = action.payload;
    },
    getSelectedCategory: (state, action) => {
      state.selectedProduct = action.payload;
    },
    clearSelectedProduct: (state) => {
      state.selectedProduct = null;
    },
    addMoreProducts: (state, action) => {
      state.productList.push(...action.payload);
    },
  }
});

export const {
  getProducts,
  getSelectedCategory,
  clearSelectedProduct,
  addMoreProducts
} = productSlice.actions;

export const selectProductList = state => state.product.productList;
export const selectSelectedCategory = state => state.product.selectedCategory;

export default productSlice.reducer;