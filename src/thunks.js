import axios from 'axios';
import { endpoints } from '../config';
import { setMovieList, setGenreList, addHeart, removeHeart, addLog } from './actions';

export const getPopularMovies = () => (dispatch) => {
  axios
    .get(endpoints.mostPopularMovies())
    .then((res) => dispatch(setMovieList(res.data.results)))
    .catch((error) => console.log(error));
};

export const getGenres = () => (dispatch) => {
  axios
    .get(endpoints.genres())
    .then((res) => dispatch(setGenreList(res.data.genres)))
    .catch((error) => console.log(error));
}

export const getGenreMovies = (id) => (dispatch) => {
   axios
    .get(endpoints.genreMovies(id))
    .then((res) => dispatch(setMovieList(res.data.results)))
    .catch((error) => console.log(error));
};

export const like = (id,hearted) => (dispatch) => {
    dispatch(addHeart(id,hearted));
}

export const dislike = (id,hearted) => (dispatch) => {
    dispatch(removeHeart(id,hearted));
}
