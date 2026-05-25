
// import axios from "axios";

// const axiosClient = axios.create({
// baseURL: `${import.meta.env.VITE_BACKEND_URL}/api`,
//   withCredentials: true,   // 🔑 ensures cookies (accessToken) are sent
// });

// export default axiosClient;





import axios from "axios";

const axiosClient = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}/api`,
  withCredentials: true,
});

// ✅ Add this below
axiosClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        await axiosClient.post("/auth/refresh");
        return axiosClient(originalRequest);
      } catch (err) {
        window.location.href = "/";
      }
    }
    return Promise.reject(error);
  }
);

export default axiosClient;
