import React, { useEffect, useState } from "react";
import { MovieListType, TvShowListType } from "../utils/types";
import Card from "../components/Card";
import { useAppSelector } from "../utils/hooks";
import { createSearchUrl, useFetch } from "../utils/functions";
import "../styles/SearchResults.css";

function SearchResults() {
  const searchTerm = useAppSelector((state) => state.searchTerm.searchTerm);
  const { data: movieData } = useFetch(createSearchUrl("movie", searchTerm));
  const { data: tvData } = useFetch(createSearchUrl("tv", searchTerm));
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [movieResults, setMovieResults] = useState<any>([]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [tvResults, setTvResults] = useState<any>([]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [searchResults, setSearchResults] = useState<any>([]);
  useEffect(() => {
    setSearchResults([...movieResults, ...tvResults]);
  }, [movieResults, tvResults]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const updatedMovieData = movieData.map((result: any) => {
      return { ...result, type: "movie" };
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const updatedTvData = tvData.map((result: any) => {
      return { ...result, type: "tv" };
    });
    setMovieResults(updatedMovieData);
    setTvResults(updatedTvData);
  }, [movieData, tvData]);
  return (
    <div className="search-result-page">
      <span className="search-status">
        {searchResults.length} results found
      </span>
      <div className="search-results">
        {searchResults.map(
          (result: MovieListType | TvShowListType, index: number) => {
            //TODO:change content type accordingly
            return (
              <Card
                content={result}
                contentType={result.type || "movie"}
                key={index}
                style={{ width: "100%" }}
              />
            );
          }
        )}
      </div>
    </div>
  );
}

export default SearchResults;
