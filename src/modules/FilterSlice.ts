import { createSlice } from "@reduxjs/toolkit";

export const FilterSlice = createSlice({
  name: "filter",
  initialState: {
    value: "",
  },
  reducers: {
    FILTERNAME: (state, action) => {
      // console.log(action.payload);
      state.value = action.payload;
    },
  },
});
