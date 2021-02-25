import React, { useState, useEffect } from "react";
import { CounterButton } from "../components/CounterButton";
import { CongratulationsMessage } from "../components/CongratulationsMessage";
import { DisplayIf } from "../DisplayIf";
import { usePersistentState } from '../usePersistentState';

export const CounterButtonPage = () => {
  // starting will be a string so wrap in Number for number of clicks
  const [numberOfClicks, setNumberOfClicks] = usePersistentState('numberOfClicks', 0, Number);
 

  const increment = () => setNumberOfClicks(numberOfClicks + 1);

  return (
    <>
      <h1>The Counter Button page</h1>
      <DisplayIf condition={!numberOfClicks >= 10}>
        <CongratulationsMessage threshold={10} />
      </DisplayIf>
      <CounterButton onIncrement={increment} numberOfClicks={numberOfClicks} />
    </>
  );
};
