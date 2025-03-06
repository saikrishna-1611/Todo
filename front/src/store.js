
import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./redux/apiSlice";
import authReducer from "./redux/authSlice"; 
import taskReducer from "./redux/taskSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer, 
    tasks: taskReducer, 
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;