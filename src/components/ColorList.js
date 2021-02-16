import React from "react";
import Color from "./Color";
import { useColors } from './ColorProvider';

const ColorList = () => {

  const { colors } = useColors();
  // ColorList receives colors from the App component as props

  // map through color array and pass the details of each color farther down
  // the tree to Color component
  // onRemoveColor function only notifies the parent App and passes the information up
  return (
    <ColorContext.Consumer>
      {context => {
        if(!context.colors.length)
        return <div>No Colors Listed. (Add a color)</div>;
          return (
            <div className="color-list">
            {
              colors.map(color => <Color key={color.id} {...color}/>)
            }
          </div>
          )
      }}
      
    </ColorContext.Consumer>
   
  );
}

export default ColorList;