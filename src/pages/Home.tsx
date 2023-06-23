import { useEffect, useRef, useState } from "react";
import "../styles/Home.css";
import SubHeader from "../components/SubHeader";
import { createLink } from "../utils/linkGenerate";
import Slider from "../components/Slider";
import axios from "axios";
import { clearInterval } from "timers";

function Home() {
  const bannerRef = useRef<HTMLDivElement>(null);
//   const timer = useRef<NodeJS.Timeout | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [movieList, setMovieList] = useState<any[]>();

  const bannerMovies: any[] =
    movieList !== undefined ? movieList.slice(0, 7) : [];

  const handleBannerChange = () => {
    // const interval = setInterval(
    //   () =>
    //     setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerMovies.length),
    //   1000
    // );
    // timer.current = interval;
  };

  const resetTimer = () => {
    // if (timer.current) clearInterval(timer.current);
    handleBannerChange();
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/popular?api_key=84761b9ce6c7a3392b81197662a2faa3"
        );
        setMovieList(response.data.results);
      } catch (err: any) {
        console.error(err);
      }
    };
    getData();
    return () => {
      setMovieList([]);
    };
  }, []);

//   useEffect(() => {
//     if (timer.current) clearInterval(timer.current);
//     handleBannerChange();
//     return () => {
//       if (timer.current) {
//         clearInterval(timer.current);
//       }
//     };
//   }, []);

  useEffect(() => {

    resetTimer();
  }, [currentIndex]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    resetTimer();
  };

  return (
    <div className="home-page">
      <div className="banner" ref={bannerRef}>
        {bannerMovies?.map((movie, index) => (
          <div
            className={
              index === currentIndex ? "banner-div active" : "banner-div"
            }
            key={index}>
            <img
              src={createLink(movie.backdrop_path)}
              alt=""
              className="banner-img"
            />
            <div className="banner-description">
              <span className="movie-genre">
                Action . Adventure . Animation . Science Fiction
              </span>
              <h1 className="movie-title">{movie.title}</h1>
              <p className="movie-details">{movie.overview}</p>
            </div>
          </div>
        ))}
        <div className="nav-highlight-container">
          {bannerMovies?.map((_, index) => (
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
      </div>
      <SubHeader title="Popular" />
      <Slider
        moviesList={
          movieList !== undefined
            ? movieList.map((movie, index) => movie.poster_path)
            : []
        }
      />
    </div>
  );
}

export default Home;
