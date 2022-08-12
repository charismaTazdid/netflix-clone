import { combineReducers } from "redux";
import MovieList from './MovieList';
import auth from './Auth';
//auth == authReducer
export default combineReducers({ MovieList, auth });