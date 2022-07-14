import { AxiosRequestConfig } from "axios";

interface IParams {
  page: number;
  language: "en-US" | "vi";
  region: string;
  query: string;
}

export default IParams;
