import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import { CounterButton } from './components/CounterButton';
import { CongratulationsMessage } from './components/CongratulationsMessage';
import { StarRating } from './components/StarRating';
import { Greeting } from './components/Greeting';
import { PeopleList } from './components/PeopleList';
import colorData from './color-data.json';
import ColorList from './components/ColorList';

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

export default function App() {
 
  // store color data in useState color array
  // store state in the root App and pass colors down to child components
  const [colors, setColors ] = useState(colorData);
  

  // const [numberOfClicks, setNumberOfClicks] = useState(0); 

  // const increment = () => setNumberOfClicks(numberOfClicks + 1);

  
  return (
    <div className="App">
      <header className="App-header">
        <ColorList colors={colors} onRemoveColor={id => {
          const newColors = colors.filter(color => color.id !== id);
          setColors(newColors);
        }}/>
        {/* <CounterButton onIncrement={increment} numberOfClicks={numberOfClicks} /> */}
      </header>
    </div>
  );
}

