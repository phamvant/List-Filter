import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./sagas";
import { APISlice } from "../modules/OrdersSlice";
import { FilterSlice } from "../modules/FilterSlice";

const sagaMiddleWare = createSagaMiddleware();

const store = configureStore({
  reducer: {
    users: APISlice.reducer,
    filter: FilterSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    sagaMiddleWare,
  ],
});

sagaMiddleWare.run(rootSaga);

export default store;
