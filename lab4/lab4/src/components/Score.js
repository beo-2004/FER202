import React from 'react';

const Score = ({ score, total, onReplay }) => {
  const percentage = total > 0 ? Math.round((score / total) * 100) : 0;

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      backdropFilter: 'blur(4px)',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      borderRadius: '16px',
      padding: '32px',
      textAlign: 'center',
      border: '1px solid rgba(255, 255, 255, 0.1)'
    }}>
      <h2 style={{ fontSize: '36px', fontWeight: 'bold', color: '#1f2937' }}>Quiz Completed!</h2>
      <p style={{ fontSize: '18px', color: '#4b5563', marginTop: '8px' }}>You've reached the end of the quiz.</p>

      <div style={{ margin: '32px 0' }}>
        <p style={{ fontSize: '24px', fontWeight: '500', color: '#1f2937' }}>Your Score</p>
        <p style={{ fontSize: '48px', fontWeight: 'bold', color: '#1f2937', margin: '8px 0' }}>{percentage}%</p>
        <p style={{ fontSize: '18px', fontWeight: '500', color: '#374151' }}>{score} / {total} correct</p>
      </div>

      <button
        onClick={onReplay}
        style={{
          marginTop: '24px',
          width: '100%',
          maxWidth: '320px',
          backgroundColor: '#4a4a4a',
          color: '#ffffff',
          fontWeight: 'bold',
          padding: '12px 24px',
          borderRadius: '9999px',
          border: 'none',
          cursor: 'pointer',
          transition: 'all 0.3s ease-in-out',
        }}
      >
        Play Again
      </button>
    </div>
  );
};

export default Score; 