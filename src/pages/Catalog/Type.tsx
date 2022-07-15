import React, { useState, useEffect } from "react";
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

const CatalogType = () => {
  const params = useParams();
  const [data, setData] = useState<Array<IMovie | ITv>>([]);
  useEffect(() => {
    const getData = async () => {
      try {
        if (params.typeOrId !== "trending") {
          if (params.category === "movie") {
            const responseData = await tmdbAPI.getMoviesByType(
              params.typeOrId as MovieType,
              {}
            );
            if (responseData && responseData.results?.length)
              setData(responseData?.results);
          } else {
            const responseData = await tmdbAPI.getTvByType(
              params.typeOrId as TvType,
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
  }, []);

  return (
    <div>
      <div className='relative' style={{ background: `url('${FooterBg}')` }}>
        <div className='absolute bg-gradient-to-t from-black to-black/40 w-full h-full'></div>
        <h2 className='relative text-white text-center text-2xl font-bold pt-28 pb-16'>
          {displayedLabel(params.typeOrId || "") +
            " " +
            displayedLabel(params.category || "")}
        </h2>
      </div>
      <MovieGrid data={data} category={params.category || ""} />
    </div>
  );
};

export default CatalogType;
