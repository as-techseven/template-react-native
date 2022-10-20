import axios from 'axios';
import { getItemStorage } from '../storage';

const server = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    platform: 'app',
  },
});

server.interceptors.request.use(
  async (config: any) => {
    const token = await getItemStorage('token');

    if (token) {
      config.headers.Authorization = `Bearer ${JSON.parse(token)}`;
    }

    return config;
  },
  (error: any) => Promise.reject(error),
);

server.interceptors.response.use(
  async (response: any) => response,
  async (error: any) => {
    Promise.reject(error);
  },
);

export default server;
