import React, { useRef, useState } from "react";
import { createAPIUrl, useFetch } from "../utils/functions";
import "../styles/Slider.css";
import Card from "./Card";
import { ContentType } from "../utils/enum";

type Props = {
  /**Category name */
  category: string;

  /**Type of content fetching */
  contentType: `${ContentType}`;
};

function Slider(props: Props) {
  const { category, contentType } = props;
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

  const url = createAPIUrl(category, contentType);
  const { data } = useFetch(url);

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
        {data.map((movie, index) => (
          <Card content={movie} key={index} contentType={contentType} />
        ))}
      </div>
      <div
        className={
          currentIndex < data.length
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
