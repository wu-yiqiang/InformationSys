import axios from "axios";
import { config } from "process";
const service = axios.create({
  baseURL: "/api",
  timeout: 5000 
});

// 请求拦截器
service.interceptors.request.use(
  config => {
    const token = window.localStorage.getItem("accessToken");
    // if (token) {
    //   config.headers.common.Authorization = token;
    // }
    return config;
  },
  error => Promise.reject(error)
);

// 响应拦截器
service.interceptors.response.use(
  response => {
    const res = response.data;

    if (response.status !== 200) {
      return Promise.reject(new Error(res.message || "Error"));
    } else {
      return res.result;
    }
  },
  error => {
    return Promise.reject(error);
  }
);
export default service;