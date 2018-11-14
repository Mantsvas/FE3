import React from 'react';
import axios from 'axios';
import { endpoints } from '../../config';
import { setMovieList } from '../actions';
import { getGenreMovies } from '../thunks';

export default class Genres extends React.Component {

  render() {
    const { genres, onChangeList, addLog, logs } = this.props;

    return (
      <div className="genres">
        {genres.map((genre) => (
          <div key={genre.id} className="genre" onClick={() => { onChangeList(genre.id); addLog(logs,"Žanras pakeistas į " + genre.name)}}>
            {genre.name}
          </div>
        ))}
      </div>
    );
  }
}
