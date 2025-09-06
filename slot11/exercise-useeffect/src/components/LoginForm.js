import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePassword = (password) => {
  return password.length >= 8;
};

function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [isValid, setIsValid] = useState({
    email: true,
    password: true,
  });

  const [touched, setTouched] = useState({
    email: false,
    password: false,
  });

  useEffect(() => {
    const validateForm = () => {
      const newErrors = {
        email: "",
        password: "",
      };

      const newIsValid = {
        email: true,
        password: true,
      };

      if (touched.email) {
        if (!formData.email) {
          newErrors.email = "Email không được để trống";
          newIsValid.email = false;
        } else if (!validateEmail(formData.email)) {
          newErrors.email = "Email không hợp lệ";
          newIsValid.email = false;
        }
      }

      if (touched.password) {
        if (!formData.password) {
          newErrors.password = "Mật khẩu không được để trống";
          newIsValid.password = false;
        } else if (!validatePassword(formData.password)) {
          newErrors.password = "Mật khẩu phải có ít nhất 8 ký tự";
          newIsValid.password = false;
        }
      }

      setErrors(newErrors);
      setIsValid(newIsValid);
    };

    validateForm();
  }, [formData, touched]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid.email && isValid.password) {
      console.log("Form submitted:", formData);
    }
  };

  const isFormValid = isValid.email && isValid.password;

  return (
    <Form onSubmit={handleSubmit} className="mt-4">
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          isValid={touched.email && isValid.email}
          isInvalid={touched.email && !isValid.email}
        />
        <Form.Control.Feedback type="invalid">
          {errors.email}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Mật khẩu</Form.Label>
        <Form.Control
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          onBlur={handleBlur}
          isValid={touched.password && isValid.password}
          isInvalid={touched.password && !isValid.password}
        />
        <Form.Control.Feedback type="invalid">
          {errors.password}
        </Form.Control.Feedback>
      </Form.Group>

      <Button variant="primary" type="submit" disabled={!isFormValid}>
        Đăng nhập
      </Button>
    </Form>
  );
}

export default LoginForm; 