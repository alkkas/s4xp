import { fetchBaseQuery } from '@reduxjs/toolkit/query'
import { getItem } from 'utils/localStorage'

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://basequery.com/',
  prepareHeaders: (headers) => {
    const token = getItem('jwt')
    if (token) {
      headers.set('authorization', `Bearer ${token}`)
    }

    return headers
  },
})
export default baseQuery
