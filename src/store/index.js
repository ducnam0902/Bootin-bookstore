import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "@bootin/sagas";
import popularBookSlice from "./popularBook-slide";
import cartSlice from "./cart-slide";
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    popularBook: popularBookSlice.reducer,
    cart: cartSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
