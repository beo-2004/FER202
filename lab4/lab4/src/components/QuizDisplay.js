import React, { useContext } from 'react';
import QuizContext from './QuizProvider';

const QuizDisplay = () => {
  const { quizData, currentQuestion, selectedAnswer, handleSelectAnswer, answerStatus } = useContext(QuizContext);

  if (currentQuestion >= quizData.length) {
    return null; 
  }

  const getOptionStyle = (option) => {
    const baseStyle = {
      border: '2px solid #d3d3d3',
      borderRadius: '8px',
      padding: '16px',
      transition: 'all 0.3s',
      cursor: 'pointer'
    };

    if (!answerStatus) {
      return selectedAnswer === option
        ? { ...baseStyle, borderColor: '#a3a3a3', backgroundColor: '#e5e5e5' }
        : baseStyle;
    }

    const isCorrect = option === quizData[currentQuestion].correctAnswer;
    const isSelected = option === selectedAnswer;

    if (isCorrect) {
      return { ...baseStyle, borderColor: '#4caf50', backgroundColor: '#e8f5e9', color: '#2e7d32', fontWeight: 'bold' };
    }
    if (isSelected && !isCorrect) {
      return { ...baseStyle, borderColor: '#f44336', backgroundColor: '#ffebee', color: '#c62828' };
    }
    
    return { ...baseStyle, opacity: 0.6, cursor: 'not-allowed' };
  };

  return (
    <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(4px)', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', borderRadius: '16px', padding: '24px', maxWidth: '576px', margin: 'auto' }}>
      <div>
        <div style={{ textAlign: 'center', marginBottom: '24px', backgroundColor: 'rgba(243, 244, 246, 0.8)', padding: '16px', borderRadius: '12px', border: '2px solid #e5e7eb' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '8px' }}>
            Question {currentQuestion + 1}/{quizData.length}
          </h2>
          <p style={{ fontSize: '20px', fontWeight: '600', color: '#374151', marginBottom: '16px' }}>
            {quizData[currentQuestion].question}
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {quizData[currentQuestion].options.map((option, index) => {
            return (
              <div
                key={index}
                style={getOptionStyle(option)}
                onClick={() => !answerStatus && handleSelectAnswer(option)}
              >
                <label style={{ display: 'flex', alignItems: 'center', width: '100%', cursor: !answerStatus ? 'pointer' : 'not-allowed' }}>
                  <input
                    type="radio"
                    name={`answer-${currentQuestion}`}
                    value={option}
                    checked={selectedAnswer === option}
                    onChange={() => handleSelectAnswer(option)}
                    disabled={!!answerStatus}
                    style={{ marginRight: '16px', height: '20px', width: '20px' }}
                  />
                  <span style={{ fontWeight: '500' }}>{option}</span>
                </label>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default QuizDisplay;