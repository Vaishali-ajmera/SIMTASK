import React, { useEffect, useState } from 'react';
import instance from './axios';
import "./Row.css";
import axios from 'axios';
import Youtube from "react-youtube";
import movieTrailer from 'movie-trailer';

function Row({ title, fetchUrl, isLargeRow = false }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    const base_url = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {
        async function fetchData() {
            const url = `${instance.defaults.baseURL}${fetchUrl}`;
            const request = await axios.get(url);

            setMovies(request.data.results);

            return request;
        }

        fetchData();
    }, [fetchUrl]);

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('');
        } else {
            movieTrailer(movie?.name || "")
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search);

                    setTrailerUrl(urlParams.get('v'));
                })
                .catch((error) => console.log(error));
        }
    };

    return (
        <div className='row'>
            <h2>{title}</h2>

            <div className="row__posters">
                {movies.map((movie) => (
                    ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (
                        <img
                            onClick={() => handleClick(movie)}
                            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                            key={movie.id}
                            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                            alt={movie.name}
                        />

                    )
                   
                ))}
        </div>

            { trailerUrl && <Youtube opts={opts} videoId={trailerUrl} origin={"http://localhost:5173"} /> }
        </div >
    );
}

export default Row;
