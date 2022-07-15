import React, { memo } from "react";
import { getImage } from "../../../services/axiosClient";
import { IMovie } from "../../../interfaces/Movie";
import { ITv } from "../../../interfaces/Tv";
import { PlayIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import { Category, MovieType, TvType } from "../../../constants/movie";

type MovieProps = IMovie & {
  title: string;
  name?: never;
  category: Category;
};
type TvProps = ITv & {
  title?: never;
  name: string;
  category: Category;
};
type MovieCardProps = MovieProps | TvProps;

const MovieCard = <T extends MovieCardProps>(props: T) => {
  return (
    <Link
      to={`/${props.category}/${props.id}`}
      className='relative py-1 flex flex-col h-full group cursor-pointer text-white'
    >
      <PlayIcon className='hidden group-hover:block absolute h-20 w-h-20 z-30 top-1/3 left-1/2 -translate-x-1/2' />
      <figure
        className='relative rounded-xl h-full mb-2 overflow-hidden group-hover:after:bg-black/50 group-hover:after:absolute group-hover:after:w-full 
      group-hover:after:h-full group-hover:after:z-10 group-hover:after:top-0 after:transition-all after:duration-300'
      >
        <img
          src={getImage(props.poster_path || "", "w500")}
          alt={props.title || props.name}
          style={{ height: "100%" }}
          className='shadow-[0px_0px_5px] shadow-white/20 duration-1000 group-hover:scale-125'
        />
      </figure>
      <p className='min-h-[45px] font-bold text-sm group-hover:text-red-400 duration-200'>
        {props.title || props.name}
      </p>
    </Link>
  );
};

export default memo(MovieCard);
