import React, { useEffect, useState, useRef } from "react";
import styles from "./search.module.css";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

const Search = ({}) => {
  const [search, setSearch] = useState([]);
  const [searchText, setSearchText] = useState("avengers");
  const IMAGE_URL = "https://image.tmdb.org/t/p/w1280/";
  const searchRef = useRef();
  console.log(search);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=ko&query=${searchText}&page=1`
    )
      .then((response) => response.json())
      .then((data) => setSearch(data.results));
  }, [searchText]);

  const handleDefault = (e) => {
    e.preventDefault();
  };

  const inputValue = (e) => {
    setSearchText(`${e.target.value ? e.target.value : "avengers"}`);
  };

  const relatedSearchItem = (e) => {
    console.log(e.target.innerText);
    searchRef.current.value = e.target.innerText;
    setSearchText(e.target.innerText);
  };

  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchFormContent}>
        <form className={styles.searchForm} onClick={handleDefault}>
          <input
            className={styles.searchInput}
            type="text"
            onChange={inputValue}
            ref={searchRef}
          />
          <button className={styles.searchIcons}>
            <AiOutlineSearch />
          </button>
        </form>
        <div className={styles.RelatedSearch}>
          {search.map((item) => {
            return (
              <p
                key={item.id}
                className={styles.relatedSearchText}
                onClick={relatedSearchItem}
              >
                {item.title}
              </p>
            );
          })}
        </div>
      </div>
      <div className={styles.searchContent}>
        {search.map((item) => {
          return (
            <div className={styles.searchMain} key={item.id}>
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
                <img src={`${IMAGE_URL}${item.poster_path}`} alt="" />
              </Link>
              <p>{item.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Search;
