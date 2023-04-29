import React, { useState, useEffect } from 'react';
import './typing_area.css';

function TypingArea() {
  const [textToType, setTextToType] = useState('');
  const [userInput, setUserInput] = useState('');
  const [typed, setTyped] = useState('');

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

  const compareText = (textToType, userInput) => {
    const textToTypeArray = textToType.split(' ');
    const userInputArray = userInput.split(' ');
    let matchCount = 0;

    for (let i = 0; i < textToTypeArray.length; i++) {
      if (textToTypeArray[i] === userInputArray[i]) {
        matchCount++;
      }
      else if(textToTypeArray[i] !== userInputArray[i]){
        return textToTypeArray[i]; //return mismatched word
      }
    }

    return matchCount === textToTypeArray.length;//return true if no mismatch
  };



  const renderUserInput = () => {
    const inputChars = userInput.split('');
  
    return [
      // Add the "<" character before mapping inputChars
      <span key={'start'}>{'<'}</span>,
      // Map inputChars to display the characters with the appropriate color
      ...inputChars.map((char, index) => {
        const isMatch = textToType.charAt(index) === char;
        const charStyle = { color: isMatch ? 'green' : '#FFC300' };
        return <span key={index} style={charStyle}>{char}</span>;
      }),
      // Add the cursor element
      <span key={inputChars.length} className="cursor"></span>,
      <span key={'end'}>{'/>'}</span>,

    ];
  };
  
  

  useEffect(() => {
    const handleKeyPress = (event) => {
      let pressed = event.key;
  
      setUserInput((prevInput) => {
        let newInput = prevInput;
  
        if (pressed.length === 1 && pressed.match(/[a-zA-Z0-9,.]/i)) {
          newInput = prevInput + pressed;
        } else if (pressed === " " || pressed === "Spacebar") {
          newInput = prevInput + " ";
        } else if (pressed === "Backspace") {
          if (event.ctrlKey) {
            const lastSpaceIndex = prevInput.lastIndexOf(" ");
            newInput = lastSpaceIndex >= 0 ? prevInput.slice(0, lastSpaceIndex) : "";
          } else {
            newInput = prevInput.slice(0, -1);
          }
        }
  
        console.log(newInput);
        return newInput;
      });
    };
  
    document.addEventListener("keydown", handleKeyPress);
  
    // Cleanup: Remove event listener when the component unmounts
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const mismatchIndex = compareText(textToType, userInput);

  return (
    <div className="typing-area">
      <h2>{textToType}</h2>
      <h2 className='user-input'>{renderUserInput()}</h2>
      <p>{typed}</p>
    </div>
  );
}

export default TypingArea;
