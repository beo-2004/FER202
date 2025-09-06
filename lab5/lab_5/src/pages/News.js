import React, { useState } from 'react';
import { Card, Row, Col, Badge, Modal, Button } from 'react-bootstrap';
import { newsList } from '../data/newLists';
import './News.css';

export default function News() {
  const [selectedNews, setSelectedNews] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleNewsClick = (news) => {
    setSelectedNews(news);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedNews(null);
  };

  return (
    <div className="news-container">
      <div className="news-header">
        <h1 className="news-title">📰 Latest News</h1>
        <p className="news-subtitle">Stay updated with the latest stories and trends</p>
      </div>
      
      <Row className="news-grid">
        {newsList.map((news, index) => (
          <Col key={news.id} lg={4} md={6} className="mb-4">
            <Card 
              className="news-card h-100" 
              onClick={() => handleNewsClick(news)}
            >
              <div className="news-image-container">
                <Card.Img 
                  variant="top" 
                  src={news.images} 
                  className="news-image"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x250/6c757d/ffffff?text=News+Image';
                  }}
                />
                <div className="news-overlay">
                  <Badge bg="primary" className="news-badge">#{index + 1}</Badge>
                </div>
              </div>
              <Card.Body className="news-card-body">
                <Card.Title className="news-card-title">{news.title}</Card.Title>
                <Card.Text className="news-card-text">
                  {news.description.length > 100 
                    ? `${news.description.substring(0, 100)}...` 
                    : news.description
                  }
                </Card.Text>
                <div className="news-meta">
                  <small className="text-muted">📅 {new Date().toLocaleDateString()}</small>
                  <Button variant="outline-primary" size="sm" className="read-more-btn">
                    Read More →
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal for full news view */}
      <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
        <Modal.Header closeButton className="news-modal-header">
          <Modal.Title>{selectedNews?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="news-modal-body">
          {selectedNews && (
            <>
              <img 
                src={selectedNews.images} 
                alt={selectedNews.title}
                className="news-modal-image"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/600x400/6c757d/ffffff?text=News+Image';
                }}
              />
              <p className="news-modal-description">{selectedNews.description}</p>
              <div className="news-modal-meta">
                <Badge bg="secondary">Published: {new Date().toLocaleDateString()}</Badge>
                <Badge bg="info">Category: General</Badge>
              </div>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary">
            Share Article
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
