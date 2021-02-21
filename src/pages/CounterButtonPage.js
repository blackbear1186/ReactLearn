import React, {useState} from 'react';
import {CounterButton} from '../components/CounterButton';
import { CongratulationsMessage } from '../components/CongratulationsMessage';
import { useLocation } from 'react-router-dom';
import { parse } from 'query-string';

export const CounterButtonPage = () => {
  const location = useLocation();
  
  const startingValue = parse(location.search).startingValue;
  // starting will be a string so wrap in Number for number of clicks
  const [numberOfClicks, setNumberOfClicks] = useState(Number(startingValue));

  const increment = () => setNumberOfClicks(numberOfClicks + 1);

  return (
    <>
      <h1>The Counter Button page</h1>
      <CounterButton onIncrement={increment} numberOfClicks={numberOfClicks}/>
    </>
  )
}
