// src/components/ProductForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ProductForm = () => {
  const [form, setForm] = useState({ brand: '', model: '', year: '', price: '', image: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure the image path is relative to /public (e.g., /images/laptop1.png)
    const formattedForm = {
      ...form,
      image: form.image.startsWith('/images/') ? form.image : `/images/${form.image}`
    };

    await axios.post('http://localhost:3001/Laptops', formattedForm);
    navigate('/laptops');
  };

  return (
    <Container className="mt-4">
      <h2>Add New Laptop</h2>
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
            value={form.image}
            onChange={handleChange}
            required
          />
          <Form.Text className="text-muted">
            Images must be placed in <code>public/images/</code>.
          </Form.Text>
        </Form.Group>
        <Button type="submit" variant="success">Add Product</Button>
      </Form>
    </Container>
  );
};

export default ProductForm;
