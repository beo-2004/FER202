import React from 'react';
import './App.css';
import SimpleCard from './components/Ex4/SimpleCard';
import SimpleWebsite from './components/Ex5/SimpleWebsite';

function App() {
  const cardItem = {
    name: "Cong Nguyen",
    location: "FPT DaNang",
    mobile: "0899087911"
  };

  return (
    <div className="App">
      <div style={{ marginBottom: '50px' }}>
        <h2>Exercise 4 - Simple Card</h2>
        <SimpleCard item={cardItem} />
      </div>
      
      <div>
        <h2>Exercise 5 - Simple Website</h2>
        <SimpleWebsite />
      </div>
    </div>
  );
}

export default App;
