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
    <div className='flex gap-5 pt-5'>
      {cast?.cast.length &&
        cast?.cast.slice(0, 8).map((item, index) => (
          <div key={index}>
            {" "}
            <figure className={"pb-2"}>
              <img
                src={getImage(item.profile_path || "", "w500")}
                alt={item.name}
                className='rounded-xl'
              />
            </figure>
            <p>{item.name}</p>
          </div>
        ))}
    </div>
  );
};

export default Cast;
