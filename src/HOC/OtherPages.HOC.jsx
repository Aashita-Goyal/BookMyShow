// eslint-disable-next-line
import React, {Component} from "react";
import { Route } from "react-router-dom";

// Layout
import OtherPagesLayout from "../layouts/OtherPages.layout";



const OtherPagesHOC = ({ Component, ...rest }) => {
  return (
    <>
      <Route
        {...rest}
        component={(props) => (
          <OtherPagesLayout>
            <component {...props} />
          </OtherPagesLayout>
        )}
      />
    </>
  );
};

export default OtherPagesHOC;