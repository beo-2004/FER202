import React from 'react';

function Question({ question, options, correctAnswer, qid, onAnswer, showCorrectAnswer, userAnswer, isCorrect }) {
  return (
    <div style={{ 
      maxWidth: 600, 
      margin: '30px auto', 
      textAlign: 'left',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '30px',
      borderRadius: '20px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
      border: '3px solid #ff6b6b'
    }}>
      <h2 style={{
        color: '#fff',
        textAlign: 'center',
        fontSize: '2.5em',
        textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
        marginBottom: '20px',
        background: 'linear-gradient(45deg, #ff6b6b, #feca57)',
        padding: '10px',
        borderRadius: '15px',
        border: '2px solid #fff'
      }}>
        🎯 Question {qid} 🎯
      </h2>
      
      <h3 style={{
        color: '#fff',
        fontSize: '1.8em',
        textAlign: 'center',
        marginBottom: '30px',
        textShadow: '1px 1px 2px rgba(0,0,0,0.7)',
        background: 'rgba(255,255,255,0.1)',
        padding: '15px',
        borderRadius: '10px',
        border: '2px solid #48dbfb'
      }}>
        {question}
      </h3>
      
      <div style={{ 
        background: 'rgba(255,255,255,0.95)', 
        borderRadius: '15px', 
        boxShadow: '0 8px 25px rgba(0,0,0,0.2)', 
        padding: '25px',
        border: '3px solid #ff9ff3'
      }}>
        {options.map((opt, idx) => {
          let buttonStyle = {
            width: '100%',
            padding: '15px 20px',
            fontSize: '18px',
            background: `linear-gradient(45deg, ${idx % 4 === 0 ? '#ff6b6b' : idx % 4 === 1 ? '#48dbfb' : idx % 4 === 2 ? '#feca57' : '#ff9ff3'}, ${idx % 4 === 0 ? '#ee5a24' : idx % 4 === 1 ? '#0abde3' : idx % 4 === 2 ? '#ff9f43' : '#f368e0'})`,
            color: '#fff',
            border: 'none',
            borderRadius: '12px',
            cursor: showCorrectAnswer ? 'default' : 'pointer',
            fontWeight: 'bold',
            textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
            transition: 'all 0.3s ease',
            border: '2px solid #fff',
            opacity: showCorrectAnswer ? 0.6 : 1
          };

          // Highlight đáp án đúng và sai
          if (showCorrectAnswer) {
            if (opt === correctAnswer) {
              buttonStyle.background = 'linear-gradient(45deg, #00d2d3, #48dbfb)';
              buttonStyle.border = '3px solid #00d2d3';
              buttonStyle.boxShadow = '0 6px 20px rgba(0,210,211,0.4)';
              buttonStyle.opacity = 1;
            } else if (opt === userAnswer && !isCorrect) {
              buttonStyle.background = 'linear-gradient(45deg, #ff6b6b, #ee5a24)';
              buttonStyle.border = '3px solid #ff6b6b';
              buttonStyle.boxShadow = '0 6px 20px rgba(255,107,107,0.4)';
              buttonStyle.opacity = 1;
            }
          }

          return (
            <div key={idx} style={{ margin: '15px 0' }}>
              <button
                style={buttonStyle}
                onMouseEnter={!showCorrectAnswer ? (e) => {
                  e.target.style.transform = 'scale(1.05)';
                  e.target.style.boxShadow = '0 6px 20px rgba(0,0,0,0.3)';
                } : undefined}
                onMouseLeave={!showCorrectAnswer ? (e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
                } : undefined}
                onClick={!showCorrectAnswer ? () => onAnswer(opt) : undefined}
                disabled={showCorrectAnswer}
              >
                {opt}
                {showCorrectAnswer && opt === correctAnswer && (
                  <span style={{ marginLeft: '10px', fontSize: '1.2em' }}>✅</span>
                )}
                {showCorrectAnswer && opt === userAnswer && !isCorrect && (
                  <span style={{ marginLeft: '10px', fontSize: '1.2em' }}>❌</span>
                )}
              </button>
            </div>
          );
        })}
      </div>

      {/* Hiển thị thông báo kết quả */}
      {showCorrectAnswer && (
        <div style={{
          background: isCorrect ? 'rgba(0,210,211,0.9)' : 'rgba(255,107,107,0.9)',
          color: '#fff',
          padding: '20px',
          borderRadius: '15px',
          marginTop: '20px',
          textAlign: 'center',
          border: '3px solid #fff',
          boxShadow: '0 8px 25px rgba(0,0,0,0.3)'
        }}>
          <h3 style={{ margin: '0 0 10px 0', fontSize: '1.8em' }}>
            {isCorrect ? '🎉 Correct! 🎉' : '😔 Wrong Answer! 😔'}
          </h3>
          {!isCorrect && (
            <p style={{ fontSize: '1.3em', margin: '10px 0' }}>
              <strong>Your answer:</strong> {userAnswer}<br/>
              <strong>Correct answer:</strong> {correctAnswer}
            </p>
          )}
          <p style={{ fontSize: '1.1em', margin: '10px 0 0 0' }}>
            Next question in 3 seconds... ⏰
          </p>
        </div>
      )}
    </div>
  );
}

export default Question;
