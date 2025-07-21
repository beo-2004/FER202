// src/components/Login.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Alert, Container } from 'react-bootstrap';

const Login = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError('Username and password are required.');
      setSuccess('');
      return;
    }

    try {
      const res = await axios.get(`http://localhost:3001/UserAccounts?username=${username}&password=${password}`);
      if (res.data.length > 0) {
        setError('');
        setSuccess('Login successful!');
        setTimeout(() => {
          navigate('/home');
        }, 1500);
      } else {
        setError('Invalid username or password!');
        setSuccess('');
      }
    } catch (err) {
      setError('Error connecting to server.');
      setSuccess('');
    }
  };

  return (
    <Container className="mt-5" style={{ maxWidth: '400px' }}>
      <h2 className="text-center">Login</h2>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
        </Form.Group>
        <Button type="submit" className="w-100">Login</Button>
        {error && <Alert className="mt-3" variant="danger">{error}</Alert>}
        {success && <Alert className="mt-3" variant="success">{success}</Alert>}
      </Form>
    </Container>
  );
};

Login.propTypes = {
  setUser: PropTypes.func
};

Login.defaultProps = {
  setUser: () => {}
};

export default Login;
