import React from "react";
import Color from "./Color";

export default function ColorList({ colors = [] }) {
  // ColorList receives colors from the App component as props
  if (!colors.length) return <div>No Colors Listed.</div>;

  // map through color array and pass the details of each color farther down 
  // the tree to Color component
  return (
    <div>
      {colors.map((color) => (
        <Color key={color.id} {...color} />
        
      ))}
    </div>
  );
};
