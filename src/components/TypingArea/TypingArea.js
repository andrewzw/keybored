function TypingArea({ textToType, userInput, onUserInputChange, onKeyDown }) {
    const handleChange = (event) => {
      onUserInputChange(event);
    };
  
    return (
      <div className="typing-area">
        <h2>{textToType}</h2>
        <input
          type="text"
          value={userInput}
          onChange={handleChange}
          onKeyDown={onKeyDown}
          placeholder="Start typing here..."
        />
      </div>
    );
  }
  
  export default TypingArea;
  