import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link to="*" style={{ color: "white", textDecoration: "none", marginRight: "2rem", fontSize:"1.4rem" }}>
            CART PRACTICE
          </Link>
          <Nav className="me-auto">
            <Link
              to="products"
              style={{
                color: "white",
                textDecoration: "none",
                marginRight: "2rem",
              }}
            >
              Product
            </Link>
            <Link to="cart" style={{ color: "white", textDecoration: "none" }}>
              Cart
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
