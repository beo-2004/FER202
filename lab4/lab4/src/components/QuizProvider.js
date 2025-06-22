import React, { createContext, useState } from 'react';
import { quizData } from './quizData';

const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [quizDataState, setQuizData] = useState(quizData);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);

  const checkAnswer = () => {
    if (selectedAnswer === quizDataState[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
    setSelectedAnswer('');
  };

  return (
    <QuizContext.Provider value={{ quizData: quizDataState, currentQuestion, selectedAnswer, setSelectedAnswer, checkAnswer, score, setQuizData }}>
      {children}
    </QuizContext.Provider>
  );
};

export default QuizContext;