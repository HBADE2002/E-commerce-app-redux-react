import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartItemCount } from "../features/cartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
function NavBar() {
  const cartItemCount = useSelector(selectCartItemCount);
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          Dure Store
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/" end>
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/about">
            About
          </Nav.Link>
          <Nav.Link as={NavLink} to="/cart">
            <FontAwesomeIcon icon={faCartShopping} />({cartItemCount})
          </Nav.Link>
          <Nav.Link as={NavLink} to="/checkout">
            Checkout
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
