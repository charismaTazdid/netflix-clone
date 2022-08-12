import React, { useState, useEffect } from 'react';
import axios from '../../axious';
import requests from '../../dataUrl';
import styles from './TopBanner.module.css';
import { useNavigate } from 'react-router-dom';

const TobBanner = () => {
    const [movie, setMovie] = useState([]);
    const [palyMovie, setPlayMovie] = useState(false);

    const navaigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.tranding);
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ]);
            return request;
        }
        fetchData();
    }, []);

    function textResizer(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    };
    const handlePlayMovie = () => {
        setPlayMovie(true);

        setTimeout(() => {
            setPlayMovie(false)
        }, 2000);
    };


    return (
        <header className={styles.banner}
            style={{
                backgroundSize: 'cover',
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: 'center',
                objectFit: 'contain'
            }}>

            <div className={styles.bannerContainer}>

                <h1 className={styles.bannerTitle}>{movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className={styles.bannerBtn}>
                    <button className={styles.btn} onClick={handlePlayMovie} >Play Movie</button>
                    <button onClick={() => navaigate('/favourite')} className={styles.btn}>My List</button>
                </div>
                <h1 className={styles.bannerDescription}>
                    {
                        textResizer(movie?.overview, 160)
                    }
                </h1>
            </div>
            {
                palyMovie &&
                <div className={styles.playMovieContainer}>
                    <div className={styles.playMovie}>
                        <h4>Thsi feture comming sooon...</h4>
                        <h2>Lazy Developer Sleeping Now...</h2>
                    </div>
                </div>
            }
            <div className={styles.bannerFadeBtm}>

            </div>
        </header>
    );
};

export default TobBanner;