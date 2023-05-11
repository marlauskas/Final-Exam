import axios from "axios";

const client = axios.create({});

client.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
);

class Api_instance {
  constructor() {
    const baseUrl = "http://localhost:5001/api";

    this.baseUrl = {
      database: baseUrl + "/database/",
    };
  }
}

export const API = new Api_instance();

export default client;
