import React from "react";

const Movie = ({ poster, name, duration, year }) => (
  <div>
    <img src={poster} alt={`Movie: ${name}`} />
    <div>{name}</div>
    <div>{`${duration} ${year}`}</div>
  </div>
);

export default Movie;
