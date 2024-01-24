import api from "../../../api";

const userApiSlice = api.injectEndpoints({
  endpoints: (build) => ({
    users: build.query({
      query: () => "users",
    }),
  }),
  overrideExisting: false,
});

export const { useUsersQuery } = userApiSlice;
