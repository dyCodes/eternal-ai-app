import axios from 'axios';

const BASE_URL = process.env.API_URL || 'http://localhost:8080/api';

const httpClient = axios.create({
  baseURL: BASE_URL,
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor
httpClient.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

// Add a response interceptor
httpClient.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export default httpClient;
