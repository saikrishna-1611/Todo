// import { configureStore } from "@reduxjs/toolkit";
// import authReducer from "./redux/authSlice.jsx";
// import taskReducer from "./redux/taskSlice.jsx";
// export const store = configureStore({
//   reducer: {
//     auth: authReducer,
//     tasks: taskReducer,
//   },
// });

import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./redux/apiSlice";
import authReducer from "./redux/authSlice"; // Import authSlice
import taskReducer from "./redux/taskSlice"; // Import taskSlice

export const store = configureStore({
  reducer: {
    auth: authReducer, // Keep auth state for Navbar
    tasks: taskReducer, // Keep task state if needed
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;