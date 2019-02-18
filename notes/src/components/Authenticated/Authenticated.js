import React from "react";
import { Route, Redirect } from "react-router-dom";
import * as blockstack from "blockstack";

// Authenticated routes are only available when signed in with Blockstack
const Authenticated = ({ component, ...rest }) => {
  const isAuthenticated = blockstack.isUserSignedIn()

  return (
    <Route
      {...rest}
      render={props => {
        return !isAuthenticated ? React.createElement(component, { ...props })
          : <Redirect to='/' />
      }}
    />
  )
}

export default Authenticated;
