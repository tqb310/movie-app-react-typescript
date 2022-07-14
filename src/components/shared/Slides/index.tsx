import React, { useEffect, useState } from "react";
import { IMovie } from "../../../interfaces/Movie";
import * as tmdbAPI from "../../../services/tmdbAPI";
import { MovieType, Category, TvType } from "../../../constants/movie";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import MovieCard from "../MovieCard";
import { ITv } from "../../../interfaces/Tv";

interface SlidesProps {
  title: string;
  catergory: Category;
  type?: MovieType | TvType;
}

const Slides = ({ title, catergory, type }: SlidesProps) => {
  SwiperCore.use([Autoplay, Navigation]);

  const [data, setData] = useState<Array<IMovie | ITv>>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        if (type) {
          if (catergory === Category.MOVIE) {
            const responseData = await tmdbAPI.getMoviesByType(
              type as MovieType,
              { page: 1 }
            );
            if (responseData && responseData.results?.length)
              setData(responseData?.results);
          } else {
            const responseData = await tmdbAPI.getTvByType(type as TvType, {
              page: 1,
            });
            if (responseData && responseData.results?.length)
              setData(responseData?.results);
          }
        } else {
          if (catergory === Category.MOVIE) {
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
    <div className='pb-6'>
      <div className='flex justify-between items-center py-5'>
        <h2 className='text-lg font-bold'>{title}</h2>
        <button className='btn btn-outline-white py-1 rounded-xl text-sm'>
          View more
        </button>
      </div>
      <Swiper
        modules={[Autoplay, Navigation]}
        slidesPerView={6}
        spaceBetween={10}
        loop={true}
        navigation={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        speed={500}
      >
        {data.map((item, index) => (
          <SwiperSlide
            key={index}
            className='py-1 flex flex-col'
            style={{ height: "auto" }}
          >
            <MovieCard {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slides;