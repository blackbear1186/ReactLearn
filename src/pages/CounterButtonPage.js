import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { parse } from "query-string";
import { CounterButton } from "../components/CounterButton";
import { CongratulationsMessage } from "../components/CongratulationsMessage";
import { DisplayIf } from "../DisplayIf";

export const CounterButtonPage = () => {
  const location = useLocation();

  const startingValue = parse(location.search).startingValue;
  // starting will be a string so wrap in Number for number of clicks
  const [numberOfClicks, setNumberOfClicks] = useState(Number(startingValue));
  const increment = () => setNumberOfClicks(numberOfClicks + 1);

  return (
    <>
      <h1>The Counter Button page</h1>
      <DisplayIf condition={!numberOfClicks >= 10}>
        <CongratulationsMessage
          threshold={10}
        />
      </DisplayIf>
      <CounterButton onIncrement={increment} numberOfClicks={numberOfClicks} />
    </> 
  );
};
