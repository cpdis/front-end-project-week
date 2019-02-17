import React from "react";
import { Link } from "react-router-dom";

import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const PublicNavbar = () => {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Navbar.Brand>
          <Link to="/">Lambda Notes!</Link>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/login">
            <Nav.Link>Login</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar>
    </div>
  );
};

export default PublicNavbar;
