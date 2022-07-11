import { put, call, takeEvery, fork } from "redux-saga/effects";
import { fetchPopularBook } from "@bootin/api";
import {
  getPopularBookList,
  updatePopularBookList,
} from "@bootin/store/popularBook-slide";
function* getPopularBook() {
  try {
    const result = yield call(fetchPopularBook);
    yield put(updatePopularBookList(result));
  } catch (e) {
    console.log(e);
  }
}

function* watchGetPopularBookRequest() {
  yield takeEvery(getPopularBookList, getPopularBook);
}

const popularSagas = [fork(watchGetPopularBookRequest)];

export default popularSagas;
