import React from 'react';
import { QuizProvider } from './components/QuizProvider';
import QuizDisplay from './components/QuizDisplay';

function App() {
  return (
    <QuizProvider>
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-2xl">
          <QuizDisplay />
        </div>
      </div>
    </QuizProvider>
  );
}

export default App;