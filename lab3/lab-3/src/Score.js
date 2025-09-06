import React from 'react';

function Score({ score, total, onReplay }) {
  const percentage = (score / total) * 100;
  const getScoreColor = () => {
    if (percentage >= 80) return '#00d2d3';
    if (percentage >= 60) return '#feca57';
    if (percentage >= 40) return '#ff9f43';
    return '#ff6b6b';
  };

  const getScoreEmoji = () => {
    if (percentage >= 80) return '🎉';
    if (percentage >= 60) return '😊';
    if (percentage >= 40) return '😐';
    return '😢';
  };

  return (
    <div style={{ 
      maxWidth: 500, 
      margin: '60px auto', 
      textAlign: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '40px',
      borderRadius: '25px',
      boxShadow: '0 15px 35px rgba(0,0,0,0.3)',
      border: '4px solid #ff6b6b'
    }}>
      <h2 style={{
        color: '#fff',
        fontSize: '3em',
        textShadow: '3px 3px 6px rgba(0,0,0,0.5)',
        marginBottom: '20px',
        background: 'linear-gradient(45deg, #ff6b6b, #feca57)',
        padding: '15px',
        borderRadius: '20px',
        border: '3px solid #fff'
      }}>
        🏆 Quiz Ended! 🏆
      </h2>
      
      <div style={{
        background: 'rgba(255,255,255,0.95)',
        borderRadius: '20px',
        padding: '30px',
        margin: '20px 0',
        border: '3px solid #48dbfb',
        boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
      }}>
        <h3 style={{
          fontSize: '2.5em',
          color: getScoreColor(),
          marginBottom: '15px',
          textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
          fontWeight: 'bold'
        }}>
          {getScoreEmoji()} Your Score: {score} {getScoreEmoji()}
        </h3>
        
        <p style={{
          fontSize: '1.5em',
          color: '#2c3e50',
          marginBottom: '20px',
          fontWeight: 'bold'
        }}>
          Total Questions: {total}
        </p>
        
        <div style={{
          background: `linear-gradient(90deg, ${getScoreColor()}, #ff9ff3)`,
          height: '20px',
          borderRadius: '10px',
          margin: '20px 0',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            width: `${percentage}%`,
            height: '100%',
            background: 'linear-gradient(90deg, #00d2d3, #48dbfb)',
            borderRadius: '10px',
            transition: 'width 1s ease-in-out'
          }}></div>
        </div>
        
        <p style={{
          fontSize: '1.2em',
          color: '#34495e',
          fontWeight: 'bold'
        }}>
          Percentage: {percentage.toFixed(1)}%
        </p>
      </div>
      
      <button 
        onClick={onReplay} 
        style={{ 
          padding: '15px 30px', 
          fontSize: '1.3em', 
          borderRadius: '15px', 
          background: 'linear-gradient(45deg, #ff6b6b, #feca57)',
          color: '#fff', 
          border: '3px solid #fff',
          marginTop: '20px',
          cursor: 'pointer',
          fontWeight: 'bold',
          textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
          boxShadow: '0 6px 20px rgba(0,0,0,0.2)',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'scale(1.1)';
          e.target.style.boxShadow = '0 8px 25px rgba(0,0,0,0.3)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'scale(1)';
          e.target.style.boxShadow = '0 6px 20px rgba(0,0,0,0.2)';
        }}
      >
        🔄 Play Again! 🔄
      </button>
    </div>
  );
}

export default Score;
