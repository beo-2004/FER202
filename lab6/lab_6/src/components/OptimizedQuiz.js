import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAnswer, checkAnswers, clearQuiz, addQuestionDirect } from '../store/quizSlice';
import './OptimizedQuiz.css';

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="nav-container">
        <a href="#" className="nav-link active">Home</a>
        <a href="#" className="nav-link">About</a>
        <a href="#" className="nav-link">News</a>
        <a href="#" className="nav-link">Quiz</a>
        <a href="#" className="nav-link">Contact</a>
      </div>
    </nav>
  );
};

const OptimizedQuiz = () => {
  const dispatch = useDispatch();
  const { questions, userAnswers, results, score, isLoading, showResults } = useSelector(state => state.quiz);
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showReview, setShowReview] = useState(false);
  const [showAnswerReview, setShowAnswerReview] = useState(false);

  useEffect(() => {
    // Auto-load questions when component mounts
    if (questions.length === 0) {
      const sampleQuestions = [
        {
          id: 1,
          question: "Inside which HTML element do we put the JavaScript?",
          options: ["javascript", "scripting", "script", "js"],
          correctAnswer: 2
        },
        {
          id: 2,
          question: "What are variables used for in JavaScript Programs?",
          options: [
            "Storing numbers, dates, or other values",
            "Varying randomly",
            "Causing high-school algebra flashbacks",
            "None of these"
          ],
          correctAnswer: 0
        },
        {
          id: 3,
          question: "Which of the following can't be done with client-side JavaScript?",
          options: [
            "Validating a form",
            "Sending a form's contents by email",
            "Storing the form's contents to a database file on the server",
            "None of the above"
          ],
          correctAnswer: 2
        },
        {
          id: 4,
          question: "How do you write 'Hello World' in an alert box?",
          options: [
            "msg('Hello World')",
            "alert('Hello World')",
            "msgBox('Hello World')",
            "alertBox('Hello World')"
          ],
          correctAnswer: 1
        },
        {
          id: 5,
          question: "How do you create a function in JavaScript?",
          options: [
            "function myFunction()",
            "function:myFunction()",
            "function = myFunction()",
            "function => myFunction()"
          ],
          correctAnswer: 0
        },
        {
          id: 6,
          question: "How do you call a function named 'myFunction'?",
          options: [
            "call myFunction()",
            "call function myFunction()",
            "myFunction()",
            "execute myFunction()"
          ],
          correctAnswer: 2
        },
        {
          id: 7,
          question: "How to write an IF statement in JavaScript?",
          options: [
            "if i == 5 then",
            "if (i == 5)",
            "if i = 5 then",
            "if i = 5"
          ],
          correctAnswer: 1
        },
        {
          id: 8,
          question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
          options: [
            "if (i != 5)",
            "if i <> 5",
            "if (i <> 5)",
            "if i =! 5 then"
          ],
          correctAnswer: 0
        },
        {
          id: 9,
          question: "How does a WHILE loop start?",
          options: [
            "while i = 1 to 10",
            "while (i <= 10; i++)",
            "while (i <= 10)",
            "while (i <= 10; i++)"
          ],
          correctAnswer: 2
        },
        {
          id: 10,
          question: "How does a FOR loop start?",
          options: [
            "for (i = 0; i <= 5)",
            "for (i = 0; i <= 5; i++)",
            "for i = 1 to 5",
            "for (i <= 5; i++)"
          ],
          correctAnswer: 1
        }
      ];
      
      sampleQuestions.forEach(q => {
        dispatch(addQuestionDirect(q));
      });
    }
  }, [dispatch, questions.length]);

  const handleAnswerSelect = (answerIndex) => {
    dispatch(selectAnswer({ questionIndex: currentQuestionIndex, answerIndex }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleFirst = () => {
    setCurrentQuestionIndex(0);
  };

  const handleLast = () => {
    setCurrentQuestionIndex(questions.length - 1);
  };

  const handleSubmit = () => {
    const answeredQuestions = Object.keys(userAnswers).length;
    if (answeredQuestions < questions.length) {
      alert(`Please answer all questions! You've answered ${answeredQuestions} out of ${questions.length} questions.`);
      return;
    }
    dispatch(checkAnswers());
  };

  const handleQuizReview = () => {
    setShowReview(!showReview);
    setShowAnswerReview(false);
  };

  const handleAnswerReview = () => {
    setShowAnswerReview(!showAnswerReview);
    setShowReview(false);
  };

  const handleClearQuiz = () => {
    dispatch(clearQuiz());
    setCurrentQuestionIndex(0);
    setShowReview(false);
    setShowAnswerReview(false);
  };

  const handleQuestionClick = (questionIndex) => {
    setCurrentQuestionIndex(questionIndex);
    setShowReview(false);
    setShowAnswerReview(false);
  };

  const getQuestionStatus = (questionIndex) => {
    if (userAnswers[questionIndex] !== undefined) {
      return 'answered';
    }
    return 'unanswered';
  };

  if (questions.length === 0) {
    return (
      <>
        <Navigation />
        <div className="quiz-container">
          <div className="quiz-header">
            <h1>JavaScript Quiz</h1>
            <p>Master JavaScript with interactive quizzes</p>
          </div>
          <div className="quiz-content">
            <div className="loading-card">
              <div className="loading-spinner"></div>
              <p>Loading questions...</p>
            </div>
          </div>
        </div>
      </>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const userAnswer = userAnswers[currentQuestionIndex];

  return (
    <>
      <Navigation />
      <div className="quiz-container">
        <div className="quiz-header">
          <h1>JavaScript Quiz</h1>
          <div className="progress-container">
            <div className="progress-info">
              <span className="progress-label">Progress</span>
              <span className="progress-percentage">{Math.round(((currentQuestionIndex + 1) / questions.length) * 100)}%</span>
            </div>
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
            <div className="progress-text">
              Question {currentQuestionIndex + 1} of {questions.length}
            </div>
          </div>
        </div>
        
        <div className="quiz-content">
          {!showReview && !showAnswerReview ? (
            <>
              <div className="question-card">
                <div className="question-header">
                  <span className="question-number">Question {currentQuestionIndex + 1}</span>
                </div>
                
                <h2 className="question-text">{currentQuestion.question}</h2>
                
                <div className="options-list">
                  {currentQuestion.options.map((option, index) => (
                    <div 
                      key={index} 
                      className={`option-card ${userAnswer === index ? 'selected' : ''}`}
                      onClick={() => handleAnswerSelect(index)}
                    >
                      <div className="option-radio">
                        <input
                          type="radio"
                          name={`question-${currentQuestionIndex}`}
                          checked={userAnswer === index}
                          onChange={() => handleAnswerSelect(index)}
                        />
                        <span className="radio-custom"></span>
                      </div>
                      <span className="option-text">{option}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="navigation-controls">
                <button onClick={handleFirst} className="nav-btn secondary">
                  <span>⟪</span> First
                </button>
                <button onClick={handlePrev} className="nav-btn secondary" disabled={currentQuestionIndex === 0}>
                  <span>‹</span> Previous
                </button>
                <button onClick={handleNext} className="nav-btn primary" disabled={currentQuestionIndex === questions.length - 1}>
                  Next <span>›</span>
                </button>
                <button onClick={handleLast} className="nav-btn secondary">
                  Last <span>⟫</span>
                </button>
              </div>

              <div className="action-controls">
                <button onClick={handleQuizReview} className="action-btn review-btn">
                  📋 Quiz Review
                </button>
                <button onClick={handleSubmit} className="action-btn submit-btn">
                  🚀 Submit Quiz
                </button>
              </div>
            </>
          ) : showReview ? (
            <div className="review-section">
              <div className="section-header">
                <h2>Quiz Review</h2>
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
                  ></div>
                </div>
                <div className="progress-text">
                  {currentQuestionIndex + 1} of {questions.length}
                </div>
              </div>
              <p className="review-description">Click on any question to navigate directly to it</p>
              
              <div className="question-grid">
                {questions.map((_, index) => (
                  <button
                    key={index}
                    className={`question-status-btn ${getQuestionStatus(index)}`}
                    onClick={() => handleQuestionClick(index)}
                  >
                    <span className="question-number">Q{index + 1}</span>
                    <span className="question-status">
                      {getQuestionStatus(index) === 'answered' ? '✓ Answered' : '○ Unanswered'}
                    </span>
                  </button>
                ))}
              </div>
              
              <div className="action-controls">
                <button onClick={() => setShowReview(false)} className="action-btn primary">
                  ← Back to Quiz
                </button>
                <button onClick={handleSubmit} className="action-btn submit-btn">
                  🚀 Submit Quiz
                </button>
              </div>
            </div>
          ) : (
            <div className="answer-review-section">
              <div className="section-header">
                <h2>Answer Review</h2>
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
                  ></div>
                </div>
                <div className="progress-text">
                  {currentQuestionIndex + 1} of {questions.length}
                </div>
              </div>
              <p className="review-description">Review your answers and see correct solutions</p>
              
              <div className="answer-review-list">
                {questions.map((question, questionIndex) => {
                  const userAnswer = userAnswers[questionIndex];
                  const isCorrect = userAnswer === question.correctAnswer;
                  
                  return (
                    <div 
                      key={questionIndex} 
                      className={`answer-review-card ${isCorrect ? 'correct' : 'incorrect'}`}
                    >
                      <div className="answer-review-header">
                        <span className="question-number">Question {questionIndex + 1}</span>
                        <span className={`answer-status ${isCorrect ? 'correct' : 'incorrect'}`}>
                          {isCorrect ? '✓ Correct' : '✗ Incorrect'}
                        </span>
                      </div>
                      
                      <h3 className="question-text">{question.question}</h3>
                      
                      <div className="answer-options">
                        {question.options.map((option, optionIndex) => (
                          <div 
                            key={optionIndex} 
                            className={`answer-option ${optionIndex === question.correctAnswer ? 'correct-answer' : ''} ${optionIndex === userAnswer && !isCorrect ? 'wrong-answer' : ''}`}
                          >
                            <span className="option-letter">{String.fromCharCode(65 + optionIndex)}</span>
                            <span className="option-text">{option}</span>
                            {optionIndex === question.correctAnswer && (
                              <span className="correct-indicator">✓ Correct Answer</span>
                            )}
                            {optionIndex === userAnswer && !isCorrect && (
                              <span className="wrong-indicator">✗ Your Answer</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <div className="action-controls">
                <button onClick={() => setShowAnswerReview(false)} className="action-btn primary">
                  ← Back to Quiz
                </button>
                <button onClick={handleSubmit} className="action-btn submit-btn">
                  🚀 Submit Quiz
                </button>
              </div>
            </div>
          )}

          {showResults && results && (
            <div className="results-section">
              <div className="section-header">
                <h2>🎉 Quiz Complete!</h2>
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
                  ></div>
                </div>
                <div className="progress-text">
                  {currentQuestionIndex + 1} of {questions.length}
                </div>
              </div>
              <div className="results-header">
                <div className="score-display">
                  <div className="score-circle">
                    <span className="score-number">{score?.toFixed(0)}%</span>
                  </div>
                  <p className="score-text">
                    You got {results.filter(r => r.isCorrect).length} out of {questions.length} questions correct!
                  </p>
                </div>
              </div>
              
              <div className="results-breakdown">
                <h3>Question Breakdown</h3>
                <div className="breakdown-grid">
                  {results.map((result, index) => (
                    <div 
                      key={index} 
                      className={`breakdown-item ${result.isCorrect ? 'correct' : 'incorrect'}`}
                    >
                      <span className="question-number">Q{index + 1}</span>
                      <span className="result-status">
                        {result.isCorrect ? '✓' : '✗'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="action-controls">
                <button onClick={handleClearQuiz} className="action-btn primary">
                  🔄 Start New Quiz
                </button>
                <button onClick={handleAnswerReview} className="action-btn review-btn">
                  📋 Review Answers
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default OptimizedQuiz;