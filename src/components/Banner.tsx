import React, { useEffect, useState } from "react";
import { MovieListType, TvShowListType } from "../utils/types";
import { createImageLink, getGenres } from "../utils/functions";
import "../styles/Banner.css";
import { ContentType } from "../utils/enum";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../utils/hooks";
import { updateCurrentSelection } from "../redux/slices/currentSelectionSlice";

type Props = {
  movieList?: MovieListType[];
  tvShowList?: TvShowListType[];
};

function Banner(props: Props) {
  const { movieList, tvShowList } = props;
  const inputList = movieList ? movieList : tvShowList;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isImageLoading, setIsImageLoading] = useState<boolean>(true);
  const contentType: `${ContentType}` = movieList ? "movie" : "tv";
  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };
  const handleBannerClick = (item: MovieListType | TvShowListType) => {
    dispatch(updateCurrentSelection(item));
    navigate(`/video/${contentType}/${item.id}`);
  };
  const handleArrowClick = (direction: string) => {
    if (direction === "prev") {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    } else {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  useEffect(() => {
    const slideShow = setInterval(() => {
      if (currentIndex === 6) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    }, 10000);
    return () => {
      clearInterval(slideShow);
    };
  }, [currentIndex]);

  return (
    <div>
      <div className="banner">
        <i
          className="uil uil-arrow-circle-left banner-arrow"
          onClick={() => handleArrowClick("prev")}
          style={currentIndex === 0 ? { display: "none" } : {}}></i>
        {inputList?.map((item, index) => (
          <div
            className={
              index === currentIndex ? "banner-div active" : "banner-div"
            }
            key={index}
            onClick={() => index === currentIndex && handleBannerClick(item)}>
            <div
              className={
                isImageLoading
                  ? "banner-img-loading-container"
                  : "banner-img-container"
              }>
              <img
                src={createImageLink(item.backdrop_path)}
                alt=""
                className="banner-img"
                onLoad={() => setIsImageLoading(false)}
              />
            </div>
            <div className="banner-description">
              <div className="banner-key-details">
                <div className="banner-key">
                  <i className="uil uil-star"></i>
                  {item.vote_average.toFixed(1)}
                </div>
                {item.adult && <span className="banner-key">18+</span>}
              </div>
              <span className="banner-genre">
                {getGenres(contentType, item.genre_ids)}
              </span>
              <h1 className="banner-title">
                {"title" in item ? item.title : item.name}
              </h1>
              <p className="banner-details">{item.overview}</p>
            </div>
          </div>
        ))}
        <div className="nav-highlight-container">
          {inputList?.map((_, index) => (
            <div
              className={
                index === currentIndex
                  ? "nav-highlight active"
                  : "nav-highlight"
              }
              key={index}
              onClick={() => handleDotClick(index)}></div>
          ))}
        </div>
        <i
          className="uil uil-arrow-circle-right banner-arrow"
          onClick={() => handleArrowClick("next")}
          style={currentIndex === 6 ? { display: "none" } : {}}></i>
      </div>
    </div>
  );
}

export default Banner;
