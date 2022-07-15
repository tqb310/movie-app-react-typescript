import React, { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import {
  Category,
  displayedLabel,
  MovieType,
  TvType,
} from "../../constants/movie";
import FooterBg from "../../assets/images/footer-bg.jpg";
import MovieGrid from "../../components/shared/MovieGrid";
import { IMovie } from "../../interfaces/Movie";
import { ITv } from "../../interfaces/Tv";
import * as tmdbAPI from "../../services/tmdbAPI";
import Select, { SingleValue } from "react-select";
import { movieOptions, tvOptions } from "../../constants/movie";

const Catalog = () => {
  const params = useParams();

  const optionValues = useMemo(() => {
    if (params.category === "movie") {
      return movieOptions;
    }
    return tvOptions;
  }, [params]);

  const [data, setData] = useState<Array<IMovie | ITv>>([]);
  const [selectValue, setSelectValue] = useState<
    SingleValue<{ value: string; label: string }>
  >(optionValues[0]);

  useEffect(() => {
    setSelectValue(optionValues[0]);
  }, [params]);

  useEffect(() => {
    const getData = async () => {
      try {
        if (selectValue?.value !== "trending") {
          if (params.category === "movie") {
            const responseData = await tmdbAPI.getMoviesByType(
              selectValue?.value as MovieType,
              {}
            );
            if (responseData && responseData.results?.length)
              setData(responseData?.results);
          } else {
            const responseData = await tmdbAPI.getTvByType(
              selectValue?.value as TvType,
              {}
            );
            if (responseData && responseData.results?.length)
              setData(responseData?.results);
          }
        } else {
          if (params.category === "movie") {
            const responseData = await tmdbAPI.getTrending<IMovie>(
              Category.MOVIE
            );
            if (responseData && responseData.results?.length)
              setData(responseData?.results);
          } else {
            const responseData = await tmdbAPI.getTrending<ITv>(Category.TV);
            if (responseData && responseData.results?.length)
              setData(responseData?.results);
          }
        }
      } catch (error) {
        throw error;
      }
    };
    getData();
  }, [selectValue, params]);

  const handleSelectChange = (
    value: SingleValue<{ value: string; label: string }>
  ) => {
    setSelectValue(value);
  };
  return (
    <div>
      <div className='relative' style={{ background: `url('${FooterBg}')` }}>
        <div className='absolute bg-gradient-to-t from-black to-black/40 w-full h-full'></div>
        <h2 className='relative text-white text-center text-2xl font-bold pt-28 pb-16'>
          {displayedLabel(params.type || "") +
            " " +
            displayedLabel(params.category || "")}
        </h2>
      </div>
      <div className='container'>
        <Select
          className='w-1/4 ml-auto mb-5'
          value={selectValue}
          options={optionValues}
          onChange={handleSelectChange}
        />
      </div>
      <MovieGrid data={data} category={params.category || ""} />
    </div>
  );
};

export default Catalog;
