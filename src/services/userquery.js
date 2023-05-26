// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const imageApiI = createApi({
  reducerPath: 'imageApiI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://646dc0a29c677e23218a59b4.mockapi.io/images/' }),
  tagTypes: ['Images'],
  endpoints: (builder) => ({
    getU: builder.query({
      query: (ID) => ({ url: `userselected/${ID}` }),
      providesTags: ['Images'],
    }),
    updateU: builder.mutation({
        query(data) {
            console.log(data)
          const { id,status } = data
          const body={"status":status}
          return {
            url: `userselected/${id}`,
            method: 'PUT',
            body,
          }
        },
        invalidatesTags: ['Images'],
      }),
    
  }),
  
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUQuery,useUpdateUMutation } = imageApiI