// src/components/NotFound.js
import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { TbError404Off } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Container
      className="d-flex flex-column justify-content-center align-items-center text-center mt-5"
      style={{ minHeight: '80vh' }}
    >
      <TbError404Off size={120} color="#dc3545" className="mb-4" />
      <h1 className="mb-3">Oops! Page Not Found</h1>
      <p className="text-muted mb-4">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Button variant="primary" onClick={() => navigate('/home')}>
         Go Back Home
      </Button>
    </Container>
  );
};

export default NotFound;
