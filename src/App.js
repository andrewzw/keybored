import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header/Header';
import TypingArea from './components/TypingArea/TypingArea';
import Stats from './components/Stats/Stats';

function App() {
  const [textToType, setTextToType] = useState('');
  const [userInput, setUserInput] = useState('');
  const [startTime, setStartTime] = useState(null);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [errors, setErrors] = useState(0);

  const sampleTexts = [
    'The quick brown fox jumps over the lazy dog.',
    'To be or not to be, that is the question.',
    'The only thing we have to fear is fear itself.',
    // Add more sample texts here
  ];

  const timerRef = useRef(null);

  useEffect(() => {
    const newText = sampleTexts[Math.floor(Math.random() * sampleTexts.length)];
    setTextToType(newText);
  }, []);

  useEffect(() => {
    if (isTyping) {
      timerRef.current = setInterval(() => {
        setTimeElapsed((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }

    return () => {
      clearInterval(timerRef.current);
    };
  }, [isTyping]);

  const handleChange = (e) => {
    const value = e.target.value;
    setUserInput(value);

    if (value.endsWith(' ')) {
      const typedWords = value.trim().split(' ');
      const actualWords = textToType.trim().split(' ');

      if (typedWords[typedWords.length - 1] !== actualWords[typedWords.length - 1]) {
        setErrors((prev) => prev + 1);
      }
    }
  };

  const handleKeyDown = (e) => {
    if (!isTyping) {
      setIsTyping(true);
      setStartTime(Date.now());
    }
  };

  const handleSpace = () => {
    const typedWords = userInput.trim().split(' ');
    const actualWords = textToType.trim().split(' ');

    if (typedWords[typedWords.length - 1] !== actualWords[typedWords.length - 1]) {
      setErrors((prev) => prev + 1);
    }
    setUserInput('');
  };
  const calculateWPM = () => {
    const wordsTyped = userInput.trim().split(' ').length;
    const minutesElapsed = timeElapsed / 60;

    return Math.round(wordsTyped / minutesElapsed);
  };

  const calculateAccuracy = () => {
    const wordsTyped = userInput.trim().split(' ').length;
    return Math.round(((wordsTyped - errors) / wordsTyped) * 100);
  };

  return (
    <div className="App">
      <Header />
      <TypingArea
  textToType={textToType}
  userInput={userInput}
  onUserInputChange={handleChange}
  onKeyDown={handleKeyDown}
/>



      <Stats
        timeElapsed={timeElapsed}
        errors={errors}
        wpm={calculateWPM()}
        accuracy={calculateAccuracy()}
      />
    </div>
  );
}

export default App;
