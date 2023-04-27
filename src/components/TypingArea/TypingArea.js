import React, { useState, useEffect } from 'react';
import './typing_area.css';

function TypingArea() {
  const [textToType, setTextToType] = useState('');
  const [userInput, setUserInput] = useState('');

  const sampleTexts = [
    'The quick brown fox jumps over the lazy dog.',
    'To be or not to be, that is the question.',
    'The only thing we have to fear is fear itself.',
    // Add more sample texts here
  ];

  const handleUserInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const compareText = (textToType, userInput) => {
    const textToTypeArray = textToType.split(' ');
    const userInputArray = userInput.split(' ');
    let matchCount = 0;

    for (let i = 0; i < textToTypeArray.length; i++) {
      if (textToTypeArray[i] === userInputArray[i]) {
        matchCount++;
      }
    }

    return matchCount === textToTypeArray.length;
  };

  const findMismatchIndex = (textToType, userInput) => {
    const textToTypeArray = textToType.split(' ');
    const userInputArray = userInput.split(' ');

    for (let i = 0; i < textToTypeArray.length; i++) {
      if (textToTypeArray[i] !== userInputArray[i]) {
        return textToTypeArray[i]; //return mismatched word
      }
    }
    return true; //return true if no mismatch
  };


  useEffect(() => {
    const newText = sampleTexts[Math.floor(Math.random() * sampleTexts.length)];
    setTextToType(newText);
  }, []);

  const mismatchIndex = findMismatchIndex(textToType, userInput);

  return (
    <div className="typing-area">
      <h2>{textToType}</h2>
      <h3>{compareText(textToType, userInput) ? '' : 'No match!'}
        {mismatchIndex === true
          ? ` Match! `
          : ` Missed word: ${mismatchIndex}`
        }'
      </h3>
      <input
        type="text"
        value={userInput}
        onChange={handleUserInputChange}
        placeholder="Start typing here..."
      />
    </div>
  );
}

export default TypingArea;
