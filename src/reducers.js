import { combineReducers } from 'redux';

const initialMovieState = {
  list: [],
};

const initialGenreState = {
  list: [],
}

const initialHeartedList = {
  list: [],
}

const initialLogsList = {
    list: [],
}

const moviesReducer = (state = initialMovieState, action) => {
  switch (action.type) {
    case 'SET_MOVIE_LIST':
      return { ...state, list: action.list };
    default:
      return state;
  }
};

const genresReducer = (state = initialGenreState, action) => {
  switch (action.type) {
    case 'SET_GENRE_LIST':
      return { ...state, list: action.list };
    default:
      return state;
    }
}

const heartedReducer = (state = initialHeartedList, action) => {
  switch (action.type) {
    case 'ADD_TO_HEARTED_LIST':
      return { ...state, list: [ ...state.list, action.id] };
    case 'REMOVE_FROM_HEARTED_LIST':
      return { ...state, list: action.list.filter((currentId) => currentId !== action.id) };
    default:
      return state;
    }
}

const logsReducer = (state = initialLogsList, action) => {
  switch (action.type) {
    case 'ADD_LOG':
      let date = new Date();
      let log = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate() + " " + date.getHours() + ":" +date.getMinutes() + ":" + date.getSeconds() + ": \"" + action.log +"\"";
      console.log(log);
      return { ...state, list: [ ...state.list, log] };
    default:
      return state
    }
}

export default combineReducers({
  movies: moviesReducer,
  genres: genresReducer,
  hearted: heartedReducer,
  logs: logsReducer,
});
