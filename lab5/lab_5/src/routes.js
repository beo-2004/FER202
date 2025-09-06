import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import News from './pages/News';
import About from './pages/About';
import Contact from './pages/Contact';
import Quiz from './pages/Quiz';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/news" element={<News />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/quiz" element={<Quiz />} />
    </Routes>
  );
}