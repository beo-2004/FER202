// src/components/LaptopList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Button, Container, Row, Col, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart, updateCart } from '../redux/cartSlice';

const LaptopList = () => {
  const [laptops, setLaptops] = useState([]);
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    fetchLaptops();
  }, []);

  const fetchLaptops = async () => {
    try {
      const res = await axios.get('http://localhost:3001/Laptops');
      setLaptops(res.data);
    } catch (error) {
      console.error("Failed to fetch laptops:", error);
    }
  };

  const handleAddToCart = (laptop) => {
    dispatch(addToCart({ ...laptop, name: `${laptop.brand} ${laptop.model}` }));
    navigate('/cart');
  };

  const handleUpdateCart = (laptop) => {
    dispatch(updateCart({ id: laptop.id, quantity: 1 }));
    navigate('/cart');
  };

  const handleDeleteLaptop = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this product?');
    if (!confirmDelete) return;
    try {
      await axios.delete(`http://localhost:3001/Laptops/${id}`);
      fetchLaptops();
    } catch (error) {
      alert('Failed to delete laptop');
    }
  };

  const filtered = laptops.filter((lap) =>
    lap.brand.toLowerCase().includes(search.toLowerCase()) ||
    lap.model.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container className="mt-4">
      <h2 className="text-center text-light">Laptop List</h2>
      <Form.Control
        type="text"
        placeholder="Search by brand or model"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4"
      />
      <Row>
        {filtered.map((lap) => (
          <Col md={3} key={lap.id} className="mb-4">
            <Card className="shadow-sm">
              <Card.Img
                variant="top"
                src={lap.image.startsWith('/images/') ? lap.image : `/images/${lap.image}`}
                height="180"
                style={{ objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title style={{ fontSize: '1rem' }}>{lap.brand} {lap.model}</Card.Title>
                <Card.Text style={{ fontSize: '0.85rem' }}><strong>Year:</strong> {lap.year}</Card.Text>
                <Card.Text style={{ fontSize: '0.85rem' }}><strong>Price:</strong> {lap.price}</Card.Text>
                <div className="d-flex flex-wrap justify-content-between gap-1">
                  <Button
                    as={Link}
                    to={`/laptops/${lap.id}`}
                    variant="outline-primary"
                    size="sm"
                    className="flex-fill"
                  >
                     View
                  </Button>
                  <Button
                    variant="outline-success"
                    size="sm"
                    className="flex-fill"
                    onClick={() => handleAddToCart(lap)}
                  >
                     Add
                  </Button>
                  <Button
                    variant="outline-warning"
                    size="sm"
                    className="flex-fill"
                    onClick={() => handleUpdateCart(lap)}
                  >
                     Update
                  </Button>
                  <Button
                    as={Link}
                    to={`/ProductEdit/${lap.id}`}
                    variant="outline-info"
                    size="sm"
                    className="flex-fill"
                  >
                     Edit
                  </Button>
                  <Button
                    variant="outline-danger"
                    size="sm"
                    className="flex-fill"
                    onClick={() => handleDeleteLaptop(lap.id)}
                  >
                     Delete
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default LaptopList;
