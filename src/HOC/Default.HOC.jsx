// eslint-disable-next-line
import React, {Component} from "react";
import { Route } from "react-router-dom";

// Layout
import DefaultLayout from "../layouts/Default.layout";


const DefaultHOC = ({ Component, ...rest }) => {
  return (
    <>
      <Route
        {...rest}
        component={(props) => (
          <DefaultLayout>
            <component {...props} />
          </DefaultLayout>
        )}
      />
    </>
  );
};

export default DefaultHOC;