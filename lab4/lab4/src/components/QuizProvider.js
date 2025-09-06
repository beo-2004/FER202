import React, { createContext, useState, useCallback } from 'react';
import { quizData } from './quizData';
const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [quizDataState, setQuizData] = useState(quizData);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [answerStatus, setAnswerStatus] = useState(null); // null, 'correct', 'incorrect'

  const handleSelectAnswer = useCallback((answer) => {
    if (answerStatus) return; // Không cho phép thay đổi đáp án sau khi đã chọn

    setSelectedAnswer(answer);

    const isCorrect = answer === quizDataState[currentQuestion].correctAnswer;
    if (isCorrect) {
      setScore(prevScore => prevScore + 1);
      setAnswerStatus('correct');
    } else {
      setAnswerStatus('incorrect');
    }

    // Tự động chuyển câu hỏi sau một khoảng thời gian để hiển thị phản hồi
    setTimeout(() => {
      setCurrentQuestion(prevCurrentQuestion => prevCurrentQuestion + 1);
      setSelectedAnswer('');
      setAnswerStatus(null);
    }, 1000); // chờ 1.0 giây
  }, [answerStatus, currentQuestion, quizDataState]);

  return (
    <QuizContext.Provider value={{ 
      quizData: quizDataState, 
      currentQuestion, 
      selectedAnswer, 
      score, 
      answerStatus,
      handleSelectAnswer, 
      setQuizData, 
      setCurrentQuestion, 
      setScore 
    }}>
      {children}
    </QuizContext.Provider>
  );
};

export default QuizContext;