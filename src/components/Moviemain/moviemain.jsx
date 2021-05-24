import React from "react";
import styles from "./moviemain.module.css";
import { Link } from "react-router-dom";

const Moviemain = ({ item }) => {
  const IMAGE_URL = "https://image.tmdb.org/t/p/w1280/";

  return (
    <main className={styles.movieMain}>
      <div className={styles.movieMainText}>
        <h1>{item.title}</h1>
        <p>{item.overview}</p>
        <div className={styles.movieMainBtn}>
          <button className={styles.mainBtnPlay}>Play</button>
          <Link
            className={styles.searchLink}
            key={item.id}
            to={{
              pathname: `/detail/${item.title}`,
              state: {
                title: `${item.title ? item.title : item.name}`,
                overview: `${item.overview}`,
                release_date: `${
                  item.release_date ? item.release_date : item.id
                }`,
                vote_average: `${item.vote_average}`,
                imgUrl: `${IMAGE_URL}${item.backdrop_path}`,
              },
            }}
          >
            <button className={styles.mainBtnReview}>Review</button>
          </Link>
        </div>
      </div>
      <img
        className={styles.movieMainImg}
        src={`${IMAGE_URL}${item.backdrop_path}`}
        alt=""
      />
    </main>
  );
};

export default Moviemain;
