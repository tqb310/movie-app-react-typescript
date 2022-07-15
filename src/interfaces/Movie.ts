import Abstract from "./Abstract";
import IProductionCompany from "./ProductionCompany";

export interface IMovie extends Abstract {
  adult: boolean;
  release_date: string;
  genre_ids: number[];
  original_title: string;
  title: string;
  video: boolean;
  name?: never;
}

export interface IMovieDetail extends IMovie {
  adult: boolean;
  belongs_to_collection: string;
  budget: number;
  genres: { id: number; name: string }[];
  homepage: string | null;
  imdb_id: string | null;
  production_companies: Array<IProductionCompany>;
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
  revenue: number;
  runtime: number | null;
  spoken_languages: {
    iso_639_1: string;
    name: string;
  }[];
  status:
    | "Rumored"
    | "Planned"
    | "In Production"
    | "Post Production"
    | "Released"
    | "Canceled";
  tagline: string;
}
