import axios from "axios";

const url = 'https://netflix-clone-nestjs.herokuapp.com/myList';

export const addToFavourite = (movie) => axios.post(url, movie);

export const getMyFavouriteList = (eamil) => axios.get(`${url}/filter?email=${eamil}`);

export const deleteFromList = (id) => axios.delete(`${url}/${id}`);