import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { url } from '../Store/ApiUrl';
import { Post } from '../Store/storetypes';

export const microserviceApi = createApi({
  reducerPath: 'microserviceApi',
  baseQuery: fetchBaseQuery({ baseUrl: url }),
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], string>({
      query: () => `Home`,
    }),
    createPost: builder.mutation<Post, string>({
      query: (body) => ({
        url: `searchResults`,
        method: 'POST',
        body,
      }),
      // createComment: builder.mutation<Comment, Comment>({
      //   query: (body) => ({
      //     url: `Home/${body.post_ID}`,
      //     method: 'POST',
      //     body,
      //   }),
      // }),
    }),
  }),
});

export const { useGetPostsQuery, useCreatePostMutation } = microserviceApi;
