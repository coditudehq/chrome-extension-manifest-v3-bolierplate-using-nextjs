import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

console.log("api slice called");

const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
    // prepareHeaders: (headers, { getState }) => {
    //   //   const { token } = getState().user;

    //   if (token) {
    //     headers.set("Access-Control-Allow-Origin", "*");
    //     headers.set("Authorization", `Bearer ${token}`);
    //   }
    //   return headers;
    // },
  }),
  tagTypes: ["User"],
  endpoints: () => ({}),
});

export default api;
