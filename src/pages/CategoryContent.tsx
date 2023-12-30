import React from "react";
import Card from "../components/Card";
import { ContentType } from "../utils/enum";
import { API_KEY, useFetch } from "../utils/functions";
import { useAppSelector } from "../utils/hooks";
import "../styles/CategoryContent.css";
import CardSkeleton from "../components/CardSkeleton";

type Props = {
  type: `${ContentType}`;
};

function CategoryContent(props: Props) {
  const { type } = props;
  const { genreId, genreName } = useAppSelector((state) => state.currentGenre);
  const { data, loading } = useFetch(
    `https://api.themoviedb.org/3/discover/${type}?api_key=${API_KEY}&with_genres=${genreId}`
  );

  return (
    <div className="category-content-page">
      <h1 className="heading">{genreName}</h1>
      <section className="category-content">
        {loading
          ? Array.from({ length: 10 }).map((_, index) => (
              <CardSkeleton key={index} />
            ))
          : data.map((content, index) => {
              return (
                <Card
                  content={content}
                  contentType={type}
                  key={index}
                  style={{ width: "100%" }}
                />
              );
            })}
      </section>
    </div>
  );
}

export default CategoryContent;
