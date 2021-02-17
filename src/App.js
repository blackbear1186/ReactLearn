import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import Example from "./components/Example";
import CongratulationsMessage from "./components/CongratulationsMessage"

const App = () => {
  const [numberOfClicks, setNumberOfClicks] = useState(0);
  const increment = () => setNumberOfClicks(numberOfClicks + 1);

  return (
    <div>
      <CongratulationsMessage numberOfClicks={numberOfClicks} threshold={5}/>

      <Example onIncrement={increment} numberOfClicks={numberOfClicks}/>
    </div>
  )
}

export default App;