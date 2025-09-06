import React, { useState } from "react";
import PropTypes from "prop-types";

// Component ValidationForm với PropTypes validation
const ValidationForm = ({ title, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
    agreeToTerms: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Hàm xử lý thay đổi giá trị input
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;
    
    setFormData(prev => ({
      ...prev,
      [name]: fieldValue
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  // Hàm validate tên (3-50 ký tự)
  const validateName = (name) => {
    if (!name || name.trim() === "") {
      return "Tên không được để trống!";
    }
    if (name.trim().length < 3) {
      return "Tên phải có ít nhất 3 ký tự!";
    }
    if (name.trim().length > 50) {
      return "Tên không được vượt quá 50 ký tự!";
    }
    return "";
  };

  // Hàm validate tuổi (18-100)
  const validateAge = (age) => {
    if (!age || age.toString().trim() === "") {
      return "Tuổi không được để trống!";
    }
    const ageNum = parseInt(age);
    if (isNaN(ageNum)) {
      return "Tuổi phải là một số hợp lệ!";
    }
    if (ageNum < 18) {
      return "Tuổi phải từ 18 trở lên!";
    }
    if (ageNum > 100) {
      return "Tuổi không được vượt quá 100!";
    }
    return "";
  };

  // Hàm validate email
  const validateEmail = (email) => {
    if (!email || email.trim() === "") {
      return "Email không được để trống!";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "Email không đúng định dạng!";
    }
    return "";
  };

  // Hàm validate số điện thoại (10-15 chữ số)
  const validatePhone = (phone) => {
    if (!phone || phone.trim() === "") {
      return "Số điện thoại không được để trống!";
    }
    const phoneRegex = /^\d{10,15}$/;
    if (!phoneRegex.test(phone.replace(/\s/g, ""))) {
      return "Số điện thoại phải có 10-15 chữ số!";
    }
    return "";
  };

  // Hàm validate đồng ý điều khoản
  const validateTerms = (agreeToTerms) => {
    if (!agreeToTerms) {
      return "Bạn phải đồng ý với điều khoản!";
    }
    return "";
  };

  // Hàm validate toàn bộ form
  const validateForm = () => {
    const newErrors = {
      name: validateName(formData.name),
      age: validateAge(formData.age),
      email: validateEmail(formData.email),
      phone: validatePhone(formData.phone),
      agreeToTerms: validateTerms(formData.agreeToTerms)
    };

    setErrors(newErrors);
    
    // Kiểm tra xem có lỗi nào không
    return Object.values(newErrors).every(error => error === "");
  };

  // Hàm xử lý submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitted(true);
      onSubmit(formData);
    }
  };

  // Hàm xử lý reset form
  const handleReset = () => {
    setFormData({
      name: "",
      age: "",
      email: "",
      phone: "",
      agreeToTerms: false
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div className="validation-form">
      <h2>{title}</h2>
      
      {isSubmitted && (
        <div className="success-message">
          <h3>✅ Form đã được gửi thành công!</h3>
          <p>Dữ liệu đã được xác thực và gửi đi.</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="form-container">
        {/* Tên */}
        <div className="form-group">
          <label htmlFor="name">Tên: *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? "error" : ""}
            placeholder="Nhập tên (3-50 ký tự)"
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

        {/* Tuổi */}
        <div className="form-group">
          <label htmlFor="age">Tuổi: *</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className={errors.age ? "error" : ""}
            placeholder="Nhập tuổi (18-100)"
            min="18"
            max="100"
          />
          {errors.age && <span className="error-message">{errors.age}</span>}
        </div>

        {/* Email */}
        <div className="form-group">
          <label htmlFor="email">Email: *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? "error" : ""}
            placeholder="example@email.com"
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        {/* Số điện thoại */}
        <div className="form-group">
          <label htmlFor="phone">Số điện thoại: *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={errors.phone ? "error" : ""}
            placeholder="Nhập số điện thoại (10-15 chữ số)"
          />
          {errors.phone && <span className="error-message">{errors.phone}</span>}
        </div>

        {/* Đồng ý điều khoản */}
        <div className="form-group checkbox-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              className={errors.agreeToTerms ? "error" : ""}
            />
            <span className="checkmark"></span>
            Tôi đồng ý với <a href="#" onClick={(e) => e.preventDefault()}>điều khoản sử dụng</a> *
          </label>
          {errors.agreeToTerms && <span className="error-message">{errors.agreeToTerms}</span>}
        </div>

        {/* Buttons */}
        <div className="form-buttons">
          <button type="submit" className="btn-submit">
            Gửi Form
          </button>
          <button type="button" onClick={handleReset} className="btn-reset">
            Reset
          </button>
          {onCancel && (
            <button type="button" onClick={onCancel} className="btn-cancel">
              Hủy
            </button>
          )}
        </div>
      </form>

      <style jsx>{`
        .validation-form {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          font-family: Arial, sans-serif;
        }

        .form-container {
          background: #f9f9f9;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .form-group {
          margin-bottom: 15px;
        }

        .form-group label {
          display: block;
          margin-bottom: 5px;
          font-weight: bold;
          color: #333;
        }

        .form-group input[type="text"],
        .form-group input[type="email"],
        .form-group input[type="number"],
        .form-group input[type="tel"] {
          width: 100%;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 14px;
          box-sizing: border-box;
        }

        .form-group input.error {
          border-color: #dc3545;
          background-color: #fff5f5;
        }

        .error-message {
          color: #dc3545;
          font-size: 12px;
          margin-top: 5px;
          display: block;
        }

        .checkbox-group {
          margin-top: 20px;
        }

        .checkbox-label {
          display: flex;
          align-items: center;
          cursor: pointer;
          font-weight: normal;
        }

        .checkbox-label input[type="checkbox"] {
          margin-right: 10px;
          width: auto;
        }

        .checkbox-label a {
          color: #007bff;
          text-decoration: none;
        }

        .checkbox-label a:hover {
          text-decoration: underline;
        }

        .form-buttons {
          margin-top: 20px;
          display: flex;
          gap: 10px;
        }

        .btn-submit, .btn-reset, .btn-cancel {
          padding: 10px 20px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 14px;
          font-weight: bold;
        }

        .btn-submit {
          background-color: #007bff;
          color: white;
        }

        .btn-submit:hover {
          background-color: #0056b3;
        }

        .btn-reset {
          background-color: #6c757d;
          color: white;
        }

        .btn-reset:hover {
          background-color: #545b62;
        }

        .btn-cancel {
          background-color: #dc3545;
          color: white;
        }

        .btn-cancel:hover {
          background-color: #c82333;
        }

        .success-message {
          background-color: #d4edda;
          color: #155724;
          padding: 15px;
          border-radius: 4px;
          margin-bottom: 20px;
          border: 1px solid #c3e6cb;
        }

        .success-message h3 {
          margin: 0 0 10px 0;
        }

        .success-message p {
          margin: 0;
        }
      `}</style>
    </div>
  );
};

// PropTypes validation cho ValidationForm
ValidationForm.propTypes = {
  title: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func
};

// Default props
ValidationForm.defaultProps = {
  title: "Form Đăng Ký"
};

export default ValidationForm; 