import React from "react";
import styles from "./mvComponent.module.css";
import { Link } from "react-router-dom";

const MvComponent = ({ item }) => {
  const IMAGE_URL = "https://image.tmdb.org/t/p/w1280/";
  return (
    <div className={styles.movieContent}>
      <Link
        key={item.id}
        to={{
          pathname: `/detail/${item.title}`,
          state: {
            title: `${item.title ? item.title : item.name}`,
            overview: `${item.overview}`,
            release_date: `${item.release_date ? item.release_date : item.id}`,
            vote_average: `${item.vote_average}`,
            imgUrl: `${IMAGE_URL}${item.backdrop_path}`,
          },
        }}
      >
        <img
          className={styles.movieUrl}
          src={`${IMAGE_URL}${item.poster_path}`}
          alt={item.title}
        />
        <p className={styles.movieOverview}>{item.overview}</p>
      </Link>
    </div>
  );
};

export default MvComponent;
