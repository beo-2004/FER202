import React from 'react';
import QuizContext, { QuizProvider } from './components/QuizProvider';
import QuizDisplay from './components/QuizDisplay';
import Score from './components/Score';

const AppContent = () => {
  const { quizData, currentQuestion, score, setCurrentQuestion, setScore } = React.useContext(QuizContext);
  const [quizEnd, setQuizEnd] = React.useState(false);

  React.useEffect(() => {
    if (currentQuestion >= quizData.length && quizData.length > 0) {
      setQuizEnd(true);
    }
  }, [currentQuestion, quizData.length]);

  const handleReplay = () => {
    setQuizEnd(false);
    setScore(0);
    setCurrentQuestion(0);
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)', 
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
        {!quizEnd ? (
          <div>
            <div style={{
              textAlign: 'center',
              marginBottom: '20px',
              background: 'rgba(255,255,255,0.8)',
              padding: '15px',
              borderRadius: '15px',
              border: '2px solid #d3d3d3'
            }}>
              <h1 style={{
                color: '#4a4a4a',
                fontSize: '2.5em',
                textShadow: '1px 1px 3px rgba(0,0,0,0.1)',
                margin: '0',
                background: 'linear-gradient(45deg, #c0c0c0, #d3d3d3)',
                padding: '10px',
                borderRadius: '15px',
                border: '2px solid #e0e0e0'
              }}>
                🎓 Quiz Game 🎓
              </h1>
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '20px',
                marginTop: '15px'
              }}>
                <span style={{
                  color: '#4a4a4a',
                  fontSize: '1.2em',
                  background: 'rgba(255,255,255,0.5)',
                  padding: '8px 15px',
                  borderRadius: '10px',
                  border: '2px solid #d3d3d3'
                }}>
                  Question: {quizData.length > 0 ? currentQuestion + 1 : 0}/{quizData.length}
                </span>
                <span style={{
                  color: '#4a4a4a',
                  fontSize: '1.2em',
                  background: 'rgba(255,255,255,0.5)',
                  padding: '8px 15px',
                  borderRadius: '10px',
                  border: '2px solid #d3d3d3'
                }}>
                  Score: {score}
                </span>
              </div>
            </div>
            <QuizDisplay />
          </div>
        ) : (
          <Score score={score} total={quizData.length} onReplay={handleReplay} />
        )}
    </div>
  );
}

const App = () => {
  return (
    <QuizProvider>
      <AppContent />
    </QuizProvider>
  );
};

export default App;