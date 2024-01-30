import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `/`,
    credentials: "same-origin",
    prepareHeaders: (headers) => {
      headers.set("Access-Control-Allow-Origin", "*");
      headers.set("Accept", `application/json`);
      headers.set("Content-Type", `application/json`);
      return headers;
    },
  }),
  tagTypes: [],
  endpoints: () => ({}),
});
