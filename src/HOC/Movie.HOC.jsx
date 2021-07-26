// eslint-disable-next-line
import React, {Component} from "react";
import { Route } from "react-router-dom";

// Layout
import MovieLayout from "../layouts/Movie.layout";



const MovieHOC = ({ Component, ...rest }) => {
  return (
    <>
      <Route
        {...rest}
        component={(props) => (
          <MovieLayout>
            <component {...props} />
          </MovieLayout>
        )}
      />
    </>
  );
};

export default MovieHOC;