import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, Button, Modal } from "react-bootstrap";
import { fetchUsers } from "../../api/laptopAPI";
import { useNavigate } from "react-router-dom";

function LoginForm({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetchUsers();
      const userList = res.data;
      const user = userList.find(
        (u) => u.username === username && u.password === password
      );

      if (user) {
        setUser(user);
        setShowModal(true);
        setTimeout(() => {
          setShowModal(false);
          navigate("/laptops");
        }, 1500);
      } else {
        alert("Invalid username or password!");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <>
      <Form onSubmit={handleLogin} className="login-form p-2">
        <Form.Group className="mb-3" controlId="username">
          <Form.Label className="fw-semibold">Username</Form.Label>
          <Form.Control
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            size="lg"
            autoFocus
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="password">
          <Form.Label className="fw-semibold">Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            size="lg"
          />
        </Form.Group>

        <Button variant="success" type="submit" className="w-100 py-2 fs-5 shadow-sm">
          Login
        </Button>
      </Form>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Login Successful</Modal.Title>
        </Modal.Header>
        <Modal.Body>Welcome, <strong>{username}</strong> login Successful!</Modal.Body>
      </Modal>
    </>
  );
}

LoginForm.propTypes = {
  setUser: PropTypes.func.isRequired,
};

export default LoginForm;
