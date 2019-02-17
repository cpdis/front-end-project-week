import React from "react";
import { connect } from "react-redux";

import AuthenticatedNavbar from "./AuthenticatedNavbar";
import PublicNavbar from "./PublicNavbar";

const Navbar = ({ user, ...rest }) => {
  return (
    <div>
      {user.isAuthenticated ? (
        <AuthenticatedNavbar user={user} {...rest} />
      ) : (
        <PublicNavbar {...rest} />
      )}
    </div>
  );
};

const mapStateToProps = ({ user, router }) => {
  return {
    user,
    router
  };
};

const NavbarContainer = connect(mapStateToProps)(Navbar);

export default NavbarContainer;
