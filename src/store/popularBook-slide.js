import { createSlice } from "@reduxjs/toolkit";

const popularBookSlice = createSlice({
  name: "popularBook",
  initialState: {
    popularBookList: [],
    loading: false,
  },
  reducers: {
    getPopularBookList(state) {
      state.loading = true;
      return state;
    },
    updatePopularBookList(state, action) {
      state.loading = false;
      state.popularBookList = action?.payload;
      return state;
    },
  },
});

export const { getPopularBookList, updatePopularBookList } =
  popularBookSlice.actions;

export default popularBookSlice;
