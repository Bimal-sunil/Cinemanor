import React from "react";
import { createAPIUrl, useFetch } from "../utils/functions";
import Banner from "../components/Banner";
import { MovieListType } from "../utils/types";
import SubSection from "../components/SubSection";
import { ContentType } from "../utils/enum";

function Home() {
  const defaultContentType = ContentType.Movie;
  const { data } = useFetch(createAPIUrl("Now Playing", defaultContentType));
  const bannerMovies: MovieListType[] = data?.slice(0, 7);

  return (
    <div className="home-page">
      <Banner movieList={bannerMovies} />
      <SubSection category="Now Playing" contentType={defaultContentType} />
      <SubSection category="Trending" contentType={defaultContentType} />
      <SubSection category="Popular" contentType={defaultContentType} />
      <SubSection category="Top Rated" contentType={defaultContentType} />
      <SubSection category="Upcoming" contentType={defaultContentType} />
    </div>
  );
}

export default Home;
