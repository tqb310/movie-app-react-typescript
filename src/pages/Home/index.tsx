import React, { useState, useEffect, useRef } from "react";
import * as tmdbApi from "../../services/tmdbAPI";
import { IMovie } from "../../interfaces/Movie";
import { Category, MovieType, TvType } from "../../constants/movie";
import { getImage, getTrailer } from "../../services/axiosClient";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { Modal, ModalContent, ModalTitle } from "../../components/shared/Modal";
import Slides from "../../components/shared/Slides";
import { useNavigate } from "react-router-dom";

const Home = () => {
  SwiperCore.use([Autoplay, Pagination]);
  const navigate = useNavigate();
  const [topRated, setTopRated] = useState<Array<IMovie>>([]);
  const [openModal, setOpenModal] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleCloseModal = () => {
    setOpenModal(false);
    iframeRef.current?.setAttribute("src", "");
  };
  const handleOpenModal = (movieId: string) => async (_: any) => {
    try {
      const video = await tmdbApi.getVideos(Category.MOVIE, movieId);
      if (video && video.results?.length) {
        iframeRef.current?.setAttribute(
          "src",
          getTrailer(video?.results[0].key)
        );
        setOpenModal(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const navigateToDetail = (id: string) => () => {
    navigate("/movie/" + id);
  };
  useEffect(() => {
    const getData = async () => {
      try {
        const topRatedMovie = await tmdbApi.getMoviesByType(MovieType.POPULAR, {
          page: 1,
          language: "en-US",
        });
        if (topRatedMovie && topRatedMovie.results?.length)
          setTopRated(topRatedMovie.results);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <div className='text-white w-full'>
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        speed={1000}
        loop={true}
        slidesPerView={1}
        spaceBetween={0}
        grabCursor
        pagination={{
          type: "bullets",
          enabled: true,
          bulletActiveClass: "bg-red-700",
          bulletClass: "swiper-pagination-bullet swiper-banner-bullet",
          clickable: true,
        }}
        className='w-full'
      >
        {topRated &&
          topRated.length &&
          topRated.map((item, index) => (
            <SwiperSlide key={index} style={{ width: "100%" }}>
              {({ isActive }) => {
                return (
                  <div
                    className={`min-h-screen bg-center bg-cover`}
                    style={{
                      backgroundImage: `url('${getImage(
                        item.backdrop_path || ""
                      )}')`,
                    }}
                  >
                    <div className='bg-gradient-to-t from-black to-black/20 h-full w-full absolute'></div>
                    <div className='relative container pt-28 flex justify-between gap-10'>
                      <div className='mt-32'>
                        <h2
                          className={
                            "text-5xl font-extrabold slideDown-begin " +
                            (isActive ? " slideDown-end delay-200" : "")
                          }
                        >
                          {item.title}
                        </h2>
                        <p
                          className={
                            "mt-10 slideDown-begin" +
                            (isActive ? " slideDown-end delay-[0.4s]" : "")
                          }
                        >
                          {item.overview}
                        </p>
                        <div
                          className={
                            "flex gap-5 mt-10 slideDown-begin" +
                            (isActive ? " slideDown-end delay-[0.6s]" : "")
                          }
                        >
                          <button
                            onClick={navigateToDetail(
                              item.id?.toString() || ""
                            )}
                            className='btn btn-primary font-semibold min-w-[120px]'
                          >
                            Watch now
                          </button>
                          <button
                            className='btn btn-outline-white min-w-[120px]'
                            onClick={handleOpenModal(item.id?.toString() || "")}
                          >
                            Watch trailer
                          </button>
                        </div>
                      </div>
                      <figure
                        className={
                          "shrink-0 scaleUp-begin hidden lg:block " +
                          (isActive ? "scaleUp-end" : "")
                        }
                      >
                        <img
                          src={getImage(item.poster_path || "", "w500")}
                          alt={item.title}
                          width={350}
                          height='auto'
                          className='rounded-xl shadow-[0px_0px_10px_white]'
                        />
                      </figure>
                    </div>
                  </div>
                );
              }}
            </SwiperSlide>
          ))}
      </Swiper>
      <div className='container'>
        <Slides
          title='Trending Movies'
          catergory={Category.MOVIE}
          type={MovieType.TRENDING}
        />
        <Slides
          title='Top Rated Movies'
          catergory={Category.MOVIE}
          type={MovieType.TOP_RATED}
        />
        <Slides
          title='Trending TV Shows'
          catergory={Category.TV}
          type={MovieType.TRENDING}
        />
        <Slides
          title='Top Rated TV Shows'
          catergory={Category.TV}
          type={TvType.TOP_RATED}
        />
      </div>
      <Modal open={openModal} handleClose={handleCloseModal}>
        <ModalTitle className='mb-2 font-semibold'>Trailer</ModalTitle>
        <ModalContent>
          <div className='w-full h-[225px] sm:h-[324px] md:h-[432px] lg:h-[558px]'>
            <iframe
              ref={iframeRef}
              className='w-full h-full object-contain'
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            ></iframe>
          </div>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Home;
