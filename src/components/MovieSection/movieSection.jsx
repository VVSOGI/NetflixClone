import React from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import styles from "./movieSection.module.css";
import MvComponent from "../MovieComponent/mvComponent";
import Loading from "../../pages/loading";

const MovieSection = ({ data, genre, id }) => {
  let num = 0;

  const rightScroll = () => {
    const movieCon = document.getElementById(`${id}`);
    let localNum = -700;
    num += localNum;
    movieCon.style.transform = `translateX(${num}px)`;

    if (num < -3500) {
      num = 900;
    }
  };

  const leftScroll = () => {
    const movieCon = document.getElementById(`${id}`);
    let localNum = 700;
    num += localNum;
    movieCon.style.transform = `translateX(${num}px)`;

    if (num > 600) {
      num = -4000;
    }
  };

  if (!data && !genre && !id) {
    return <Loading />;
  } else
    return (
      <section className={styles.movieSection}>
        <span>{genre}</span>
        <AiFillCaretLeft onClick={leftScroll} className={styles.lBtn} />
        <AiFillCaretRight onClick={rightScroll} className={styles.rBtn} />
        <ul id={`${id}`} className={styles.movieContainer}>
          {data.map((item) => {
            return <MvComponent key={item.id} item={item} />;
          })}
        </ul>
      </section>
    );
};

export default MovieSection;
