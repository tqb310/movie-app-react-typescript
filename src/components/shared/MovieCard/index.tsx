import React from "react";
import { getImage } from "../../../services/axiosClient";
import { IMovie } from "../../../interfaces/Movie";
import { ITv } from "../../../interfaces/Tv";

type MovieProps = IMovie & {
  title: string;
  name?: never;
};
type TvProps = ITv & {
  title?: never;
  name: string;
};
type MovieCardProps = MovieProps | TvProps;

const MovieCard = <T extends MovieCardProps>(props: T) => {
  return (
    <>
      <figure className='h-full mb-2'>
        <img
          src={getImage(props.poster_path || "", "w500")}
          alt={props.title || props.name}
          style={{ height: "100%" }}
          className='rounded-xl shadow-[0px_0px_5px] shadow-white/20'
        />
      </figure>
      <p className='min-h-[45px] font-bold text-sm'>
        {props.title || props.name}
      </p>
    </>
  );
};

export default MovieCard;
