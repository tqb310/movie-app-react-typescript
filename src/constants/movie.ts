export enum Category {
  MOVIE = "movie",
  TV = "tv",
  ALL = "all",
}

export enum MovieType {
  UPCOMING = "upcoming",
  POPULAR = "popular",
  TOP_RATED = "top_rated",
  TRENDING = "trending",
}

export enum TvType {
  ON_THE_AIR = "on_the_air",
  POPULAR = "popular",
  TOP_RATED = "top_rated",
  TRENDING = "trending",
}

export const displayedLabel = (key: string) => {
  switch (key) {
    case "movie":
      return "Movies";
    case "tv":
      return "TV Shows";
    case "upcoming":
      return "Upcoming";
    case "top_rated":
      return "Top Rated";
    case "on_the_air":
      return "On The Air";
    case "popular":
      return "Popular";
    case "trending":
      return "Trending";
    default:
      return "";
  }
};
