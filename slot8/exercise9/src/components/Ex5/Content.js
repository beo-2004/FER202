import React from 'react';

const Content = () => {
    return (
        <main style={{
            maxWidth: '800px',
            margin: '40px auto 100px',
            padding: '0 20px',
            textAlign: 'center'
        }}>
            <section id="about" style={{
                marginBottom: '30px'
            }}>
                <h2 style={{ 
                    marginBottom: '10px',
                    fontSize: '24px'
                }}>About</h2>
                <p>This is the about section of the website.</p>
            </section>

            <section id="contact" style={{
                marginBottom: '30px'
            }}>
                <h2 style={{ 
                    marginBottom: '10px',
                    fontSize: '24px'
                }}>Contact</h2>
                <p>For any inquiries, please contact us at example@example.com.</p>
            </section>
        </main>
    );
};

export default Content; 