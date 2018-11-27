import React from "react";
import { Route } from "react-router-dom";
import MoviesContainer from "../containers/MoviesContainer";

const App = () => {
  return (
      <Route exact path="/" component={MoviesContainer} />
  );
};

export default App;
