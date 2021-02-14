import React from "react";
import Color from "./Color";

export default function ColorList({
  colors = [],
  onRemoveColor = (f) => f,
  onRateColor = (f) => f,
}) {
  // ColorList receives colors from the App component as props
  if (!colors.length) return <div>No Colors Listed. (Add a color)</div>;

  // map through color array and pass the details of each color farther down
  // the tree to Color component
  // onRemoveColor function only notifies the parent App and passes the information up
  return (
    <div className="color-list">
      {colors.map((color) => (
        <Color
          key={color.id}
          {...color}
          onRemove={onRemoveColor}
          onRate={onRateColor}
        />
      ))}
    </div>
  );
}
