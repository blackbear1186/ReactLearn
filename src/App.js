import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Greeting } from './components/Greeting'


function App() {
 

  let noun = 'Son';
  let url = "https://reactjs.org"
  return (
    <div className="App">
      <header className="App-header">
        <Greeting />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          What's Good {noun}!
        </p>
        <a
          className="App-link"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
