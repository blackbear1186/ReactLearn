import React, { createContext, useState, useContext } from 'react';
import colordata from './color-data.json';
import { v4 } from 'uuid';



/* 
create a stateful component that renders a context provider here.
When the state of the stateful component changes, it will rerender 
the context provider with new context data. Any of the context providers’ 
children will also be rerendered with the new context data.
The stateful component that renders the context provider is our custom 
provider. That is: that’s the component that will be used when it’s time 
to wrap our App with the provider.

*/
const ColorContext = createContext();
export const useColors = () => useContext(ColorContext);

const ColorProvider = ({ children }) => {
  const [colors, setColors] = useState(colordata);

  const addColor = (title, color) => {
    setColors([
      ...colors, 
      {
        id:v4(),
        rating: 0,
        title,
        color
      }
    ])
  }

  const rateColor = (id, rating) => {
    setColors(colors.map(color => 
      color.id === id ? {...color, rating} : color))
  }

  const removeColor = id => setColors(colors.filter(color => color.id !== id));

  return (
    <ColorContext.Provider value={{ colors, setColors }}>
      {children}
    </ColorContext.Provider>
  );
};

export default ColorProvider;
