
import axios from "axios";

const axiosClient = axios.create({
baseURL: `${import.meta.env.VITE_BACKEND_URL}/api`,
  withCredentials: true,   // 🔑 ensures cookies (accessToken) are sent
});

export default axiosClient;
