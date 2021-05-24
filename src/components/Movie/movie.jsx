import React from "react";
import MovieSection from "../MovieSection/movieSection";
import Moviemain from "../Moviemain/moviemain";
import Moviemain2 from "../Moviemain/moviemain2";

function Movie({ data, API_DATA, API_DATA2, API_DATA3, API_DATA4 }) {
  const ranNum = Math.floor(Math.random() * 10 + 1);
  const genre = "NETFLIX 인기 콘텐츠";
  const genreA = "NETFLIX 인기 드라마";
  const genreB = "NETFLIX 인기 다큐멘터리";
  const genreC = "NETFLIX 인기 TV 방영물";
  const id = new Date().getTime();

  return (
    <>
      <Moviemain item={data[ranNum]} />
      <MovieSection id={id} data={data} genre={genre} />
      <MovieSection id={id + 1} data={API_DATA} genre={genreA} />
      <MovieSection id={id + 2} data={API_DATA2} genre={genreB} />
      <MovieSection id={id + 3} data={API_DATA3} genre={genreC} />
      <Moviemain2 item={API_DATA3} />
      <MovieSection id={id + 4} data={API_DATA4} genre={genreB} />
      <MovieSection id={id + 5} data={API_DATA3} genre={genreC} />
    </>
  );
}

export default Movie;
