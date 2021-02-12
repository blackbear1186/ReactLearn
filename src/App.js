import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import { CounterButton } from './components/CounterButton';
import { CongratulationsMessage } from './components/CongratulationsMessage';
import { StarRating } from './components/StarRating';
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
 
  const [numberOfClicks, setNumberOfClicks] = useState(0); 

  const increment = () => setNumberOfClicks(numberOfClicks + 1);

  

  const displayAlert = () => {
    alert('Hello');
  }
  return (
    <div className="App">
      <header className="App-header">
        <StarRating />
        {/* <CounterButton onIncrement={increment} numberOfClicks={numberOfClicks} /> */}
      </header>
    </div>
  );
}

export default App;
