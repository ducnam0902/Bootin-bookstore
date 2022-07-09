import PopularBookSagas from "./popularSagas";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([...PopularBookSagas]);
}
