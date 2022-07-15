import React, { memo } from "react";
import { Category } from "../../../constants/movie";
import { IMovie } from "../../../interfaces/Movie";
import { ITv } from "../../../interfaces/Tv";
import MovieCard from "../MovieCard";

interface MovieGridProps {
  data: Array<IMovie | ITv>;
  category: string;
}

const MovieGrid = ({ data, category }: MovieGridProps) => {
  return (
    <div className='grid grid-cols-fluid gap-5 container'>
      {data.length &&
        data.map((item, index) => (
          <MovieCard key={index} {...item} category={category as Category} />
        ))}
    </div>
  );
};

export default memo(MovieGrid);
