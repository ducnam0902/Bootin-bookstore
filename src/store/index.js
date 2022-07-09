import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "@bootin/sagas";
import popularBookSlice from "./popularBook-slide";
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    popularBook: popularBookSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
