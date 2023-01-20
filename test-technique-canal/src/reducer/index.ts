import { loadingBarReducer as loadingBar } from 'react-redux-loading-bar';
import movie from './movie.reducer';
import movies from './movies.reducer';

const rootReducer = {
  movie,
  movies,
  loadingBar,
};

export default rootReducer;
