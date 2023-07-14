import axios from "axios";

export const BACKEND_BASE_URL = "https://grocery-api-clwg.onrender.com";

const axiosInstance = axios.create({
  baseURL: BACKEND_BASE_URL,
});

export default axiosInstance;
