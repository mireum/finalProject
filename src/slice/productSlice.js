import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: [],
  selectedCategory: '',
  selectedProduct: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getProducts: (state, action) => {
      state.productList = action.payload;
    },
    getSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    getSelectedProduct: (state, action) => {
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
  getSelectedProduct,
  clearSelectedProduct,
  addMoreProducts
} = productSlice.actions;

export const selectProductList = state => state.product.productList;
export const selectSelectedCategory = state => state.product.selectedCategory;
export const selectSelectedProduct = state => state.product.selectedProduct;

export default productSlice.reducer;