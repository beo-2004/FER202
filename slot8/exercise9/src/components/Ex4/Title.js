import React from 'react';

const Title = ({ text, location }) => {
    return (
        <div style={{
            fontSize: '16px',
            fontWeight: '500',
            color: '#333',
            marginBottom: '5px',
            textAlign: 'right'
        }}>
            {text} - {location}
        </div>
    );
};

export default Title; 