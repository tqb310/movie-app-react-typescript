import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import FooterBg from "../../assets/images/backdrop.webp";
import MovieGrid from "../../components/shared/MovieGrid";
import { Category } from "../../constants/movie";
import { IMovie } from "../../interfaces/Movie";
import { ITv } from "../../interfaces/Tv";
import * as tmdbAPI from "../../services/tmdbAPI";

const Search = () => {
  const params = useParams();
  const [data, setData] = useState<Array<IMovie | ITv>>([]);
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [results, setResults] = useState(0);

  useEffect(() => {
    const getData = async () => {
      try {
        const responseData = await tmdbAPI.searchByType(Category.MOVIE, {
          page: 1,
          query: params.query,
        });
        if (responseData && responseData.results?.length)
          setData(responseData?.results);
        setTotalPage(responseData?.total_pages || 0);
        setResults(responseData?.total_results || 0);
        setCurrentPage(1);
      } catch (error) {
        throw error;
      }
    };
    getData();
  }, [params]);

  const goNextPage = async () => {
    try {
      const responseData = await tmdbAPI.searchByType(Category.MOVIE, {
        page: currentPage + 1,
        query: params.query,
      });
      if (responseData && responseData.results?.length)
        setData([...data, ...responseData?.results]);
      setTotalPage(responseData?.total_pages || 0);
      setResults(responseData?.total_results || 0);
      setCurrentPage(currentPage + 1);
    } catch (error) {
      throw error;
    }
  };

  return (
    <div>
      <div className='relative' style={{ background: `url('${FooterBg}')` }}>
        <div className='absolute bg-gradient-to-t from-black to-black/40 w-full h-full'></div>
        <h2 className='relative text-white text-3xl font-bold pt-28 pb-16 container'>
          {results} results with "{params.query}"
        </h2>
      </div>
      <MovieGrid data={data} category={Category.MOVIE || ""} />
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

export default Search;
