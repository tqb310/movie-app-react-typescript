import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Category,
  displayedLabel,
  MovieType,
  TvType,
} from "../../constants/movie";
import FooterBg from "../../assets/images/backdrop.webp";
import MovieGrid from "../../components/shared/MovieGrid";
import { IMovie } from "../../interfaces/Movie";
import { ITv } from "../../interfaces/Tv";
import * as tmdbAPI from "../../services/tmdbAPI";

const CatalogType = () => {
  const params = useParams();
  const [data, setData] = useState<Array<IMovie | ITv>>([]);
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const getData = async () => {
      try {
        if (params.typeOrId !== "trending") {
          if (params.category === "movie") {
            const responseData = await tmdbAPI.getMoviesByType(
              params.typeOrId as MovieType,
              { page: currentPage }
            );
            if (responseData && responseData.results?.length)
              setData([...data, ...responseData?.results]);
            setTotalPage(responseData?.total_pages || 0);
          } else {
            const responseData = await tmdbAPI.getTvByType(
              params.typeOrId as TvType,
              { page: currentPage }
            );
            if (responseData && responseData.results?.length)
              setData([...data, ...responseData?.results]);
            setTotalPage(responseData?.total_pages || 0);
          }
        } else {
          if (params.category === "movie") {
            const responseData = await tmdbAPI.getTrending<IMovie>(
              Category.MOVIE,
              { page: currentPage }
            );
            if (responseData && responseData.results?.length)
              setData([...data, ...responseData?.results]);
            setTotalPage(responseData?.total_pages || 0);
          } else {
            const responseData = await tmdbAPI.getTrending<ITv>(Category.TV, {
              page: currentPage,
            });
            if (responseData && responseData.results?.length)
              setData([...data, ...responseData?.results]);
            setTotalPage(responseData?.total_pages || 0);
          }
        }
      } catch (error) {
        throw error;
      }
    };
    getData();
  }, [currentPage]);

  const goNextPage = async () => {
    setCurrentPage(currentPage + 1);
  };

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
      {currentPage < totalPage && (
        <button
          onClick={goNextPage}
          className='btn btn-outline-white mx-auto block mb-10'
        >
          Load more
        </button>
      )}
    </div>
  );
};

export default CatalogType;
