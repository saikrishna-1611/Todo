// // import axios from "axios";

// // // Base API Configuration
// // const API = axios.create({ baseURL: "http://localhost:8000/api/v3" });
// // API.interceptors.request.use((req) => {
// //   const token = localStorage.getItem("token");
// //   if (token) req.headers.Authorization = `Bearer ${token}`;
// //   return req;
// // });
// // export const registerUser = (formData) => API.post("/register", formData);
// // export const loginUser = (formData) => API.post("/login", formData);
// // export const createTask = (taskData) => API.post("/create-task", taskData);
// // export const getTasks = () => API.get("/get-tasks");
// // export const updateTask = (id, taskData) => API.put(`/update-task/${id}`, taskData);
// // export const deleteTask = (id) => API.delete(`/delete/${id}`);
// import axios from "axios";
// ***FOR NODEJS****
// // Base API Configuration
// const API = axios.create({ baseURL: "http://localhost:8000/api/v3" });

// API.interceptors.request.use((req) => {
//   const token = localStorage.getItem("token");
//   if (token) req.headers.Authorization = `Bearer ${token}`;
//   return req;
// });

// // User APIs
// export const registerUser = (formData) => API.post("/register", formData);
// export const loginUser = (formData) => API.post("/login", formData);

// // Task APIs
// export const createTask = async (taskData) => {
//   const response = await API.post("/create-task", taskData);
//   return response.data.task; // Return only the created task
// };

// export const getTasks = async () => {
//   const response = await API.get("/get-tasks");
//   return response.data.tasks; // Ensure API returns { tasks: [...] }
// };

// export const updateTask = (id, taskData) => API.put(`/update-task/${id}`, taskData);
// export const deleteTask = (id) => API.delete(`/delete/${id}`);


//FOR API CALLES WITHOUT RTK QUERY

// import axios from "axios";

// // Base API Configuration
// const API = axios.create({ baseURL: "http://localhost:5204/api/v3" });

// // Attach token to every request
// API.interceptors.request.use((req) => {
//   const token = localStorage.getItem("token");
//   if (token) {
//     req.headers.Authorization = `Bearer ${token}`;
//   }
//   return req;
// });

// // User APIs
// export const registerUser = async (formData) => {
//   try {
//     const response = await API.post("/auth/register", formData);
//     console.log(response);
//     return response;
//   } catch (error) {
//     console.error("Error registering user:", error.response?.data || error.message);
//     throw error;
//   }
// };

// export const loginUser = async (formData) => {
//   try {
//     const response = await API.post("/auth/login", formData);
//     if (response.data.token) {
//       localStorage.setItem("token", response.data.token); // Store token upon login
//     }
//     return response.data;
//   } catch (error) {
//     console.error("Error logging in:", error.response?.data || error.message);
//     throw error;
//   }
// };

// // Task API
// export const createTask = async (taskData) => {
//   try {
//     const response = await API.post("/task/create", taskData);
//     return response.data;
//   } catch (error) {
//     console.error("Error creating task:", error.response?.data || error.message);
//     throw error;
//   }
// };

// export const getTasks = async () => {
//   try {
//     const response = await API.get("/task/get-tasks");
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching tasks:", error.response?.data || error.message);
//     throw error;
//   }
// };

// export const updateTask = async (id, taskData) => {
//   try {
//     const response = await API.put(`/task/update-task/${id}`, taskData);
//     return response.data;
//   } catch (error) {
//     console.error("Error updating task:", error.response?.data || error.message);
//     throw error;
//   }
// };

// export const deleteTask = async (id) => {
//   try {
//     await API.delete(`/task/delete/${id}`);
//   } catch (error) {
//     console.error("Error deleting task:", error.response?.data || error.message);
//     throw error;
//   }
// };