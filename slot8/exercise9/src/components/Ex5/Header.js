import React from 'react';
import logo from '../Ex4/assets/logo-fpt.png.jpg';

const Header = () => {
    return (
        <header style={{
            backgroundColor: '#F26F21',
            padding: '20px 0',
            textAlign: 'center',
            width: '100%'
        }}>
            <div style={{
                maxWidth: '800px',
                margin: '0 auto'
            }}>
                <div style={{
                    backgroundColor: 'white',
                    padding: '20px 60px',
                    marginBottom: '15px',
                    display: 'inline-block'
                }}>
                    <img 
                        src={logo}
                        alt="FPT Education"
                        style={{
                            width: '300px',
                            marginBottom: '5px'
                        }}
                    />
                    <div style={{
                        color: '#FF6634',
                        fontSize: '36px',
                        fontWeight: 'bold',
                        fontFamily: 'Arial, sans-serif'
                    }}>
                    </div>
                </div>
                <nav style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '30px'
                }}>
                    <a href="/" style={linkStyle}>Home</a>
                    <a href="#about" style={linkStyle}>About</a>
                    <a href="#contact" style={linkStyle}>Contact</a>
                </nav>
            </div>
        </header>
    );
};

const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '16px'
};

export default Header; 