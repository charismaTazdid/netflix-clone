import { FETCH_MY_LIST, ADD, REMOVE, } from '../constants/actionTypes';

const MovieList = (myList = [], action) => {
  switch (action.type) {
    case FETCH_MY_LIST:
      return action.payload;
    case ADD:
      return [...myList, action.payload];
    case REMOVE:
      return myList.filter((movie) => movie._id !== action.payload);
    default:
      return myList;
  }
};

export default MovieList;