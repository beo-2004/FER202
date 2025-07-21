// src/components/Cart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Table, Container, Row, Col, Alert } from 'react-bootstrap';
import { deleteFromCart } from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const calculateTotal = () => {
    return cartItems.reduce((sum, item) => {
      const price = parseFloat(item.price.replace(/[^0-9.]/g, ''));
      return sum + price * item.quantity;
    }, 0);
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">🛒 Your Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <Alert variant="info" className="text-center">
          Your cart is currently empty.
        </Alert>
      ) : (
        <>
          <Table striped bordered hover responsive className="shadow-sm">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map(item => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                  <td>
                    ${(
                      parseFloat(item.price.replace(/[^0-9.]/g, '')) *
                      item.quantity
                    ).toFixed(2)}
                  </td>
                  <td>
                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={() => dispatch(deleteFromCart(item.id))}
                    >
                      🗑 Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <Row className="mt-4">
            <Col md={6}>
              <h4 className="text-start">
                🧾 <strong>Total:</strong> ${calculateTotal().toFixed(2)}
              </h4>
            </Col>
            <Col md={6} className="text-end">
              <Button
                variant="success"
                size="lg"
                onClick={handleCheckout}
              >
                ✅ Proceed to Checkout
              </Button>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export default Cart;
