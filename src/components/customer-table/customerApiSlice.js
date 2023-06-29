import { apiSlice } from "../../app/api/apiSlice";

export const customersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/customers",
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetUsersQuery } = customersApiSlice;
