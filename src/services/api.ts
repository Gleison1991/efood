import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import prato from '../models/Prato'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getFeaturedPrato: builder.query<prato[], void>({
      query: () => 'restaurantes'
    })
  })
})

export const { useGetFeaturedPratoQuery } = api

export default api
