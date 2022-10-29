import { createApi } from '@reduxjs/toolkit/query/react'
import baseQuery from 'store/baseQuery'
import { Person } from 'types/common.model'

export const studentApi = createApi({
  reducerPath: 'studentApi',
  baseQuery,
  endpoints: (builder) => ({
    getData: builder.query<Person, void>({
      query: () => '/getData',
    }),
  }),
})

export const { useGetDataQuery } = studentApi
