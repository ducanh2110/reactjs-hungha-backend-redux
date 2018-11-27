import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import Movies from "../components/Movies";
import { getMovies } from "../actions/movieActions";

const MoviesContainer = props => <Movies {...props} />;

const mapStateToProps = state => {
    return {movies: _.shuffle(_.values(state.movies))}
};

export default connect(
    mapStateToProps,
    {
        getMovies
    }
)(MoviesContainer);
