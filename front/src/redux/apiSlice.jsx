import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5204/api/v3",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
 
    registerUser: builder.mutation({
      query: (formData) => ({
        url: "/auth/register",
        method: "POST",
        body: formData,
      }),
    }),
    loginUser: builder.mutation({
      query: (formData) => ({
        url: "/auth/login",
        method: "POST",
        body: formData,
      }),
    }),

    // Task APIs
    getTasks: builder.query({
      query: () => "/task/get-tasks",
    }),
    createTask: builder.mutation({
      query: (taskData) => ({
        url: "/task/create",
        method: "POST",
        body: taskData,
      }),
    }),
    updateTask: builder.mutation({
      query: ({ id, taskData }) => ({
        url: `/task/update-task/${id}`,
        method: "PUT",
        body: taskData,
      }),
    }),
    deleteTask: builder.mutation({
      query: (id) => ({
        url: `/task/delete/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});


export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useGetTasksQuery,
  useCreateTaskMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} = apiSlice;