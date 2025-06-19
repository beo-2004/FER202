import React, { Component } from 'react';
import Question from './Question';
import Score from './Score';

class QuizApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          id: 1,
          question: 'What is the capital of France?',
          options: ['Paris', 'London', 'Berlin', 'Madrid'],
          answer: 'Paris',
        },
        {
          id: 2,
          question: 'What is the largest planet in our solar system?',
          options: ['Jupiter', 'Saturn', 'Mars', 'Earth'],
          answer: 'Jupiter',
        },
        {
          id: 3,
          question: 'What is the capital of Germany?',
          options: ['Berlin', 'Paris', 'London', 'Madrid'],
          answer: 'Berlin',
        },
        {
          id: 4,
          question: 'What is the capital of Japan?',
          options: ['Tokyo', 'Beijing', 'Seoul', 'Bangkok'],
          answer: 'Tokyo',
        },
        
      ],
      currentQuestion: 0,
      score: 0,
      quizEnd: false,
      showCorrectAnswer: false,
      userAnswer: '',
      isCorrect: false,
    };
  }

  handleAnswer = (selected) => {
    const { questions, currentQuestion, score } = this.state;
    const isCorrect = selected === questions[currentQuestion].answer;
    
    this.setState({
      score: isCorrect ? score + 1 : score,
      showCorrectAnswer: true,
      userAnswer: selected,
      isCorrect: isCorrect,
    });

    // Chuyển sang câu hỏi tiếp theo sau 3 giây
    setTimeout(() => {
      this.setState({
        currentQuestion: currentQuestion + 1,
        showCorrectAnswer: false,
        userAnswer: '',
        isCorrect: false,
      }, () => {
        if (this.state.currentQuestion >= questions.length) {
          this.setState({ quizEnd: true });
        }
      });
    }, 3000);
  };

  handleReplay = () => {
    this.setState({
      currentQuestion: 0,
      score: 0,
      quizEnd: false,
    });
  };

  render() {
    const { questions, currentQuestion, score, quizEnd, showCorrectAnswer, userAnswer, isCorrect } = this.state;
    return (
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '20px',
        fontFamily: 'Arial, sans-serif'
      }}>
        {!quizEnd && currentQuestion < questions.length ? (
          <div>
            <div style={{
              textAlign: 'center',
              marginBottom: '20px',
              background: 'rgba(255,255,255,0.1)',
              padding: '15px',
              borderRadius: '15px',
              border: '2px solid #ff6b6b'
            }}>
              <h1 style={{
                color: '#fff',
                fontSize: '2.5em',
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                margin: '0',
                background: 'linear-gradient(45deg, #ff6b6b, #feca57)',
                padding: '10px',
                borderRadius: '15px',
                border: '2px solid #fff'
              }}>
                🎮 Quiz Game 🎮
              </h1>
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '20px',
                marginTop: '15px'
              }}>
                <span style={{
                  color: '#fff',
                  fontSize: '1.2em',
                  background: 'rgba(255,255,255,0.2)',
                  padding: '8px 15px',
                  borderRadius: '10px',
                  border: '2px solid #48dbfb'
                }}>
                  Question: {currentQuestion + 1}/{questions.length}
                </span>
                <span style={{
                  color: '#fff',
                  fontSize: '1.2em',
                  background: 'rgba(255,255,255,0.2)',
                  padding: '8px 15px',
                  borderRadius: '10px',
                  border: '2px solid #ff9ff3'
                }}>
                  Score: {score}
                </span>
              </div>
            </div>
            <Question
              question={questions[currentQuestion].question}
              options={questions[currentQuestion].options}
              correctAnswer={questions[currentQuestion].answer}
              qid={currentQuestion + 1}
              onAnswer={this.handleAnswer}
              showCorrectAnswer={showCorrectAnswer}
              userAnswer={userAnswer}
              isCorrect={isCorrect}
            />
          </div>
        ) : (
          <Score score={score} total={questions.length} onReplay={this.handleReplay} />
        )}
      </div>
    );
  }
}

export default QuizApp;