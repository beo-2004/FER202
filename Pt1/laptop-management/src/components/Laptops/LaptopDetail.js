import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchLaptopById } from "../../api/laptopAPI";
import { Card, Button, Spinner } from "react-bootstrap";

function LaptopDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [laptop, setLaptop] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const getLaptop = async () => {
      try {
        const res = await fetchLaptopById(id);
        setLaptop(res.data);
      } catch (error) {
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };

    getLaptop();
  }, [id]);

  if (loading) {
    return (
      <div className="text-center py-5">
        <Spinner animation="border" />
      </div>
    );
  }

  if (notFound || !laptop) {
    navigate("/not-found");
    return null;
  }

  return (
    <Card className="mx-auto laptop-detail-card shadow border-0" style={{ maxWidth: "700px", borderRadius: '20px', overflow: 'hidden' }}>
      <div className="laptop-image-wrapper" style={{ width: '100%', aspectRatio: '4/3', background: '#f8f9fa', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Card.Img
          variant="top"
          src={laptop.image}
          alt={laptop.model}
          style={{ width: '100%', height: '100%', objectFit: 'contain', background: 'white' }}
        />
      </div>
      <Card.Body>
        <Card.Title className="fw-bold text-primary mb-3" style={{ fontSize: '2rem' }}>
          {laptop.brand} - {laptop.model}
        </Card.Title>
        <Card.Text className="mb-4" style={{ fontSize: '1.1rem' }}>
          <strong>Year:</strong> {laptop.year} <br />
          <strong>Price:</strong> {laptop.price} <br />
          <strong>Description:</strong> Powerful and modern laptop from {laptop.brand}.
        </Card.Text>
        <Button variant="outline-secondary" className="fw-semibold px-4 py-2" style={{ borderRadius: '10px' }} onClick={() => navigate("/laptops")}>Back to List</Button>
      </Card.Body>
    </Card>
  );
}

export default LaptopDetail;
