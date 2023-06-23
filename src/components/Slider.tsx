import React, { useRef, useState, useEffect } from "react";
import { createLink } from "../utils/linkGenerate";
import "../styles/Slider.css";

type Props = {
  moviesList: string[];
};

function Slider(props: Props) {
  const { moviesList } = props;
  const slideArea: number = 96 / 5 + 1;
  const [translate, setTranslate] = useState(slideArea);
  const [currentIndex, setCurrentIndex] = useState<number>(5);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleNextCard = () => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${translate.toFixed(
        1
      )}%)`;
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setTranslate((prevTranslate) => prevTranslate + slideArea);
    }
  };
  const handlePrevCard = () => {
    const prevTranslate = -(translate - 2 * slideArea).toFixed(1);
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(${prevTranslate}%)`;
      setCurrentIndex((prevIndex) => prevIndex - 1);
      setTranslate((prevTranslate) => prevTranslate - slideArea);
    }
  };
  return (
    <div className="slider-component">
      <div
        className={
          currentIndex > 5
            ? "left-arrow-backdrop active"
            : "left-arrow-backdrop "
        }>
        <i
          className="uil uil-arrow-circle-left left-arrow"
          onClick={() => handlePrevCard()}></i>
      </div>
      <div className="card-slider" ref={sliderRef}>
        {moviesList.map((posterPath, index) => (
          <div className="movie-card">
            <img src={createLink(posterPath)} key={index} alt="" />
          </div>
        ))}
      </div>
      <div
        className={
          currentIndex < moviesList.length
            ? "right-arrow-backdrop active"
            : "right-arrow-backdrop "
        }>
        <i
          className="uil uil-arrow-circle-right right-arrow"
          onClick={() => handleNextCard()}></i>
      </div>
    </div>
  );
}

export default Slider;
