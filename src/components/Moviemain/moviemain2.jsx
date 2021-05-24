import React from "react";
import Loading from "../../pages/loading";
import styles from "./moviemain.module.css";
import { Link } from "react-router-dom";

const Moviemain2 = ({ item }) => {
  const IMAGE_URL = "https://image.tmdb.org/t/p/w1280/";
  const ranNum = Math.floor(Math.random() * 19 + 1);
  if (!item[0]) {
    return <Loading />;
  }
  return (
    <>
      <p className={styles.mainCoverTitle}>NETFLIX 추천 작품</p>
      <main className={styles.movieMain}>
        <div className={styles.movieMainText}>
          <h1>{item[ranNum].name}</h1>
          <p>{item[ranNum].overview}</p>
          <div className={styles.movieMainBtn}>
            <button className={styles.mainBtnPlay}>Play</button>
            <Link
              className={styles.searchLink}
              key={item[ranNum].id}
              to={{
                pathname: `/detail/${item[ranNum].title}`,
                state: {
                  title: `${
                    item[ranNum].title ? item[ranNum].title : item[ranNum].name
                  }`,
                  overview: `${item[ranNum].overview}`,
                  release_date: `${
                    item[ranNum].release_date
                      ? item[ranNum].release_date
                      : item[ranNum].id
                  }`,
                  vote_average: `${item[ranNum].vote_average}`,
                  imgUrl: `${IMAGE_URL}${item[ranNum].backdrop_path}`,
                },
              }}
            >
              <button className={styles.mainBtnReview}>Review</button>
            </Link>
          </div>
        </div>
        <img
          className={styles.movieMainImg}
          src={`${IMAGE_URL}${item[ranNum].backdrop_path}`}
          alt=""
        />
      </main>
    </>
  );
};

export default Moviemain2;
