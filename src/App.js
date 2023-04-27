import React from 'react';
import Header from './components/Header/Header';
import TypingArea from './components/TypingArea/TypingArea';
import Stats from './components/Stats/Stats';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <TypingArea />
      <Stats />
    </div>
  );
}

export default App;
