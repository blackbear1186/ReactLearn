import React from "react";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Button } from "./Button";

export const CounterButton = () => {
  const [numberOfClicks, setNumberOfClicks] = useState(0);

  useEffect(() => {
    console.log(`useEffect function called`);
  }, []);
  return (
    <>
      <p>You clicked me {numberOfClicks} times</p>
      // pass buttonColor value to Button
      <Button
        buttonColor="red"
        onClick={() => setNumberOfClicks(numberOfClicks + 1)}
      >
        Click Me
      </Button>
    </>
  );
};
