import React from "react";
import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function LaptopCard({ laptop }) {
  const navigate = useNavigate();

  return (
    <Card className="laptop-card h-100 shadow-sm border-0" style={{ borderRadius: '18px', overflow: 'hidden', transition: 'transform 0.2s' }}>
      <div className="laptop-image-wrapper" style={{ width: '100%', aspectRatio: '4/3', background: '#f8f9fa', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Card.Img
          variant="top"
          src={laptop.image}
          alt={laptop.model}
          style={{ width: '100%', height: '100%', objectFit: 'contain', background: 'white' }}
        />
      </div>
      <Card.Body className="d-flex flex-column justify-content-between">
        <Card.Title className="fw-bold text-primary mb-2">{laptop.brand} - {laptop.model}</Card.Title>
        <Card.Text className="mb-3">
          <span className="text-secondary">Year:</span> {laptop.year} <br />
          <span className="text-secondary">Price:</span> {laptop.price}
        </Card.Text>
        <Button
          variant="outline-primary"
          className="mt-auto w-100 fw-semibold"
          style={{ borderRadius: '10px' }}
          onClick={() => navigate(`/laptops/${laptop.id}`)}
        >
          View Details
        </Button>
      </Card.Body>
    </Card>
  );
}

LaptopCard.propTypes = {
  laptop: PropTypes.shape({
    id: PropTypes.number.isRequired,
    brand: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    price: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default LaptopCard;
