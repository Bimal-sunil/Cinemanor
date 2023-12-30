import axios from "axios";
import { useEffect, useState } from "react";
import { ContentType } from "./enum";
import { movieGenres, tvGenres } from "./data";

export const API_KEY = "84761b9ce6c7a3392b81197662a2faa3";

export const createImageLink = (link: string) =>
  `https://image.tmdb.org/t/p/original${link}`;

const formatToUrlText = (text: string) => {
  const lowerCaseText = text.toLowerCase();
  const urlText = lowerCaseText.replaceAll(" ", "_");
  return urlText;
};

export const createAPIUrl = (
  category: string,
  contentType: `${ContentType}`
) => {
  const formattedCategory = formatToUrlText(category);
  if (category === "Trending") {
    return `https://api.themoviedb.org/3/trending/${contentType}/day?api_key=${API_KEY}`;
  }
  return `https://api.themoviedb.org/3/${contentType}/${formattedCategory}?api_key=${API_KEY}`;
};

export const createSearchUrl = (type: `${ContentType}`, searchTerm: string) => {
  return `https://api.themoviedb.org/3/search/${type}?api_key=${API_KEY}&query=${searchTerm}`;
};

export const createGenreAPIUrl = (type: `${ContentType}`) => {
  return `https://api.themoviedb.org/3/genre/${type}/list?api_key=${API_KEY}`;
};

export const useFetch = (url: string) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(url);
      setData(response.data.results);
    } catch (err) {
      setError("Error");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [url]);
  return { data, loading, error };
};

export const getGenres = (type: string | undefined, genreIds: number[]) => {
  let genres: typeof movieGenres = [];
  if (type === "movie") {
    genres = movieGenres.filter((genre) => genreIds.includes(genre.id));
  } else if (type === "tv") {
    genres = tvGenres.filter((genre) => genreIds.includes(genre.id));
  }
  const genreNames = genres.map((genre) => genre.name);
  return genreNames.join(" . ");
};
