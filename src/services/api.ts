import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Prato from '../models/Prato'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/'
  }),
  endpoints: (builder) => ({
    getFeaturedPrato: builder.query<Prato, void>({
      query: () => 'restaurantes'
    })
  })
})

export const { useGetFeaturedPratoQuery } = api

export default api
