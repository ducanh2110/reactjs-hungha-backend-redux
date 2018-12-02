import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import Movies from "../components/Movies";
import { getMovies, getTokenId } from "../actions/movieActions";

const MoviesContainer = props => <Movies {...props} />;

const mapStateToProps = state => {
    return {
        movies: (_.values(state.movies)),
        tokenId: state.tokenId
    }
};

export default connect(
    mapStateToProps,
    {
        getMovies, getTokenId
    }
)(MoviesContainer);
