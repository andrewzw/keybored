import React from 'react';

function Stats({ timeElapsed, errors, wpm, accuracy }) {
  return (
    <div className="stats">
      <p>WPM: {wpm}</p>
      <p>Accuracy: {accuracy}%</p>
      <p>Time: {timeElapsed}s</p>
      <p>Errors: {errors}</p>
    </div>
  );
}

export default Stats;
