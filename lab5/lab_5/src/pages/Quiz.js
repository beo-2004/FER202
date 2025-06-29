import React, { useState, useEffect } from 'react';
import { Card, Button, ProgressBar, Alert, Badge, Modal, Container, Row, Col } from 'react-bootstrap';
import { questions } from '../data/newLists';
import './Quiz.css';

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [answeredQuestions, setAnsweredQuestions] = useState(new Set());
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [timeLeft, setTimeLeft] = useState(30);
  const [gameStarted, setGameStarted] = useState(false);

  const totalQuestions = questions.length;
  const progress = (currentQuestion / totalQuestions) * 100;

  useEffect(() => {
    let timer;
    if (gameStarted && timeLeft > 0 && !showResults) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else if (timeLeft === 0 && !showResults) {
      handleNextQuestion();
    }
    return () => clearTimeout(timer);
  }, [timeLeft, gameStarted, showResults]);

  const startGame = () => {
    setGameStarted(true);
    setTimeLeft(30);
  };

  const handleAnswerSelect = (answer) => {
    if (answeredQuestions.has(currentQuestion)) return;
    
    setSelectedAnswer(answer);
    const isAnswerCorrect = answer === questions[currentQuestion].answer;
    setIsCorrect(isAnswerCorrect);
    
    if (isAnswerCorrect) {
      setScore(score + 1);
    }
    
    setUserAnswers({ ...userAnswers, [currentQuestion]: answer });
    setAnsweredQuestions(new Set([...answeredQuestions, currentQuestion]));
    
    // Show explanation after a short delay
    setTimeout(() => {
      setShowExplanation(true);
    }, 500);
  };

  const handleNextQuestion = () => {
    setShowExplanation(false);
    setSelectedAnswer(null);
    setIsCorrect(null);
    
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setTimeLeft(30);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers({});
    setAnsweredQuestions(new Set());
    setScore(0);
    setShowResults(false);
    setShowExplanation(false);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setTimeLeft(30);
    setGameStarted(false);
  };

  const getScoreColor = () => {
    const percentage = (score / totalQuestions) * 100;
    if (percentage >= 80) return 'success';
    if (percentage >= 60) return 'warning';
    return 'danger';
  };

  const getScoreMessage = () => {
    const percentage = (score / totalQuestions) * 100;
    if (percentage >= 80) return '🎉 Excellent! You\'re a React expert!';
    if (percentage >= 60) return '👍 Good job! Keep learning!';
    return '📚 Keep studying! Practice makes perfect!';
  };

  if (!gameStarted) {
    return (
      <div className="quiz-container">
        <Container>
          <div className="quiz-welcome">
            <div className="welcome-card">
              <h1 className="welcome-title"> React Quiz Game</h1>
              <p className="welcome-subtitle">Test your React knowledge with our interactive quiz!</p>
              
              <div className="game-features">
                <div className="feature-item">
                  <span className="feature-icon">⏱️</span>
                  <span>30 seconds per question</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">📊</span>
                  <span>Instant feedback</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🎯</span>
                  <span>{totalQuestions} questions</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🏆</span>
                  <span>Score tracking</span>
                </div>
              </div>
              
              <Button 
                variant="primary" 
                size="lg" 
                className="start-btn"
                onClick={startGame}
              >
                🚀 Start Quiz
              </Button>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  if (showResults) {
    return (
      <div className="quiz-container">
        <Container>
          <div className="results-container">
            <Card className="results-card">
              <Card.Body className="text-center">
                <div className="results-header">
                  <h1 className="results-title">🏁 Quiz Complete!</h1>
                  <div className={`score-badge score-${getScoreColor()}`}>
                    <span className="score-number">{score}</span>
                    <span className="score-total">/{totalQuestions}</span>
                  </div>
                  <p className="score-message">{getScoreMessage()}</p>
                </div>
                
                <div className="results-breakdown">
                  <h4>Question Breakdown:</h4>
                  <div className="question-results">
                    {questions.map((q, index) => (
                      <div 
                        key={q.id} 
                        className={`question-result ${userAnswers[index] === q.answer ? 'correct' : 'incorrect'}`}
                      >
                        <span className="question-number">Q{index + 1}</span>
                        <span className="question-status">
                          {userAnswers[index] === q.answer ? '✅' : '❌'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="results-actions">
                  <Button variant="primary" onClick={resetQuiz} className="me-3">
                    🔄 Play Again
                  </Button>
                  <Button variant="outline-secondary" onClick={() => window.location.reload()}>
                    🏠 Back to Home
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        </Container>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];

  return (
    <div className="quiz-container">
      <Container>
        {/* Header */}
        <div className="quiz-header">
          <div className="quiz-info">
            <h2 className="quiz-title">🎯 Question {currentQuestion + 1} of {totalQuestions}</h2>
            <div className="quiz-stats">
              <Badge bg="primary" className="score-badge">
                Score: {score}/{currentQuestion + 1}
              </Badge>
              <Badge bg="warning" className="time-badge">
                ⏱️ {timeLeft}s
              </Badge>
            </div>
          </div>
          
          <ProgressBar 
            now={progress} 
            className="quiz-progress"
            variant="success"
          />
        </div>

        {/* Question Card */}
        <Card className="question-card">
          <Card.Body>
            <h3 className="question-text">{currentQ.question}</h3>
            
            <div className="options-grid">
              {currentQ.options.map((option, index) => (
                <Button
                  key={index}
                  variant={
                    answeredQuestions.has(currentQuestion)
                      ? option === currentQ.answer
                        ? 'success'
                        : option === selectedAnswer
                        ? 'danger'
                        : 'outline-secondary'
                      : 'outline-primary'
                  }
                  size="lg"
                  className={`option-btn ${
                    answeredQuestions.has(currentQuestion) ? 'disabled' : ''
                  }`}
                  onClick={() => handleAnswerSelect(option)}
                  disabled={answeredQuestions.has(currentQuestion)}
                >
                  <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                  <span className="option-text">{option}</span>
                </Button>
              ))}
            </div>

            {/* Feedback */}
            {isCorrect !== null && (
              <Alert 
                variant={isCorrect ? 'success' : 'danger'}
                className="feedback-alert"
              >
                <strong>
                  {isCorrect ? '✅ Correct!' : '❌ Incorrect!'}
                </strong>
                <br />
                {isCorrect ? 'Great job!' : `The correct answer is: ${currentQ.answer}`}
              </Alert>
            )}
          </Card.Body>
        </Card>

        {/* Explanation Modal */}
        <Modal show={showExplanation} onHide={() => setShowExplanation(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>💡 Explanation</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{currentQ.explanation}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleNextQuestion}>
              {currentQuestion < totalQuestions - 1 ? 'Next Question' : 'See Results'}
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
}