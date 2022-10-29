import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { jwt, LoginObj, Person, RegObj } from 'types/common.model'
import { setItem } from 'utils/localStorage'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https:/abab.com' }),
  endpoints: (builder) => ({
    login: builder.mutation<LoginObj, jwt>({
      query: (obj) => ({
        url: 'login',
        method: 'POST',
        body: obj,
      }),
      async onCacheEntryAdded(arg, { cacheDataLoaded }) {
        try {
          await cacheDataLoaded
          setItem('jwt', arg.jwt)
        } catch {}
      },
    }),

    reg: builder.mutation<RegObj, jwt>({
      query: (obj) => ({
        url: 'register',
        method: 'POST',
        body: obj,
      }),
      async onCacheEntryAdded(arg, { cacheDataLoaded }) {
        try {
          await cacheDataLoaded
          setItem('jwt', arg.jwt)
        } catch {}
      },
    }),
  }),
})

export const { useLoginMutation, useRegMutation } = authApi
