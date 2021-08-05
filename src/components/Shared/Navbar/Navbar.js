import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar as NavBar, Container, Col, Row } from "react-bootstrap";
import { UserContext } from "../../../App";

const Navbar = ({ handleLogOut }) => {
  const [user, setUser] = useContext(UserContext);

  return (
    <Container fluid>
      <Row>
        <Col className="p-0 col-12">
          <NavBar
            className="pr-5"
            variant="dark"
            collapseOnSelect
            expand="md"
            sticky="top"
            bg="dark"
          >
            <NavBar.Brand className="pl-4 text-brand">
              {" "}
              <Link
                className="nav-link mr-3 text-brand text-decoration-none"
                to="/"
                style={{
                  textDecoration: "none",
                  fontStyle: "oblique",
                }}
              >
                inFocus.
              </Link>
            </NavBar.Brand>
            <NavBar.Toggle aria-controls="responsive-navbar-nav" />
            <NavBar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
                <Link className="nav-link mr-3 text-brand" to="/">
                  Home
                </Link>

                <Link className="nav-link mr-3 text-brand" to="/dashboard">
                  Dashboard
                </Link>
                <Link className="nav-link mr-3 text-brand" to="/orders">
                  Orders
                </Link>
                <Link className="nav-link mr-3 text-brand" to="#">
                  Blogs
                </Link>
                <Link className="nav-link mr-3 text-brand" to="#">
                  Contact Us
                </Link>

                {user.email ? (
                  <Link
                    className="nav-link mr-3 btn-brand text-dark"
                    to="/login"
                    onClick={handleLogOut}
                  >
                    Log out
                  </Link>
                ) : (
                  <Link
                    className="nav-link mr-3 btn-brand text-dark"
                    to="/login"
                  >
                    Login
                  </Link>
                )}
              </Nav>
            </NavBar.Collapse>
          </NavBar>
        </Col>
      </Row>
    </Container>
  );
};

export default Navbar;
