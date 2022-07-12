import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartSelected: [],
    totalPrice: 0,
  },
  reducers: {
    getCartSelected(state) {
      state.loading = true;
      return state;
    },
    updateCartSelected(state, action) {
      state.loading = false;
      state.cartSelected = action?.payload;
      return state;
    },
    addToCart(state, action) {
      const currentCartSelected = [...state.cartSelected];
      const newItem = action.payload;
      const indexItem = currentCartSelected.findIndex(
        (item) => item.id === newItem.id
      );
      if (indexItem === -1) {
        currentCartSelected.push({
          ...newItem,
          quantity: 1,
        });
        state.cartSelected = currentCartSelected;
      } else {
        currentCartSelected[indexItem].quantity += 1;
        state.cartSelected = currentCartSelected;
      }
      const totalPrice = currentCartSelected.reduce(
        (total, item) => (total += item.price),
        0
      );
      state.totalPrice = totalPrice;
    },
    deleteItemInCart(state, action) {
      const deleteItemId = action.payload;
      const currentCartSelected = state.cartSelected.filter(
        (item) => item.id !== deleteItemId
      );
      state.cartSelected = currentCartSelected;
    },
  },
});

export const { getCartSelected, updateCartSelected, addToCart, deleteItemInCart } =
  cartSlice.actions;

export default cartSlice;
