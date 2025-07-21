// src/components/Checkout.js
import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { IoBagCheckOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const navigate = useNavigate();

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center mt-5 text-center" style={{ minHeight: '80vh' }}>
      <IoBagCheckOutline size={100} color="#28a759ff" className="mb-4" />
      <h2 className="mb-3">Thank you for your purchase!</h2>
      <p className="lead mb-4">Your order is being processed. We'll notify you once it's shipped.</p>
      <Button variant="success" size="lg" onClick={() => navigate('/laptops')}>
         Continue Shopping
      </Button>
    </Container>
  );
};

export default Checkout;
