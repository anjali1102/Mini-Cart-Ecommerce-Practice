import React, { useContext } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../Cart/CartContextProvider";
const Header = () => {
  const { cart } = useContext(CartContext);
  console.log(cart);
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link
            to="*"
            style={{
              color: "white",
              textDecoration: "none",
              marginRight: "2rem",
              fontSize: "1.4rem",
            }}
          >
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
            <Link to="cart" style={{ color: "white", textDecoration: "none", position:"relative" }}>
              Cart <span className="badge" style={{color:"red", position:"absolute", backgroundColor:"pink", borderRadius:
            "100%", left: "30px", top:"-4px"}} >{cart?.length || 0}</span>
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
