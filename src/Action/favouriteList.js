import * as API from '../api'
import { ADD, REMOVE, FETCH_MY_LIST } from '../constants/actionTypes'

export const addToFavourite = movie => async dispatch => {
  try {
    const { data } = await API.addToFavourite(movie);
    dispatch({ type: ADD, payload: data });
  } catch (error) {
    console.log(error);
  };
};

export const getMyFavouriteList = (email) => async dispatch => {
  try {
    const { data } = await API.getMyFavouriteList(email);
    dispatch({ type: FETCH_MY_LIST, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteFromList = (id) => async dispatch => {
  try {
    await API.deleteFromList(id);
    dispatch({ type: REMOVE, payload: id });
  } catch (error) {
    console.log(error);
  }
};