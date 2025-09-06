import React, { useState } from "react";
import ValidationForm from "./components/ValidationForm";

const App = () => {
  const [submittedData, setSubmittedData] = useState(null);
  const [showForm, setShowForm] = useState(true);

  const handleFormSubmit = (formData) => {
    console.log("Dữ liệu đã gửi:", formData);
    setSubmittedData(formData);
    // Có thể thêm logic gửi dữ liệu đến server ở đây
  };

  const handleFormCancel = () => {
    console.log("Form đã được hủy");
    setShowForm(false);
  };

  const handleShowForm = () => {
    setShowForm(true);
    setSubmittedData(null);
  };

  return (
    <div className="App">
      <h1>Ứng Dụng React - Form Validation với PropTypes</h1>
      
      {showForm ? (
        <ValidationForm 
          title="Form Đăng Ký Người Dùng" 
          onSubmit={handleFormSubmit}
          onCancel={handleFormCancel}
        />
      ) : (
        <div className="form-actions">
          <button onClick={handleShowForm} className="btn-show-form">
            Hiển thị Form
          </button>
        </div>
      )}

      {submittedData && (
        <div className="submitted-data">
          <h3>📋 Dữ liệu đã được gửi:</h3>
          <div className="data-display">
            <p><strong>Tên:</strong> {submittedData.name}</p>
            <p><strong>Tuổi:</strong> {submittedData.age}</p>
            <p><strong>Email:</strong> {submittedData.email}</p>
            <p><strong>Số điện thoại:</strong> {submittedData.phone}</p>
            <p><strong>Đồng ý điều khoản:</strong> {submittedData.agreeToTerms ? "Có" : "Không"}</p>
          </div>
        </div>
      )}

      <style jsx>{`
        .App {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          font-family: Arial, sans-serif;
        }

        .App h1 {
          text-align: center;
          color: #333;
          margin-bottom: 30px;
        }

        .form-actions {
          text-align: center;
          margin: 50px 0;
        }

        .btn-show-form {
          background-color: #28a745;
          color: white;
          padding: 12px 24px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 16px;
          font-weight: bold;
        }

        .btn-show-form:hover {
          background-color: #218838;
        }

        .submitted-data {
          margin-top: 30px;
          padding: 20px;
          background-color: #f8f9fa;
          border-radius: 8px;
          border: 1px solid #dee2e6;
        }

        .submitted-data h3 {
          color: #28a745;
          margin-bottom: 15px;
        }

        .data-display {
          background-color: white;
          padding: 15px;
          border-radius: 4px;
          border: 1px solid #ced4da;
        }

        .data-display p {
          margin: 8px 0;
          padding: 5px 0;
          border-bottom: 1px solid #f1f1f1;
        }

        .data-display p:last-child {
          border-bottom: none;
        }

        .data-display strong {
          color: #495057;
          min-width: 120px;
          display: inline-block;
        }
      `}</style>
    </div>
  );
};

export default App;

