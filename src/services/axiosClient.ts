import axios from "axios";
import queryString from "query-string";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    "Content-Type": "application/json",
  },
  paramsSerializer: params => {
    return queryString.stringify({
      ...params,
      api_key: import.meta.env.VITE_API_KEY,
    });
  },
});

axiosInstance.interceptors.request.use(config => {
  return config;
});

axiosInstance.interceptors.response.use(
  response => {
    if (response && response.data) return response.data;
  },
  err => {
    throw err;
  }
);

export default axiosInstance;

export function getImage(
  imgPath: string,
  type: "original" | "w500" = "original"
) {
  return `https://image.tmdb.org/t/p/${type}${imgPath}`;
}

export function getEmbededMovie(videoId: number) {
  return `https://2embed.org/embed/${videoId}`;
}
