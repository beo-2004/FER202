import React from 'react';

function Question({ question, options, qid, onAnswer }) {
  return (
    <div style={{ maxWidth: 500, margin: '30px auto', textAlign: 'left' }}>
      <h2>Question {qid}</h2>
      <h3>{question}</h3>
      <div style={{ background: '#fff', borderRadius: 8, boxShadow: '0 2px 8px #eee', padding: 16 }}>
        {options.map((opt, idx) => (
          <div key={idx} style={{ margin: '8px 0' }}>
            <button
              style={{
                color: '#1976d2',
                textDecoration: 'underline',
                fontSize: 18,
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                margin: 0
              }}
              onClick={() => onAnswer(opt)}
            >
              {opt}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Question;
