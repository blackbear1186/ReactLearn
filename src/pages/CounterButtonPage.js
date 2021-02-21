import React, { useState } from "react";
import { CounterButton } from "../components/CounterButton";
import { CongratulationsMessage } from "../components/CongratulationsMessage";

export const CounterButtonPage = () => {
  const [numberOfClicks, setNumberOfClicks] = useState(0);
  const increment = () => setNumberOfClicks(numberOfClicks + 1);
  const [hideMessage, setHideMessage] = useState(false);

  return (
    <>
      <h1>The Counter Button Page</h1>
      {hideMessage ? null : (
        <CongratulationsMessage
          numberOfClicks={numberOfClicks}
          threshold={5}
          onHide={() => setHideMessage(true)}
        />
      )}
      <CounterButton onIncrement={increment} numberOfClicks={numberOfClicks} />
    </>
  );
};
