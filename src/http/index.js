import axios from "axios";

const clienteHttp = axios.create({
  baseURL: 'http://localhost:3000',
});

clienteHttp.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        config.headers['authorization'] = token;
      } catch (error) {
        console.error("Error decoding token:", error);
      }
    } 

    return config;
  },
  (error) => Promise.reject(new Error(error))
);

export default clienteHttp;