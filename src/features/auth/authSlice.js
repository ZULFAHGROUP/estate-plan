import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { customers: null, token: null },
  reducers: {
    setCredentials: (state, action) => {
      const { customers, accessToken } = action.payload;
      state.customers = customers;
      state.accessToken = accessToken;
    },
    logOut: (state, action) => {
      state.customers = null;
      state.token = null;
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentCustomer = (state) => state.auth.customers;
export const selectCurrentToken = (state) => state.auth.token;
