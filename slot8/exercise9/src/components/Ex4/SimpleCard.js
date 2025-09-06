import React from 'react';
import Title from './Title';
import Description from './Description';
import Image from './Image';
import logo from './assets/logo-fpt.png.jpg';

const SimpleCard = ({ item }) => {
    const { name, location, mobile } = item;

    return (
        <div style={{
            width: '100%',
            maxWidth: '600px',
            backgroundColor: '#fff',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            margin: '20px auto',
            padding: '15px 25px',
            border: '1px solid #eee',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <Image url={logo} />
            <div>
                <Title text={name} location={location} />
                <Description text={mobile} />
            </div>
        </div>
    );
};

export default SimpleCard; 