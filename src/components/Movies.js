import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import FontAwesomeIcon from "./FontAwesomeIcon";
import Movie from "./Movie";
import {getTokenId} from "../actions/movieActions";

class Movies extends Component {
  state = {};
  static defaultProps = {
    movies: []
  };
  static propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object)
  };

  componentDidMount() {
    this.props.getMovies("https://api.myjson.com/bins/vcvx0");
    this.props.getTokenId("https://reqres.in/api/login", {
        "email": "peter@klaven",
    })
  }

  render() {
    return (
      <Fragment>
          {/* Help icon extracted to a separate component */}
          <FontAwesomeIcon icon="search" />
        <button onClick={() => {
          console.log('token')
        }}>ACTIVE TOKEN</button>
        {/* the list of movies */}
        <div>
          {this.props.movies.map(movie => (
            <Movie
              key={movie.id}
              name={movie.name}
              poster={movie.poster}
              duration={movie.duration}
              year={movie.year}
            />
          ))}
        </div>
      </Fragment>
    );
  }
}

export default Movies;
