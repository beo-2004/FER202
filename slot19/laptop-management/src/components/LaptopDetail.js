// 3. LaptopDetail.js
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { Container, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const LaptopDetail = () => {
  const { id } = useParams();
  const [laptop, setLaptop] = useState(null);
    const navigate = useNavigate();
  useEffect(() => {
 axios.get(`http://localhost:3001/Laptops/${id}`)
      .then(res => {
        setLaptop(res.data)
    
    })
      .catch(() =>  navigate('/not-found'));
  }, [id, navigate]);


  return (
    <Container className="mt-5">
      <Card className="p-4">
       {laptop && <>
            <Card.Img src={laptop.image} height="300" style={{ objectFit: 'contain' }} />
            <Card.Body>
              <Card.Title>{laptop.brand} {laptop.model}</Card.Title>
              <Card.Text><strong>Year:</strong> {laptop.year}</Card.Text>
              <Card.Text><strong>Price:</strong> {laptop.price}</Card.Text>
              <Card.Text><strong>Description:</strong> {laptop.description || 'N/A'}</Card.Text>
              <Button as={Link} to="/laptops">Back to Laptop List</Button>
            </Card.Body>
       </>}
      </Card>
    </Container>
  );
};

export default LaptopDetail;