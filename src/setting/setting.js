import axios from "axios";
export const DOMAIN = "http://localhost:3000";
const token = localStorage.getItem("accessToken");
//Cấu hình interceptor (cấu hình sẵn những tham số mặc định cho tất cả api)
export const http = axios.create({
  baseURL: DOMAIN,
  timeout: 30000,
});
http.interceptors.request.use(
  (config) => {
    config.headers = {
      ...config.headers,
      Authoriation: `Bearer ${token ? token : ""}`,
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
