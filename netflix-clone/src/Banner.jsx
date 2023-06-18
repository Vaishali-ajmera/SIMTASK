import React, { useEffect, useState } from 'react';
import "./Banner.css";
import axios from 'axios';
import requests from './Request';
import instance from './axios';

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const url = `${instance.defaults.baseURL}${requests.fetchNetflixOriginals}`;
      const request = await axios.get(url);
      const random = Math.floor(Math.random() * request.data.results.length - 1);
      setMovie(
        request.data.results[
          Math.floor(random)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  console.log(movie);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + '...' : string;
  }

  return (
    <header className='banner'>
      <div
        className="banner__image"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        }}
      ></div>
      <div className="banner__contents">
        <h1 className='banner__title'>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className='banner__button'>Play</button>
          <button className='banner__button'>My List</button>
        </div>
        <h1 className='banner__description'>
          {truncate(movie?.overview, 150)}
        </h1>
      </div>

      <div className="banner--fadeBottom"></div>
    </header>
  );
}

export default Banner;
