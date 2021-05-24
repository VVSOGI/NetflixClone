import React from "react";
import styles from "./detail.module.css";

const Detail = (props) => {
  const imported_data = props.location.state;

  return (
    <section className={styles.detail_section}>
      <img src={imported_data.imgUrl} alt={imported_data.title} />
      <img src={imported_data.imgUrl} alt={imported_data.title} />
      <div className={styles.detail_content}>
        <div className={styles.detail_text}>
          <p className={styles.detail_text_fever}>{imported_data.title}</p>
          <p className={styles.detail_text_fever}>{imported_data.overview}</p>
          <div className={styles.detail_text_date}>
            <p className={styles.detail_text_may}>
              {`개봉 날짜 : ${imported_data.release_date}`}
            </p>
            <p className={styles.detail_text_may}>
              평점 :{" "}
              {
                <span
                  className={
                    imported_data.vote_average > 8
                      ? styles.detail_text_average_high
                      : styles.detail_text_average_low
                  }
                >{`${imported_data.vote_average}`}</span>
              }
            </p>
          </div>
        </div>
      </div>
      <div className={styles.movieMainBtn}>
        <button className={styles.mainBtnPlay}>재생</button>
        <button className={styles.mainBtnReview}>찜하기</button>
      </div>
    </section>
  );
};

export default Detail;
