import { combineReducers } from "redux";
import MovieList from './MovieList';
import auth from './Auth';

export default combineReducers({ MovieList, auth });