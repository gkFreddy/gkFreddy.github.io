import React, { useState } from 'react';

const Terminal = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([
    '------------------- INCOMING TRANSMISSION -------------------',
    'Greetings, traveler! You have accessed the Intergalactic Information Network.',
    'Please enter your query into the terminal below.',
    '--------------------------------------------------------------'
  ]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    const response = processInput(input);
    setOutput([...output, `>> ${input}`, response]);
    setInput('');
  };

  const processInput = (input) => {
    switch (input.toLowerCase()) {
      case 'where am i':
        return 'You are accessing the Intergalactic Information Network from an unknown location.';
      case 'what is this':
        return 'This is a virtual repository of knowledge from across the galaxies.';
      case 'help':
        return 'Enter your query, and the network will provide the information you seek.';
      default:
        return `Unable to process query: "${input}". Please try again or enter "help" for assistance.`;
    }
  };

  return (
    <div className="terminal">
      <div className="output">
        {output.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
      <div className="input">
        <span>&gt;&gt;</span>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSubmit();
            }
          }}
        />
      </div>
    </div>
  );
};

export default Terminal;
