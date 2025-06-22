import React, { useContext } from 'react';
import QuizContext from './QuizProvider';

const QuizDisplay = () => {
  const { quizData, currentQuestion, selectedAnswer, setSelectedAnswer, checkAnswer, score } = useContext(QuizContext);

  return (
    <div className="bg-white/70 backdrop-blur-sm shadow-2xl shadow-indigo-200/50 rounded-2xl p-6 md:p-8">
      {currentQuestion < quizData.length ? (
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-indigo-800 mb-2">Question {currentQuestion + 1}/{quizData.length}</h2>
          <p className="text-lg md:text-xl font-semibold text-gray-800 mb-6">{quizData[currentQuestion].question}</p>
          <div className="space-y-3">
            {quizData[currentQuestion].answers.map((option, index) => {
              const isSelected = selectedAnswer === option;
              return (
                <div key={index} 
                  className={`border-2 rounded-lg p-4 transition-all duration-300 ${isSelected ? 'border-indigo-500 bg-indigo-100/50 shadow-md' : 'border-gray-200 hover:border-indigo-400 hover:bg-indigo-50/50'}`}>
                  <label className="flex items-center w-full cursor-pointer">
                    <input
                      type="radio"
                      name="answer"
                      value={option}
                      checked={isSelected}
                      onChange={(e) => setSelectedAnswer(e.target.value)}
                      className="mr-4 h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                    />
                    <span className="font-medium text-gray-700">{option}</span>
                  </label>
                </div>
              );
            })}
          </div>
          <button onClick={checkAnswer} 
            className="mt-8 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg transition-transform duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-lg">
            Next
          </button>
        </div>
      ) : (
        <div className="text-center py-8">
          <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">Quiz Completed!</h2>
          <p className="text-2xl text-center mt-4 text-gray-600">Your score: <span className="font-bold text-indigo-700">{score}</span> / {quizData.length}</p>
        </div>
      )}
    </div>
  );
};

export default QuizDisplay;