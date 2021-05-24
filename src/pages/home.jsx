import React, { useState, useEffect } from "react";
import Movie from "../components/Movie/movie";
import Loading from "./loading";

function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [API_DATA, setAPI_DATA] = useState([]);
  const [API_DATA2, setAPI_DATA2] = useState([]);
  const [API_DATA3, setAPI_DATA3] = useState([]);
  const [API_DATA4, setAPI_DATA4] = useState([]);
  const [API_DATA5, setAPI_DATA5] = useState([]);

  let num = Math.floor(Math.random() * 10) + 1;

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=ko&page=${num}`
    )
      .then((response) => response.json())
      .then((item) => {
        setData(item.results);
        if (data) {
          setLoading(false);
        }
      })
      .catch((error) => {
        error = "error!";
        console.log(error);
      });
  }, []);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_API_KEY}&language=ko&page=1&genre-ids=18`
    )
      .then((response) => response.json())
      .then((item) => {
        setAPI_DATA(item.results);
      })
      .catch((error) => {
        error = "you need to repair";
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const randomPage = Math.floor(Math.random() * 20 + 1);
    const randomPage1 = Math.floor(Math.random() * 20 + 1);
    const randomPage2 = Math.floor(Math.random() * 20 + 1);

    fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_API_KEY}&language=ko&page=${randomPage1}`
    )
      .then((response) => response.json())
      .then((item) => {
        setAPI_DATA2(item.results);
      })
      .catch((error) => {
        error = "you need to repair";
        console.log(error);
      });

    fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_API_KEY}&language=ko&page=${randomPage}`
    )
      .then((response) => response.json())
      .then((item) => {
        setAPI_DATA3(item.results);
      })
      .catch((error) => {
        error = "you need to repair";
        console.log(error);
      });

    fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_API_KEY}&language=ko&page=${randomPage2}`
    )
      .then((response) => response.json())
      .then((item) => {
        setAPI_DATA4(item.results);
      })
      .catch((error) => {
        error = "you need to repair";
        console.log(error);
      });
  }, []);
  if (loading) {
    return (
      <>
        <Loading />
      </>
    );
  } else {
    return (
      <>
        <Movie
          key={data.id}
          data={data}
          API_DATA={API_DATA}
          API_DATA2={API_DATA2}
          API_DATA3={API_DATA3}
          API_DATA4={API_DATA4}
        />
      </>
    );
  }
}

export default Home;
