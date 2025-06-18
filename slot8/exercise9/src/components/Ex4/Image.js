import React from 'react';

const Image = ({ url }) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start'
        }}>
            <img 
                src={url}
                alt="FPT Education"
                style={{
                    width: '180px',
                    marginBottom: '10px'
                }}
            />
            <div style={{
                color: '#F26F21',
                fontSize: '26px',
                fontWeight: 'bold',
                fontFamily: 'Arial, sans-serif'
            }}>
            </div>
        </div>
    );
};

export default Image; 