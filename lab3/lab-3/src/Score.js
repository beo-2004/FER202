import React from 'react';

function Score({ score, total, onReplay }) {
  return (
    <div style={{ maxWidth: 400, margin: '60px auto', textAlign: 'center' }}>
      <h2>Quiz Ended</h2>
      <h3>Your Score: {score}</h3>
      <p>Total Questions: {total}</p>
      <button onClick={onReplay} style={{ padding: '10px 24px', fontSize: 16, borderRadius: 6, background: '#1976d2', color: '#fff', border: 'none', marginTop: 20 }}>
        Replay
      </button>
    </div>
  );
}

export default Score;
