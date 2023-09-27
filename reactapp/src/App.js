// App.js

import React, { useState } from 'react';
import './App.css';

function App() {
  // Declare state variables
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  // Function to handle input change
  const handleChange = (event) => {
    setName(event.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    setGreeting(`Hello, ${name}!`); // Generate greeting message
  };

  return (
    <div className="App">
      <h2>Hey!!! Greeting</h2>
      <form onSubmit={handleSubmit} data-testid="form">
        <label data-testid="label">Enter your name: </label>
        <input
          type="text"
          value={name}
          onChange={handleChange}
        />
        <button type="submit" data-testid="buttonElement">Say Hello</button>
      </form>
      {greeting && <h2>{greeting}</h2>}
    </div>
  );
}

export default App;
