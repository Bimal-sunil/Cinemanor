import React, { useRef, useState } from "react";
import { createImageLink, getGenres } from "../utils/functions";
import { MovieListType, TvShowListType } from "../utils/types";
import { useNavigate } from "react-router-dom";
import { ContentType } from "../utils/enum";
import { useAppDispatch } from "../utils/hooks";
import { updateCurrentSelection } from "../redux/slices/currentSelectionSlice";
import "../styles/Card.css";

type Props = {
  content: MovieListType | TvShowListType;
  contentType: `${ContentType}`;
  style?: React.CSSProperties;
};

function Card(props: Props) {
  const { content, contentType, style } = props;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isImageLoading, setIsImageLoading] = useState<boolean>(true);
  const cardDetailsRef = useRef<HTMLDivElement>(null);
  const handleHoverState = () => {
    cardDetailsRef?.current?.classList.toggle("active");
  };
  const handleClickEvent = () => {
    dispatch(updateCurrentSelection(content));
    navigate(`/video/${contentType}/${content.id}`);
  };

  return (
    <div
      className="movie-card"
      onMouseEnter={handleHoverState}
      onMouseLeave={handleHoverState}
      onClick={handleClickEvent}
      style={style}>
      <div
        className={
          isImageLoading ? "card-image-loading" : "card-image-container"
        }>
        <img
          src={createImageLink(content.poster_path)}
          alt=""
          onLoad={() => setIsImageLoading(false)}
        />
      </div>
      <div className="movie-details" ref={cardDetailsRef}>
        <div className="details-left">
          <span className="movie-card-title">
            {"title" in content ? content.title : content.name}
          </span>
          <span className="movie-card-genres">
            {getGenres(contentType, content.genre_ids)}
          </span>
        </div>
        <div className="details-right">
          <i className="uil uil-star"></i>
          {content.vote_average.toFixed(1)}
        </div>
      </div>
    </div>
  );
}

export default Card;
