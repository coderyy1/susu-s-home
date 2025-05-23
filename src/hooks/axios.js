import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api',
  timeout: 10000
});

// 请求拦截器
instance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('ss_token'); // 可替换为你项目的 Token 逻辑
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

// 响应拦截器
instance.interceptors.response.use(
  response => response.data,
  error => {
    const msg = error.response?.data?.message || '请求失败，请稍后重试';
    console.error('[Axios Error]', msg);
    return Promise.reject(error);
  }
);

export default instance;