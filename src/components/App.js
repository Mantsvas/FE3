import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import Genres from './Genres';
import { setMovieList, setGenreList, addLog } from '../actions';
import { getPopularMovies, getGenres, getGenreMovies, like, dislike } from '../thunks';

class App extends React.Component {


  componentDidMount() {
    const { onGetPopularMovies, onGetGenres, onSetLogList, logList } = this.props;
    onGetGenres();
    onGetPopularMovies();
    onSetLogList(logList,"Aplikacija užkrauta");
  }

  render() {
    const { movies, genres, hearted, onGetGenreMovies, onLike, onDislike, logs, onSetLogList } = this.props;

    return (
      <React.Fragment>
        <Genres genres={genres}
            logs={logs}
            addLog={onSetLogList}
            onChangeList={onGetGenreMovies} />

        <div className="cards">
          {movies.map((movie) => (
            <Card
              key={movie.id}
              isHearted={hearted.includes(movie.id)}
              onAddHeart={() => onLike(movie.id,hearted)}
              onRemoveHeart={() => onDislike(movie.id,hearted)}
              addLogLike={() => onSetLogList(logs,"Uždėta širdelė filmui " + movie.original_title)}
              addLogDislike={() => onSetLogList(logs,"Nuimta širdelė filmui " + movie.original_title)}
              movie={movie}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default connect(
  (state) => {
    return {
      movies: state.movies.list,
      genres: state.genres.list,
      hearted: state.hearted.list,
      logs: state.logs.list,
    };
  },
  (dispatch) => {
    return {
      onGetPopularMovies: () => dispatch(getPopularMovies()),
      onSetMovieList: (movieList) => dispatch(setMovieList(movieList)),
      onGetGenres: () => dispatch(getGenres()),
      onSetGenreList: (genreList) => dispatch(setGenreList(genreList)),
      onGetGenreMovies: (id) => dispatch(getGenreMovies(id)),
      onLike: (id, hearted) => dispatch(like(id,hearted)),
      onDislike: (id, hearted) => dispatch(dislike(id,hearted)),
      onSetLogList: (logList,log) => dispatch(addLog(logList,log)),
    };
  }
)(App);
