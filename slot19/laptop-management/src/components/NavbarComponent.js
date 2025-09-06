// src/components/NavbarComponent.js
import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaSignInAlt, FaShoppingCart, FaLaptop, FaPlus , FaHome , FaEdit } from "react-icons/fa";

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/Home">
          Laptop Store
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Left side navigation */}
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/Home">
              <FaHome className="me-1" /> Home
            </Nav.Link>
            <Nav.Link as={Link} to="/laptops">
              <FaLaptop className="me-1" /> Laptops
            </Nav.Link>
            <Nav.Link as={Link} to="/add-product">
              <FaPlus className="me-1" /> Add Product
            </Nav.Link>
            <Nav.Link as={Link} to="/ProductEdit/">
              <FaEdit className="me-1" /> Edit Product
            </Nav.Link>
            <Nav.Link as={Link} to="/cart">
              <FaShoppingCart className="me-1" /> Cart
            </Nav.Link>
          </Nav>
          {/* Right side login */}
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/login">
              <FaSignInAlt className="me-1" /> Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
