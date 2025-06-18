import React from 'react';

const Description = ({ text }) => {
    return (
        <div style={{
            color: '#666',
            fontSize: '14px',
            textAlign: 'right'
        }}>
            Mobile: {text}
        </div>
    );
};

export default Description; 