import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="container my-4">
        <AppRoutes />
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;