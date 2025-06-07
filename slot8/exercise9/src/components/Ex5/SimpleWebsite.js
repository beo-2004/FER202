import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

const SimpleWebsite = () => {
    return (
        <div style={{
            minHeight: '100vh',
            backgroundColor: '#f5f5f5'
        }}>
            <Header />
            <Content />
            <Footer />
        </div>
    );
};

export default SimpleWebsite; 