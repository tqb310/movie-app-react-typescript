import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Category } from "../../constants/movie";
import IDataList from "../../interfaces/DataList";
import { IMovieDetail } from "../../interfaces/Movie";
import { ITvDetail } from "../../interfaces/Tv";
import IVideo from "../../interfaces/Video";
import {
  getEmbededMovie,
  getImage,
  getTrailer,
} from "../../services/axiosClient";
import * as tmdbAPI from "../../services/tmdbAPI";
import Cast from "./Cast";

const TvShow = () => {
  const params = useParams();
  const [detail, setDetail] = React.useState<IMovieDetail | ITvDetail | null>(
    null
  );
  const [video, setVideo] = React.useState<IDataList<IVideo> | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        if (params.category === "movie") {
          const responseData = await tmdbAPI.getDetail<IMovieDetail>(
            Number(params.typeOrId),
            Category.MOVIE,
            {}
          );
          const video = await tmdbAPI.getVideos(
            Category.MOVIE,
            params.typeOrId || ""
          );
          if (responseData) setDetail(responseData);
          if (video) setVideo(video);
        } else {
          const responseData = await tmdbAPI.getDetail<ITvDetail>(
            Number(params.typeOrId),
            Category.TV,
            {}
          );
          const video = await tmdbAPI.getVideos(
            Category.TV,
            params.typeOrId || ""
          );
          if (responseData) setDetail(responseData);
          if (video) setVideo(video);
        }
      } catch (error) {
        throw error;
      }
    };
    getData();
  });
  if (!detail) return <div></div>;
  return (
    <div>
      <div
        className='min-h-screen w-full bg-center bg-cover'
        style={{
          backgroundImage: `url('${getImage(detail.backdrop_path || "")}')`,
        }}
      >
        <div className='bg-detailBackdrop h-full w-full absolute'></div>
        <div className='relative container pt-52 flex gap-10'>
          <figure className={"shrink-0 "}>
            <img
              src={getImage(detail.poster_path || "", "w500")}
              alt={detail.title || detail.name}
              width={350}
              height='auto'
              className='rounded-xl'
            />
          </figure>
          <div className='text-white'>
            <h2 className='text-6xl font-black pb-10'>
              {detail.title || detail.name}
            </h2>
            <ul className='flex gap-10 items-center pb-5'>
              {detail.genres.length &&
                detail.genres.map((item, index) => (
                  <li
                    key={index}
                    className='border-2 border-white rounded-2xl py-[2px] px-3'
                  >
                    {item.name}
                  </li>
                ))}
            </ul>
            <p className='pb-5'>{detail.overview}</p>
            <h3 className='text-xl font-bold'>Casts</h3>
            <Cast
              id={Number(params.typeOrId) || 0}
              category={params.category || ""}
            />
          </div>
        </div>
      </div>
      <div className='text-white container p-16'>
        <h2 className='text-2xl font-bold text-center pb-10'>Trailer</h2>
        <iframe
          src={getEmbededMovie(Number(params.typeOrId))}
          frameBorder='0'
          width={900}
          height={506.25}
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          title='YouTube video player'
          className='mx-auto'
        ></iframe>
        <h2 className='text-2xl font-bold text-center pb-10'>Trailer</h2>
        <iframe
          src={getTrailer(video?.results?.[0].key || "")}
          frameBorder='0'
          width={900}
          height={506.25}
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          title='YouTube video player'
          className='mx-auto'
        ></iframe>
      </div>
    </div>
  );
};

export default TvShow;
