function TypingArea({ textToType, userInput, onUserInputChange, onKeyDown }) {
    const handleChange = (event) => {
      // Pass the event object instead of value
      onUserInputChange(event);
    };
  
    return (
      <div className="typing-area">
        <p>{textToType}</p>
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
  