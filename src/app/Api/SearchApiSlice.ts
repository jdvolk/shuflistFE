import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiUrl } from '../Store/ApiUrl';

enum ResultType {
  ITEM = 'item',
  AUTHOR = 'author',
  Collection = 'collection',
}
export interface Error {
  slug: string;
  message: string;
}
interface Author {
  id: string;
  name: string;
  displayResources: {
    default: string;
  };
  isPrimary: boolean;
}

interface Genre {
  id: string;
  name: string;
  isPrimary: boolean;
}

interface Media {
  default: string;
}

interface Collection {
  id: string;
  name: string;
  mediaType: string;
  displayResources: Record<string, never>;
  lengthTime: number;
  releaseDate: string;
  authors: Author[];
  genres: Genre[];
  numberOfItems: number;
}

interface SongData {
  id: string;
  name: string;
  mediaType: string;
  displayResources: {
    default: string;
  };
  seriesId: string;
  lengthTime: number;
  releaseDate: string;
  authors: Author[];
  genres: Genre[];
  media: Media; // Include the media field here
  ofCollection: Collection;
}

export interface SongResults {
  type: ResultType;
  data: SongData;
}

export interface SongQuery {
  error: Error | null;
  data: SongResults[] | null;
}

export const searchApi = createApi({
  reducerPath: 'searchApi',
  baseQuery: fetchBaseQuery({ baseUrl: apiUrl }),
  endpoints: (builder) => ({
    getSearchResults: builder.query<SongQuery, string>({
      query: (searchParams) => `media?query=${searchParams}`,
    }),
  }),
});

export const { useGetSearchResultsQuery } = searchApi;
