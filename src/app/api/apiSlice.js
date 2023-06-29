import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredentials, logOut } from "../../features/auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://mapp-asset-tracker.azurewebsites.net",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    if (token) {
      headers.set("Authorization", "Bearer " + token);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.originalStatus === 403) {
    console.log("sending refresh token");

    const refreshResult = await baseQuery("/refresh", api, extraOptions);
    console.log(refreshResult);
    if (refreshResult?.data) {
      const customers = api.getState().auth.customers;
      api.dispatch(setCredentials({ ...refreshResult.data, customers }));
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logOut());
    }

    return result;
  }
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({}),
});
