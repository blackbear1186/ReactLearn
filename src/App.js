import logo from './logo.svg';
import './App.css';
import React from 'react';
import { CounterButton } from './components/CounterButton'
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
        <CounterButton />
      </header>
    </div>
  );
}

export default App;
