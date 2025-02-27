import axios from "axios";

// Base API Configuration
const API = axios.create({ baseURL: "http://localhost:8000/api/v3" });
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});
export const registerUser = (formData) => API.post("/register", formData);
export const loginUser = (formData) => API.post("/login", formData);
export const createTask = (taskData) => API.post("/create-task", taskData);
export const getTasks = () => API.get("/get-tasks");
export const updateTask = (id, taskData) => API.put(`/update-task/${id}`, taskData);
export const deleteTask = (id) => API.delete(`/delete/${id}`);