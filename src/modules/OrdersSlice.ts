import { createSlice } from "@reduxjs/toolkit";
import { call, takeLatest, put, takeEvery } from "redux-saga/effects";
import { UserAPI } from "./UserAPI";
//@ts-ignore
import { UsersData } from "../assets/dummy";

export const APISlice = createSlice({
  name: "api",
  initialState: { data: [] as any, loading: false, error: "" },
  reducers: {
    GETUSERINFO: (state) => {
      state.loading = true;
      state.error = "";
    },
    LOADUSERSUCCESS: (state) => {
      state.loading = false;
      state.error = "";
    },
    SAVEUSERINFO: (state, action) => {
      action.payload.map((payload: any) => {
        state.data.push(payload);
      });
    },
  },
});

export function* saga() {
  yield takeEvery("api/GETUSERINFO", function* getUserInfo() {
    try {
      //@ts-ignore
      // const response: any = yield call(UserAPI);
      // if (response) {
      // console.log("Response ", UsersData);
      yield put(APISlice.actions.SAVEUSERINFO(UsersData));
      // yield put(APISlice.actions.LOADUSERSUCCESS());
      // }
    } catch (err) {
      console.log(err);
    }
  });
}
