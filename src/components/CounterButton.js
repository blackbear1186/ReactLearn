import React from "react";
import { useState, useEffect } from "react";
import { DangerButton } from "./Button";

export const CounterButton = () => {
  const [numberOfClicks, setNumberOfClicks] = useState(0);

  useEffect(() => {
    console.log(`useEffect function called`);
  }, []);
  // pass buttonColor value to Button

  return (
    <>
      <p>You clicked me {numberOfClicks} times</p>
      <DangerButton
        buttonColor="red"
        onClick={() => setNumberOfClicks(numberOfClicks + 1)}
      >
        Click Me
      </DangerButton>
    </>
  );
};
