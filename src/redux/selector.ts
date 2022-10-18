import { createSelector } from "@reduxjs/toolkit";

export const usersSelector = (state: any) => state.users.data;
export const filterSelector = (state: any) => state.filter.value;

export const usersFilter = createSelector(
  usersSelector,
  filterSelector,
  (data: any, filter: any) => {
    // console.log("filter", filter);
    return data.filter((user: any) => {
      return user.CustomerName.includes(filter);
    });
  }
);
