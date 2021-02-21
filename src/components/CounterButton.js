import React from "react";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";

export const CounterButton = () => {
  const [numberOfClicks, setNumberOfClicks] = useState(0);

  useEffect(() => {
    console.log(`You have clicked me ${numberOfClicks} times.`);
  }, [numberOfClicks])
  return (
    <>
      <Container className="text-center mx-auto">
        <p>You clicked me {numberOfClicks} times</p>
        <Button
          variant="primary"
          onClick={() => setNumberOfClicks(numberOfClicks + 1)}
        >
          Click Me
        </Button>
      </Container>
    </>
  );
}