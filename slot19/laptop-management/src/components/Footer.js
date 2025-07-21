/* eslint-disable jsx-a11y/anchor-is-valid */
// src/components/Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light mt-auto py-4 w-100" style={{ position: 'relative', bottom: '0' }}>
      <Container>
        <Row className="text-center text-md-start">
          <Col md={4} className="mb-3">
            <h5 className="text-uppercase fw-bold">Laptop Store</h5>
            <p style={{ fontSize: '0.9rem' }}>
              Your go-to place for the latest laptops. Discover, compare and buy from a wide range of high-performance laptops.
            </p>
          </Col>

          <Col md={4} className="mb-3">
            <h6 className="text-uppercase fw-bold">Quick Links</h6>
            <ul className="list-unstyled" style={{ fontSize: '0.9rem' }}>
              <li><a href="/" className="text-decoration-none text-light">Home</a></li>
              <li><a href="/laptops" className="text-decoration-none text-light">Laptops</a></li>
              <li><a href="/cart" className="text-decoration-none text-light">Cart</a></li>
              <li><a href="/login" className="text-decoration-none text-light">Login</a></li>
            </ul>
          </Col>

          <Col md={4} className="mb-3">
            <h6 className="text-uppercase fw-bold">Connect with us</h6>
            <ul className="list-unstyled" style={{ fontSize: '0.9rem' }}>
              <li><a href="#" className="text-decoration-none text-light">Facebook</a></li>
              <li><a href="#" className="text-decoration-none text-light">Twitter</a></li>
              <li><a href="#" className="text-decoration-none text-light">Instagram</a></li>
            </ul>
          </Col>
        </Row>

        <div className="text-center mt-3" style={{ fontSize: '0.85rem', color: '#bbb' }}>
          &copy; {new Date().getFullYear()} Laptop Store. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
