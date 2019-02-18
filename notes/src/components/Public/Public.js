import React from "react";
import { Route, Redirect } from "react-router-dom";
import * as blockstack from "blockstack";

// Public routes are only accessible when not signed in with Blockstack
const Public = ({ component, ...rest }) => {
  const isAuthenticated = blockstack.isUserSignedIn();

  return (
    <Route
      {...rest}
      render={props => {
        return !isAuthenticated ? (
          React.createElement(component, { ...props })
        ) : (
            <Redirect to="/" />
          );
      }}
    />
  );
};

export default Public;
