import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const ProductEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ brand: '', model: '', year: '', price: '', image: '' });

  // Fetch current product by ID
  useEffect(() => {
    const fetchLaptop = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/Laptops/${id}`);
        setForm(res.data);
      } catch (error) {
        console.error('Failed to fetch laptop:', error);
        navigate('/laptops');
      }
    };
    fetchLaptop();
  }, [id, navigate]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formattedForm = {
      ...form,
      image: form.image.startsWith('/images/') ? form.image : `/images/${form.image}`,
    };
    await axios.put(`http://localhost:3001/Laptops/${id}`, formattedForm);
    navigate('/laptops');
  };

  return (
    <Container className="mt-4">
      <h2>Edit Laptop</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Brand</Form.Label>
          <Form.Control name="brand" value={form.brand} onChange={handleChange} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Model</Form.Label>
          <Form.Control name="model" value={form.model} onChange={handleChange} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Year</Form.Label>
          <Form.Control name="year" type="number" value={form.year} onChange={handleChange} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control name="price" value={form.price} onChange={handleChange} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Image Filename (e.g., laptop1.png)</Form.Label>
          <Form.Control
            name="image"
            placeholder="laptop1.png"
            value={form.image.replace('/images/', '')}
            onChange={handleChange}
            required
          />
          <Form.Text className="text-muted">
            Images must be in <code>public/images/</code>
          </Form.Text>
        </Form.Group>
        <Button type="submit" variant="warning">Update Product</Button>
      </Form>
    </Container>
  );
};

export default ProductEdit;
