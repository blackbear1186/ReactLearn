import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { CounterButton } from "./components/CounterButton";
import { CongratulationsMessage } from "./components/CongratulationsMessage";
import { StarRating } from "./components/StarRating";
import { Greeting } from "./components/Greeting";
import { PeopleList } from "./components/PeopleList";
import colorData from "./color-data.json";
import ColorList from "./components/ColorList";
import AddColorForm from "./components/AddColorForm";
import { v4 } from "uuid";

// array of people
// const people = [
//   {
//     name: "Berlin",
//     age: 34,
//     hairColor: "black",
//   },
//   {
//     name: "Atusko",
//     age: 48,
//     hairColor: "black",
//   },
//   {
//     name: "Syo",
//     age: 20,
//     hairColor: "black",
//   },
//   {
//     name: "Moe",
//     age: 19,
//     hairColor: "brown",
//   },
// ];

const App = () => {

  return (
    <>
      <AddColorForm />
      <ColorList />
    </>
  )
  // store color data in useState color array
  // store state in the root App and pass colors down to child components

  // const [numberOfClicks, setNumberOfClicks] = useState(0);

  // const increment = () => setNumberOfClicks(numberOfClicks + 1);

  /*When the ColorList raises an onRemoveColor event, we capture the id of the color to remove 
    from the arguments and use it to filter the list of colors to exclude the color clicked. 
    Next we change the state with setColors function to change the array colors to the newly 
    filtered array.*/

  /*The color ratings will change when the ColorList invokes the onRateColor property with the
  id of the color to rate and the new rating.We use those values to construct an array of new
  colors by mapping over the existing colors and changing the rating for the color that matches
  the id property.Once we send the newColors to the setColors function, the state value for
  colors will change and the App component will be invoked with new value for the colors array.*/

  // const [colors, setColors] = useState(colorData);

  // const removeColor = (id) => {
  //   const newColors = colors.filter((color) => color.id !== id);
  //   setColors(newColors);
  // };

  // const rateColor = (id, rating) => {
  //   const newColors = colors.map((color) =>
  //     color.id === id ? { ...color, rating } : color
  //   );
  //   setColors(newColors);
  // };

  // return (
  //   <>
  //     <AddColorForm
  //       onNewColor={(title, color) => {
  //         const newColors = [
  //           ...colors,
  //           {
  //             id: v4(),
  //             rating: 0,
  //             title,
  //             color,
  //           },
  //         ];
  //         setColors(newColors);
  //       }}
  //     />
  //     <ColorList colors={colors} 
  //     onRemoveColor={removeColor}
  //     onRateColor={rateColor} />
  //   </>
    // <div className="App">
    //   <header className="App-header">
    //     <ColorList
    //       colors={colors}
    //       onRateColor={(id, rating) => {
    //         const newColors =  colors.map(color =>
    //           color.id === id ? {...color, rating } : color );
    //         setColors(newColors);
    //       }}
    //       onRemoveColor={(id) => {
    //         const newColors = colors.filter((color) => color.id !== id);
    //         setColors(newColors);
    //       }}
    //     />
    //     {/* <CounterButton onIncrement={increment} numberOfClicks={numberOfClicks} /> */}
    //   </header>
    // </div>
}

export default App;