import React, { useEffect } from "react";
import { Category } from "../../constants/movie";
import ICredit from "../../interfaces/Cast";
import { getImage } from "../../services/axiosClient";
import * as tmdbApi from "../../services/tmdbAPI";

const Cast = ({ id, category }: { id: number; category: string }) => {
  const [cast, setCast] = React.useState<ICredit | null>(null);
  useEffect(() => {
    const getData = async () => {
      try {
        if (category === "movie") {
          const responseData = await tmdbApi.getCredit(
            Number(id),
            Category.MOVIE
          );
          if (responseData) setCast(responseData);
        } else {
          const responseData = await tmdbApi.getCredit(Number(id), Category.TV);
          if (responseData) setCast(responseData);
        }
      } catch (error) {
        throw error;
      }
    };
    getData();
  }, []);
  return (
    <div className='grid grid-cols-4 lg:grid-cols-6 gap-5 pt-5'>
      {cast?.cast.length &&
        cast?.cast.slice(0, 12).map((item, index) => (
          <div key={index} className='flex flex-col'>
            {" "}
            <figure className={"pb-2 grow"}>
              <img
                src={getImage(item.profile_path || "", "w500")}
                alt={item.name}
                className='rounded-xl h-full object-cover'
              />
            </figure>
            <p className='min-h-[50px]'>{item.name}</p>
          </div>
        ))}
    </div>
  );
};

export default Cast;
