// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const imageApi = createApi({
  reducerPath: 'imageApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://646dc0a29c677e23218a59b4.mockapi.io/images/' }),
  tagTypes: ['Images'],
  endpoints: (builder) => ({
    getImage: builder.query({
      query: () => `testapi`,
      providesTags: ['Images'],
    }),
    updateImage: builder.mutation({
        query(data) {
            console.log(data)
          const { id,status } = data
          const body={"status":status}
          return {
            url: `testapi/${id}`,
            method: 'PUT',
            body,
          }
        },
        invalidatesTags: ['Images'],
      }),
      getU: builder.query({
        query: (ID) => ({ url: `userselected/${ID}` }),
        providesTags: ['Images'],
      }),
      daycomplited: builder.mutation({
        query(data) {
            console.log(data)
          const {id,selectedday,dayn} = data
          var body = {};
          body[`day${dayn.toString()}`] = !selectedday;

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
export const { useGetImageQuery,useUpdateImageMutation,useGetUQuery,useDaycomplitedMutation } = imageApi