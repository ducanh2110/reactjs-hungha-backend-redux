import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import FontAwesomeIcon from "./FontAwesomeIcon";
import Movie from "./Movie";

class Movies extends Component {
  state = {};
  static defaultProps = {
    movies: []
  };
  static propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object)
  };

  componentDidMount() {
    this.props.getMovies();
  }

  render() {
    return (
      <Fragment>
          {/* Help icon extracted to a separate component */}
          <FontAwesomeIcon icon="search" />
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
