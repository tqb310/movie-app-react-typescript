import axios from "axios";
import queryString from "query-string";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    "Content-Type": "application/json",
  },
  paramsSerializer: param =>
    queryString.stringify({ ...param, api_key: import.meta.env.VITE_API_KEY }),
});

axiosInstance.interceptors.request.use(config => {
  return config;
});

axios.interceptors.response.use(
  response => {
    if (response && response.data) return response.data;
  },
  err => {
    throw err;
  }
);

export default axiosInstance;

export function getOriginalImage(
  imgPath: string,
  type: "original" | "w500" = "original"
) {
  return `https://image.tmdb.org/t/p/${type}/${imgPath}`;
}
