import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavourite } from '../../../Action/favouriteList';
import styles from './Movie.module.css';
import  CoustomAlert  from './Alert';
import { Alert } from '@mui/material';

const Movie = ({ movie, showTrailer }) => {
    const userData = JSON.parse(localStorage.getItem('profile'));
    const baseUrl = "https://image.tmdb.org/t/p/original/";
    const user = useSelector(state => state?.auth?.authData?.user);
    const [showSuccess, setShowSuccess] = useState(false);
    const [alertOpen, setAlertOpen] = useState(false);

    const dispatch = useDispatch();

    const handleAddToList = (m) => {
        const movieData = {
            name: m.title || m.name,
            posterUrl: baseUrl + m.poster_path,
            releaseDate: m.release_date,
            overview: m.overview,
            userEamil: userData?.user?.email,
            userName: userData?.user?.name
        }
        if (user) {
            dispatch(addToFavourite(movieData));
            setTimeout(() => {
                setShowSuccess(true);
            }, 1000);
            setTimeout(() => {
                setShowSuccess(false)
            }, 2000);
        } else {
            setAlertOpen(true)
        }
    };
    return (
        <>
        {// if user not logged in then we want to show this alert
            alertOpen && 
            <CoustomAlert alertOpen={alertOpen} setAlertOpen={setAlertOpen}/>
        }
            <div className={styles.movieDiv}>
                {
                    showSuccess && 
                    <Alert severity="success"> Successfully Added to your list</Alert>
                }
                <img
                    key={movie.id}
                    onClick={() => showTrailer(movie)}
                    className={styles.rowPosterLarge}
                    src={`${baseUrl}${movie.poster_path}`} alt={movie.name}
                />

                <button className={styles.favBtn} onClick={() => handleAddToList(movie)}> ADD to LIST</button>
            </div>
        </>
    );
};

export default Movie;