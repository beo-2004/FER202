import React, { useReducer, useState, useEffect } from "react";
import { Container, Card, Button, ProgressBar, Alert } from "react-bootstrap";
import { FaCheckCircle, FaTimesCircle, FaClock } from "react-icons/fa";

// Quiz data
const quizData = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    correctAnswer: 2,
  },
  {
    id: 2,
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: 1,
  },
  {
    id: 3,
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    correctAnswer: 1,
  },
];

// Reducer for quiz state management
function quizReducer(state, action) {
  switch (action.type) {
    case "START_QUIZ":
      return {
        ...state,
        isStarted: true,
        currentQuestion: 0,
        score: 0,
        showFeedback: false,
        timeLeft: 10,
      };
    case "ANSWER_QUESTION":
      const isCorrect = action.selectedAnswer === quizData[state.currentQuestion].correctAnswer;
      const newScore = isCorrect ? state.score + 1 : state.score;
      return {
        ...state,
        score: newScore,
        showFeedback: true,
        isCorrect,
        selectedAnswer: action.selectedAnswer,
      };
    case "NEXT_QUESTION":
      const nextQuestion = state.currentQuestion + 1;
      if (nextQuestion >= quizData.length) {
        // Quiz finished
        const highScore = Math.max(state.score, parseInt(localStorage.getItem("quizHighScore") || "0"));
        localStorage.setItem("quizHighScore", highScore.toString());
        return {
          ...state,
          isFinished: true,
          showFeedback: false,
          highScore,
        };
      }
      return {
        ...state,
        currentQuestion: nextQuestion,
        showFeedback: false,
        timeLeft: 10,
      };
    case "RESET_QUIZ":
      return {
        ...state,
        isStarted: false,
        isFinished: false,
        currentQuestion: 0,
        score: 0,
        showFeedback: false,
        timeLeft: 10,
      };
    case "UPDATE_TIMER":
      return {
        ...state,
        timeLeft: action.timeLeft,
      };
    default:
      return state;
  }
}

const initialState = {
  isStarted: false,
  isFinished: false,
  currentQuestion: 0,
  score: 0,
  showFeedback: false,
  isCorrect: false,
  selectedAnswer: null,
  timeLeft: 10,
  highScore: parseInt(localStorage.getItem("quizHighScore") || "0"),
};

function QuestionBank() {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  // Timer effect
  useEffect(() => {
    let timer;
    if (state.isStarted && !state.isFinished && !state.showFeedback) {
      timer = setInterval(() => {
        if (state.timeLeft > 0) {
          dispatch({ type: "UPDATE_TIMER", timeLeft: state.timeLeft - 1 });
        } else {
          // Time's up - auto answer as incorrect
          dispatch({ type: "ANSWER_QUESTION", selectedAnswer: -1 });
        }
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [state.isStarted, state.isFinished, state.showFeedback, state.timeLeft]);

  const handleStartQuiz = () => {
    dispatch({ type: "START_QUIZ" });
  };

  const handleAnswer = (selectedAnswer) => {
    dispatch({ type: "ANSWER_QUESTION", selectedAnswer });
  };

  const handleNextQuestion = () => {
    dispatch({ type: "NEXT_QUESTION" });
  };

  const handleResetQuiz = () => {
    dispatch({ type: "RESET_QUIZ" });
  };

  const currentQuestionData = quizData[state.currentQuestion];

  return (
    <Container className="mt-4">
      <Card>
        <Card.Header>
          <h2 className="text-center">Quiz App</h2>
        </Card.Header>
        <Card.Body>
          {!state.isStarted && !state.isFinished && (
            <div className="text-center">
              <h4>Welcome to the Quiz!</h4>
              <p>Test your knowledge with {quizData.length} questions.</p>
              <p>Each question has 10 seconds to answer.</p>
              {state.highScore > 0 && (
                <Alert variant="info">
                  <strong>High Score: {state.highScore}/{quizData.length}</strong>
                </Alert>
              )}
              <Button variant="primary" size="lg" onClick={handleStartQuiz}>
                Start Quiz
              </Button>
            </div>
          )}

          {state.isStarted && !state.isFinished && (
            <div>
              {/* Progress */}
              <div className="mb-3">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span>
                    Question {state.currentQuestion + 1} of {quizData.length}
                  </span>
                  <span className="d-flex align-items-center">
                    <FaClock className="me-2" />
                    <span
                      className={
                        state.timeLeft <= 5 ? "text-danger fw-bold" : ""
                      }
                    >
                      {state.timeLeft}s
                    </span>
                  </span>
                </div>
                <ProgressBar
                  now={((state.currentQuestion + 1) / quizData.length) * 100}
                  variant="primary"
                />
              </div>

              {/* Timer Progress */}
              <div className="mb-3">
                <ProgressBar
                  now={(state.timeLeft / 10) * 100}
                  variant={state.timeLeft <= 5 ? "danger" : "warning"}
                  className="mb-2"
                />
              </div>

              {/* Question */}
              <Card className="mb-3">
                <Card.Body>
                  <h5>{currentQuestionData.question}</h5>
                  <div className="d-grid gap-2">
                    {currentQuestionData.options.map((option, index) => (
                      <Button
                        key={index}
                        variant="outline-primary"
                        onClick={() => handleAnswer(index)}
                        disabled={state.showFeedback}
                        className={
                          state.showFeedback
                            ? index === currentQuestionData.correctAnswer
                              ? "border-success bg-success text-white"
                              : index === state.selectedAnswer &&
                                index !== currentQuestionData.correctAnswer
                              ? "border-danger bg-danger text-white"
                              : ""
                            : ""
                        }
                      >
                        {option}
                      </Button>
                    ))}
                  </div>
                </Card.Body>
              </Card>

              {/* Feedback */}
              {state.showFeedback && (
                <Alert
                  variant={state.isCorrect ? "success" : "danger"}
                  className="d-flex align-items-center"
                >
                  {state.isCorrect ? (
                    <FaCheckCircle className="me-2" />
                  ) : (
                    <FaTimesCircle className="me-2" />
                  )}
                  {state.isCorrect ? (
                    "Correct! 🎉"
                  ) : (
                    <span>
                      Incorrect! The correct answer is{" "}
                      <strong>
                        {currentQuestionData.options[currentQuestionData.correctAnswer]}
                      </strong>
                    </span>
                  )}
                </Alert>
              )}

              {/* Next Button */}
              {state.showFeedback && (
                <div className="text-center">
                  <Button
                    variant="primary"
                    onClick={handleNextQuestion}
                    className="mt-2"
                  >
                    {state.currentQuestion + 1 === quizData.length
                      ? "Finish Quiz"
                      : "Next Question"}
                  </Button>
                </div>
              )}
            </div>
          )}

          {state.isFinished && (
            <div className="text-center">
              <h4>Quiz Completed!</h4>
              <Alert variant="info" className="mb-3">
                <h5>
                  Your Score: {state.score}/{quizData.length}
                </h5>
                <p>
                  Percentage: {Math.round((state.score / quizData.length) * 100)}%
                </p>
              </Alert>
              
              {state.score === state.highScore && state.score > 0 && (
                <Alert variant="success" className="mb-3">
                  <h6>🎉 New High Score! 🎉</h6>
                </Alert>
              )}
              
              {state.highScore > 0 && (
                <Alert variant="secondary" className="mb-3">
                  <strong>High Score: {state.highScore}/{quizData.length}</strong>
                </Alert>
              )}

              <Button variant="primary" onClick={handleResetQuiz}>
                Try Again
              </Button>
            </div>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
}

export default QuestionBank;
