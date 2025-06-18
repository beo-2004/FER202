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
    };
  }

  handleAnswer = (selected) => {
    const { questions, currentQuestion, score } = this.state;
    const isCorrect = selected === questions[currentQuestion].answer;
    this.setState({
      score: isCorrect ? score + 1 : score,
      currentQuestion: currentQuestion + 1,
    }, () => {
      if (this.state.currentQuestion >= questions.length) {
        this.setState({ quizEnd: true });
      }
    });
  };

  handleReplay = () => {
    this.setState({
      currentQuestion: 0,
      score: 0,
      quizEnd: false,
    });
  };

  render() {
    const { questions, currentQuestion, score, quizEnd } = this.state;
    return (
      <div>
        {!quizEnd && currentQuestion < questions.length ? (
          <Question
            question={questions[currentQuestion].question}
            options={questions[currentQuestion].options}
            qid={currentQuestion + 1}
            onAnswer={this.handleAnswer}
          />
        ) : (
          <Score score={score} total={questions.length} onReplay={this.handleReplay} />
        )}
      </div>
    );
  }
}

export default QuizApp;