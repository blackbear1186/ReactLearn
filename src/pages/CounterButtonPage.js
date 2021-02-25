import React, { useState, useEffect } from "react";
import { CounterButton } from "../components/CounterButton";
import { CongratulationsMessage } from "../components/CongratulationsMessage";
import { DisplayIf } from "../DisplayIf";

export const CounterButtonPage = () => {
  // starting will be a string so wrap in Number for number of clicks
  const [numberOfClicks, setNumberOfClicks] = useState(
    // get the numberOfClicks value, convert from string to number and set default value to 0
    Number(localStorage.getItem("numberOfClicks"))
  );
  // set number of clicks value in local storage every time numberOfClick state changes
  useEffect(() => {
    localStorage.setItem("numberOfClicks", numberOfClicks);
  }, [numberOfClicks]);

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
