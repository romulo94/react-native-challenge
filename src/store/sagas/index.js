import { all, takeLatest, call, put, select } from "redux-saga/effects";

import {
  Creators as CitiesActions,
  Types as CitiesTypes
} from "../ducks/cities";

export default function* rootSaga() {
  return yield all([takeLatest(CitiesTypes.ADD_CITY, () => {})]);
}
