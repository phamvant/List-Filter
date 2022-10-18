import { all } from "redux-saga/effects";
import * as API from "../modules/OrdersSlice";

export default function* rootSaga() {
  yield all([API.saga()]);
}
