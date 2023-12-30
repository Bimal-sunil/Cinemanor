import React from "react";
import Banner from "../components/Banner";
import SubSection from "../components/SubSection";
import { ContentType } from "../utils/enum";
import { TvShowListType } from "../utils/types";
import { createAPIUrl, useFetch } from "../utils/functions";

function Tv() {
  const defaultContentType = ContentType.Tv;
  const { data } = useFetch(createAPIUrl("On The Air", defaultContentType));
  const bannerTvShows: TvShowListType[] = data?.slice(0, 7);
  return (
    <div className="home-page">
      <Banner tvShowList={bannerTvShows} />
      <SubSection category="On The Air" contentType={defaultContentType} />
      <SubSection category="Trending" contentType={defaultContentType} />
      <SubSection category="Popular" contentType={defaultContentType} />
      <SubSection category="Top Rated" contentType={defaultContentType} />
      <SubSection category="Airing Today" contentType={defaultContentType} />
    </div>
  );
}

export default Tv;
