import { createAction } from "redux-actions";
import { normalize, schema } from "normalizr";
import { API, SET_MOVIES } from "../constants/actionTypes";
import { apiPayloadCreator } from "../utils/appUtils";

const getMoviesAC = createAction(API, apiPayloadCreator);
export const getMovies = () =>
  getMoviesAC({ url: "/vcvx0", onSuccess: setMovies });

//this function will be called upon a successful data fetch  - and passed the retrieved data.
function setMovies(movies) {
  //data returned from the server is an array of objects
  //we gotta normalize this data before sending it off to the reducers.
  const movieSchema = new schema.Entity("movies");
  const movieListSchema = new schema.Array(movieSchema);
  //in computer programming, a schema is the organization or structire for a database.
  const normalizedData = normalize(movies, movieListSchema);
  return {
    type: SET_MOVIES,
    payload: normalizedData.entities.movies
  };
}
