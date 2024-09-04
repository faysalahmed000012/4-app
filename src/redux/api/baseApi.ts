import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
    credentials: "include",
  }),
  tagTypes: ["product"],
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (queries) => {
        const params = new URLSearchParams();
        params.append("limit", queries[0].limit);
        // for (const query of queries) {
        //   params.append(Object.keys(query)[0], query.Object.keys(query)[0]);
        //   console.log(Object.keys(query)[0], query[0]);
        // }
        return {
          url: "/products",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["product"],
    }),
    getProductById: builder.query({
      query: (id: string) => {
        return {
          url: `/products/${id}`,
          method: "GET",
        };
      },
    }),
    addProduct: builder.mutation({
      query: (data) => {
        return {
          url: `/products`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["product"],
    }),
    updateProduct: builder.mutation({
      query: (data) => {
        return {
          url: `/products/${data._id}`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: ["product"],
    }),
    deleteProduct: builder.mutation({
      query: (id: string) => {
        return {
          url: `/products/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["product"],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductByIdQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = baseApi;
