import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header/Header';
import TypingArea from './components/TypingArea/TypingArea';
import Stats from './components/Stats/Stats';
import './App.css';
function App() {
  const [textToType, setTextToType] = useState('');

  const sampleTexts = [
    'The quick brown fox jumps over the lazy dog.',
    'To be or not to be, that is the question.',
    'The only thing we have to fear is fear itself.',
    // Add more sample texts here
  ];

  useEffect(() => {
    const newText = sampleTexts[Math.floor(Math.random() * sampleTexts.length)];
    setTextToType(newText);
  }, []);
  return (
    <div className="App">
      <Header />
      <TypingArea
        textToType={textToType}
      />
      <Stats
      />
    </div>
  );
}

export default App;
