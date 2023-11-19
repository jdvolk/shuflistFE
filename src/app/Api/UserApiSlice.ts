// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiUrl } from '../Store/ApiUrl';

// {
//   "error":null,
//   "data":{
//     "id":"DrqUiriHQDxWcVE8Meqme4",
//     "handle":"justinvolk",
//     "displayName":"justinvolk",
//     "createdAt":"2023-11-16T04:01:13.332855Z",
//     "updatedAt":"2023-11-16T04:01:13.332855Z",
//     "emails":[]
//   }
// }

// {
//   "error":{
//     "slug":"resource_not_found",
//     "message":"The requested resource does not exist."
//   },
//   "data":null
// }
interface UserData {
  id: string;
  handle: string;
  displayName: string;
  createdAt: string;
  updatedAt: string;
  emails: [];
}
interface Error {
  slug: string;
  message: string;
}

interface UserQuery {
  error: Error | null;
  data: UserData | null;
}

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${apiUrl}` }),
  endpoints: (builder) => ({
    getUserInfo: builder.query<UserQuery, string>({
      query: (handle) => `users/${handle}`,
    }),
    // getUsers: builder.query<UserQuery, string>({
    //   query: (query) => `users/`,
    // }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetUserInfoQuery } = userApi;
