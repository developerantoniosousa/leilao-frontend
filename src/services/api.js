import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('@leilao:token');
  if (token) {
    config.headers.authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
