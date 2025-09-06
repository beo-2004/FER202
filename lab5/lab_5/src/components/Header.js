import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <Navbar className="custom-navbar" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="navbar-brand">
          <span className="brand-icon">🎮</span>
          <span className="brand-text">React Quiz App</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="nav-link">
              <span className="nav-icon">🏠</span>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/news" className="nav-link">
              <span className="nav-icon">📰</span>
              News
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-link">
              <span className="nav-icon">ℹ️</span>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-link">
              <span className="nav-icon">📧</span>
              Contact
            </Nav.Link>
            <Nav.Link as={Link} to="/quiz" className="nav-link quiz-link">
              <span className="nav-icon">🎯</span>
              Quiz
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}