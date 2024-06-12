import axios, { AxiosRequestConfig } from "axios";

const API_URL = "https://mocki.io/v1";

const defaultAxiosSettings: AxiosRequestConfig = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
};

const axiosBirthday = axios.create({
  baseURL: API_URL,
  ...defaultAxiosSettings,
});

export default axiosBirthday;
