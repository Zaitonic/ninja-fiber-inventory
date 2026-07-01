import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
  timeout: 10000
});

export const productsApi = {
  list: (params) => api.get("/products", { params }).then((res) => res.data),
  create: (payload) => api.post("/products", payload).then((res) => res.data),
  update: (id, payload) => api.put(`/products/${id}`, payload).then((res) => res.data),
  remove: (id) => api.delete(`/products/${id}`).then((res) => res.data)
};

export const tasksApi = {
  list: (params) => api.get("/tasks", { params }).then((res) => res.data),
  create: (payload) => api.post("/tasks", payload).then((res) => res.data),
  update: (id, payload) => api.put(`/tasks/${id}`, payload).then((res) => res.data),
  remove: (id) => api.delete(`/tasks/${id}`).then((res) => res.data),
  reset: () => api.post("/tasks/reset").then((res) => res.data)
};

export const dashboardApi = {
  stats: (params) => api.get("/dashboard/stats", { params }).then((res) => res.data),
  activity: () => api.get("/dashboard/activity").then((res) => res.data)
};

export const usersApi = {
  list: () => api.get("/users").then((res) => res.data),
  create: (payload) => api.post("/users", payload).then((res) => res.data),
  update: (id, payload) => api.put(`/users/${id}`, payload).then((res) => res.data),
  remove: (id) => api.delete(`/users/${id}`).then((res) => res.data)
};

export default api;
