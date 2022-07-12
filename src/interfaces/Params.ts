import { AxiosRequestConfig } from "axios";

interface IParams extends AxiosRequestConfig {
  page: number;
  language: "en-US" | "vi";
  region: string;
}

export default IParams;
