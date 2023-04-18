import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/"}),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "shoes",
    }),
  }),
});

export const { useGetAllProductsQuery } = productsApi