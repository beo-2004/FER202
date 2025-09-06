import React, { useState } from 'react';
import { Form, Button, Alert, ProgressBar, Card, Container, Row, Col } from 'react-bootstrap';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [progress, setProgress] = useState(0);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }
    
    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = 'Subject must be at least 5 characters';
    }
    
    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
    
    // Update progress
    const filledFields = Object.values({ ...formData, [name]: value }).filter(field => field.trim() !== '').length;
    const totalFields = Object.keys(formData).length;
    setProgress((filledFields / totalFields) * 100);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setSubmitStatus('error');
      return;
    }
    
    setIsSubmitting(true);
    setProgress(50);
    
    // Simulate API call
    setTimeout(() => {
      setProgress(100);
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Reset form after success
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setProgress(0);
        setSubmitStatus(null);
      }, 3000);
    }, 2000);
  };

  const getStatusColor = () => {
    if (submitStatus === 'success') return 'success';
    if (submitStatus === 'error') return 'danger';
    return 'info';
  };

  return (
    <div className="contact-container">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} md={10}>
            <div className="contact-header text-center mb-5">
              <h1 className="contact-title">📧 Get In Touch</h1>
              <p className="contact-subtitle">We'd love to hear from you. Send us a message!</p>
            </div>

            {/* Progress Bar */}
            <Card className="progress-card mb-4">
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span className="progress-label">Form Completion</span>
                  <span className="progress-percentage">{Math.round(progress)}%</span>
                </div>
                <ProgressBar 
                  now={progress} 
                  variant={getStatusColor()}
                  className="progress-bar-custom"
                />
              </Card.Body>
            </Card>

            {/* Status Alert */}
            {submitStatus && (
              <Alert 
                variant={submitStatus === 'success' ? 'success' : 'danger'}
                className="status-alert"
                dismissible
                onClose={() => setSubmitStatus(null)}
              >
                {submitStatus === 'success' ? (
                  <>
                    <strong>✅ Success!</strong> Your message has been sent successfully. We'll get back to you soon!
                  </>
                ) : (
                  <>
                    <strong>❌ Error!</strong> Please fix the errors below and try again.
                  </>
                )}
              </Alert>
            )}

            {/* Contact Form */}
            <Card className="contact-form-card">
              <Card.Body className="p-4">
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label className="form-label">
                          <span className="label-icon">👤</span> Full Name *
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          className={`form-control-custom ${errors.name ? 'is-invalid' : ''}`}
                          disabled={isSubmitting}
                        />
                        {errors.name && (
                          <Form.Control.Feedback type="invalid">
                            {errors.name}
                          </Form.Control.Feedback>
                        )}
                      </Form.Group>
                    </Col>
                    
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label className="form-label">
                          <span className="label-icon">📧</span> Email Address *
                        </Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email address"
                          className={`form-control-custom ${errors.email ? 'is-invalid' : ''}`}
                          disabled={isSubmitting}
                        />
                        {errors.email && (
                          <Form.Control.Feedback type="invalid">
                            {errors.email}
                          </Form.Control.Feedback>
                        )}
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label className="form-label">
                      <span className="label-icon">📝</span> Subject *
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What is this about?"
                      className={`form-control-custom ${errors.subject ? 'is-invalid' : ''}`}
                      disabled={isSubmitting}
                    />
                    {errors.subject && (
                      <Form.Control.Feedback type="invalid">
                        {errors.subject}
                      </Form.Control.Feedback>
                    )}
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label className="form-label">
                      <span className="label-icon">💬</span> Message *
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us more about your inquiry..."
                      className={`form-control-custom ${errors.message ? 'is-invalid' : ''}`}
                      disabled={isSubmitting}
                    />
                    {errors.message && (
                      <Form.Control.Feedback type="invalid">
                        {errors.message}
                      </Form.Control.Feedback>
                    )}
                  </Form.Group>

                  <div className="text-center">
                    <Button
                      variant="primary"
                      type="submit"
                      size="lg"
                      className="submit-btn"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <span className="btn-icon">🚀</span>
                          Send Message
                        </>
                      )}
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>

            {/* Contact Info */}
            <Row className="mt-5">
              <Col md={4} className="text-center mb-3">
                <div className="contact-info-item">
                  <div className="info-icon">📍</div>
                  <h5>Address</h5>
                  <p>123 Main Street<br />City, Country 12345</p>
                </div>
              </Col>
              <Col md={4} className="text-center mb-3">
                <div className="contact-info-item">
                  <div className="info-icon">📞</div>
                  <h5>Phone</h5>
                  <p>+1 (555) 123-4567<br />+1 (555) 987-6543</p>
                </div>
              </Col>
              <Col md={4} className="text-center mb-3">
                <div className="contact-info-item">
                  <div className="info-icon">✉️</div>
                  <h5>Email</h5>
                  <p>info@example.com<br />support@example.com</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

