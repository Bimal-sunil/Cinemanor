import React, { useState } from "react";
import SubHeader from "../components/SubHeader";
import "../styles/ContentPage.css";
import { createImageLink, getGenres } from "../utils/functions";
import { useAppSelector } from "../utils/hooks";
import { useParams } from "react-router-dom";

function ContentPage() {
  const { type } = useParams();
  const content = useAppSelector((state) => state.currentSelection.data);
  const [isBannerImageLoading, setIsBannerImageLoading] =
    useState<boolean>(true);
  const [isTitleImageLoading, setIsTitleImageLoading] = useState<boolean>(true);
  if (content !== null) {
    return (
      <div className="content-page">
        <div className="content-main">
          <div
            className={
              isBannerImageLoading
                ? "content-backdrop-loading"
                : "content-backdrop"
            }>
            <img
              src={createImageLink(content.backdrop_path)}
              alt=""
              onLoad={() => setIsBannerImageLoading(false)}
            />
          </div>
          <div className="content-details">
            <div
              className={
                isTitleImageLoading
                  ? "content-poster-loading"
                  : "content-poster"
              }>
              <img
                src={createImageLink(content.poster_path)}
                alt=""
                onLoad={() => setIsTitleImageLoading(false)}
              />
            </div>
            <div className="content-description">
              <span className="content-genre">
                {getGenres(type, content.genre_ids)}
              </span>
              <h1 className="content-title">
                {"title" in content ? content.title : content.name}
              </h1>
              <div className="content-highlights">
                <div className="content-key-highlight-wrap">
                  <div className="content-highlight highlight-header">
                    <i className="uil uil-star"></i>
                    {content.vote_average.toFixed(1)}
                  </div>
                  {content.adult && (
                    <span className="content-highlight highlight-header">
                      18+
                    </span>
                  )}
                </div>
                {content.adult && (
                  <div className="content-highlight highlight-header">18+</div>
                )}
              </div>
              <div className="content-non-highlight">
                <span className="highlight-header">Release Date</span>
                <span className="highlight-text">
                  {"release_date" in content
                    ? content.release_date
                    : content.first_air_date}
                </span>
              </div>
              <div className="content-non-highlight">
                <span className="highlight-header">Original Language</span>
                <span className="highlight-text">
                  {content.original_language}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="content-overview">
          <SubHeader title="Overview" />
          <p className="overview">{content.overview}</p>
        </div>
      </div>
    );
  }
  return <h1 style={{ color: "white" }}>No such file found!!</h1>;
}

export default ContentPage;
