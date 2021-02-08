import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Greeting } from './components/Greeting';
import { PeopleList } from './components/PeopleList';

// array of people
const people = [{
  name: 'Berlin',
  age: 34,
  hairColor: 'black',
}, {
  name: 'Atusko',
  age: 48,
  hairColor: 'black',
}, {
  name: 'Syo',
  age: 20,
  hairColor: 'black',
}, {
  name: 'Moe',
  age: 19,
  hairColor: 'brown',
}
];

function App() {
 

  let noun = 'Son';
  let url = "https://reactjs.org"

  const displayAlert = () => {
    alert('Hello');
  }
  return (
    <div className="App">
      <header className="App-header">
    
        <Greeting name='Berlin' numberOfMessages={98}/>
        <PeopleList people={people}/>
        {/* Anonymous arrow function called inside button */}
        <button onClick={() => alert('hello')}>Click Me!</button>
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
