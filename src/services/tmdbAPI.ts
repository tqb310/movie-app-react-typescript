import IDataList from "../interfaces/DataList";
import axiosInstance from "./axiosClient";
import { Category, MovieType, TvType } from "../constants/movie";
import IParams from "../interfaces/Params";
import { IMovie, IMovieDetail } from "../interfaces/Movie";
import { ITv, ITvDetail } from "../interfaces/Tv";
import IVideo from "../interfaces/Video";
import ICredit from "../interfaces/Cast";

export async function getMoviesByType(
  type: MovieType,
  params: Partial<IParams>
): Promise<IDataList<IMovie> | undefined> {
  try {
    const result: IDataList<IMovie> = await axiosInstance.get(
      `/movie/${type}`,
      { params }
    );
    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function getTvByType(
  type: TvType,
  params: Partial<IParams>
): Promise<IDataList<ITv> | undefined> {
  try {
    const result: IDataList<ITv> = await axiosInstance.get(`/tv/${type}`, {
      params,
    });

    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function getVideos(
  category: Category,
  id: string
): Promise<IDataList<IVideo> | undefined> {
  try {
    const result: IDataList<IVideo> = await axiosInstance.get(
      `/${category}/${id}/videos`,
      { params: {} }
    );
    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function searchByType<T extends IMovie | ITv>(
  category: Category,
  params: IParams
): Promise<IDataList<T> | undefined> {
  try {
    const result: IDataList<T> = await axiosInstance.get(
      `/search/${category}`,
      { params }
    );
    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function getDetail<T extends IMovieDetail | ITvDetail>(
  id: number,
  category: Category,
  params: IParams
): Promise<T | undefined> {
  try {
    const result: T = await axiosInstance.get(`/${category}/${id}`, { params });

    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function getCredit(
  id: number,
  category: Category
): Promise<ICredit | undefined> {
  try {
    const result: ICredit = await axiosInstance.get(
      `/${category}/${id}/credits`
    );

    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function getSimilar<T extends IMovie | ITv>(
  id: number,
  category: Category
): Promise<IDataList<T> | undefined> {
  try {
    const result: IDataList<T> = await axiosInstance.get(
      `/${category}/${id}/similar`,
      { params: {} }
    );

    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function getTrending<T extends IMovie | ITv>(
  category: Category
): Promise<IDataList<T> | undefined> {
  try {
    const result: IDataList<T> = await axiosInstance.get(
      `/trending/${category}/day`,
      { params: {} }
    );

    return result;
  } catch (error) {
    console.log(error);
  }
}
