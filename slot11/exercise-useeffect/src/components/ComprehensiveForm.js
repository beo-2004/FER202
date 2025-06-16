import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

function ComprehensiveForm() {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    country: "",
    agreeToTerms: false,
  });

  const [errors, setErrors] = useState({
    name: "",
    gender: "",
    country: "",
    agreeToTerms: "",
  });

  const [touched, setTouched] = useState({
    name: false,
    gender: false,
    country: false,
    agreeToTerms: false,
  });

  const [isValid, setIsValid] = useState({
    name: true,
    gender: true,
    country: true,
    agreeToTerms: true,
  });

  useEffect(() => {
    const validateForm = () => {
      const newErrors = {
        name: "",
        gender: "",
        country: "",
        agreeToTerms: "",
      };

      const newIsValid = {
        name: true,
        gender: true,
        country: true,
        agreeToTerms: true,
      };

      if (touched.name) {
        if (!formData.name.trim()) {
          newErrors.name = "Tên không được để trống";
          newIsValid.name = false;
        } else if (formData.name.trim().length < 2) {
          newErrors.name = "Tên phải có ít nhất 2 ký tự";
          newIsValid.name = false;
        }
      }

      if (touched.gender && !formData.gender) {
        newErrors.gender = "Vui lòng chọn giới tính";
        newIsValid.gender = false;
      }

      if (touched.country && !formData.country) {
        newErrors.country = "Vui lòng chọn quốc gia";
        newIsValid.country = false;
      }

      if (touched.agreeToTerms && !formData.agreeToTerms) {
        newErrors.agreeToTerms = "Bạn phải đồng ý với điều khoản";
        newIsValid.agreeToTerms = false;
      }

      setErrors(newErrors);
      setIsValid(newIsValid);
    };

    validateForm();
  }, [formData, touched]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
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
    if (Object.values(isValid).every((value) => value)) {
      console.log("Form submitted:", formData);
    }
  };

  const isFormValid = Object.values(isValid).every((value) => value);

  return (
    <Form onSubmit={handleSubmit} className="mt-4">
      <Form.Group className="mb-3">
        <Form.Label>Tên</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
          isValid={touched.name && isValid.name}
          isInvalid={touched.name && !isValid.name}
        />
        <Form.Control.Feedback type="invalid">
          {errors.name}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Giới tính</Form.Label>
        <div>
          <Form.Check
            type="radio"
            id="male"
            name="gender"
            value="male"
            label="Nam"
            checked={formData.gender === "male"}
            onChange={handleChange}
            onBlur={handleBlur}
            isInvalid={touched.gender && !isValid.gender}
          />
          <Form.Check
            type="radio"
            id="female"
            name="gender"
            value="female"
            label="Nữ"
            checked={formData.gender === "female"}
            onChange={handleChange}
            onBlur={handleBlur}
            isInvalid={touched.gender && !isValid.gender}
          />
          {touched.gender && !isValid.gender && (
            <div className="text-danger">{errors.gender}</div>
          )}
        </div>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Quốc gia</Form.Label>
        <Form.Select
          name="country"
          value={formData.country}
          onChange={handleChange}
          onBlur={handleBlur}
          isValid={touched.country && isValid.country}
          isInvalid={touched.country && !isValid.country}
        >
          <option value="">Chọn quốc gia</option>
          <option value="vn">Việt Nam</option>
          <option value="us">Hoa Kỳ</option>
          <option value="uk">Anh</option>
          <option value="jp">Nhật Bản</option>
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          {errors.country}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Check
          type="checkbox"
          id="agreeToTerms"
          name="agreeToTerms"
          label="Tôi đồng ý với điều khoản sử dụng"
          checked={formData.agreeToTerms}
          onChange={handleChange}
          onBlur={handleBlur}
          isInvalid={touched.agreeToTerms && !isValid.agreeToTerms}
        />
        {touched.agreeToTerms && !isValid.agreeToTerms && (
          <div className="text-danger">{errors.agreeToTerms}</div>
        )}
      </Form.Group>

      <Button variant="primary" type="submit" disabled={!isFormValid}>
        Gửi
      </Button>
    </Form>
  );
}

export default ComprehensiveForm; 