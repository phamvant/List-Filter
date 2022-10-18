import { put } from "redux-saga/effects";
import request from "../setup/axios";

// export const LOAD_USERS_LOADING = "REDUX_SAGA_LOAD_USERS_LOADING";
// export const LOAD_USERS_SUCCESS = "REDUX_SAGA_LOAD_USERS_SUCCESS";
// export const LOAD_USERS_ERROR = "REDUX_SAGA_LOAD_USERS_ERROR";

export const UserAPI = () => {
  return request({
    url: "/users.json?key=9b718270",
    method: "GET",
  });
};

// function* fetchUser() {
//   try {
//     //@ts-ignore
//     const users = yield fetchAsync(Api.getUsers);

//     yield put({ type: LOAD_USERS_SUCCESS, data: users });
//   } catch (e: any) {
//     yield put({ type: LOAD_USERS_ERROR, error: e.message });
//   }
// }
