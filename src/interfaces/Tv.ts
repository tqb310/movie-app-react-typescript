import Abstract from "./Abstract";
import IProductionCompany from "./ProductionCompany";

export interface ITv extends Abstract {
  first_air_date: string;
  origin_country: Array<string>;
  genre_ids: Array<number>;
  name: string;
  original_name: string;
}

export interface ITvDetail extends ITv {
  episode_run_time: Array<number>;
  genres: { id: number; name: string }[];
  homepage: string;
  in_production: boolean;
  languages: Array<string>;
  last_air_date: string;
  last_episode_to_air: LastEpisodeToAir;
  next_episode_to_air: string | null;
  networks: {
    name: string;
    id: number;
    logo_path: string | null;
    origin_country: string;
  }[];
  number_of_episodes: number;
  number_of_seasons: number;
  production_companies: Array<IProductionCompany>;
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
  seasons: Array<Season>;
  spoken_languages: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
  status: string;
  tagline: string;
  type: string;
}

interface LastEpisodeToAir {
  air_date: string;
  episode_number: number;
  id: number;
  name: string;
  overview: string;
  production_code: string;
  season_number: number;
  still_path: string | null;
  vote_average: number;
  vote_count: number;
}

interface Season {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: string;
}
