import React, { useEffect, useState } from 'react';
import axios from '../../utils/axios';
import styles from './Movies.module.css';
import YouTube from 'react-youtube';
import movieTrailer from "movie-trailer";
import Movie from './Movie/Movie';

const Movies = ({ title, fecthUrl }) => {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("")
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fecthUrl);
            setMovies(request.data.results);
            return request;
        };
        fetchData();

    }, [fecthUrl]);
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        }
    };
    const showTrailer = (movie) => {
        if (trailerUrl) {
            setTrailerUrl("");
        } else {
            movieTrailer(movie?.name || "")
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search)
                    setTrailerUrl(urlParams.get("v"));
                })
                .catch((error) => {
                    // console.log(error)
                });
        }
    };
    return (
        <div className={styles.row}>
            <h2>{title} </h2>
            <div className={styles.rowposters}>
                {
                    movies.map(movie =>
                        <Movie movie={movie} showTrailer={showTrailer} key={movie.id} />
                    )
                }
            </div>
            {
                trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />
            }
        </div>
    );
};

export default Movies;