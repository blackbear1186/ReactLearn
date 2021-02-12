import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

// make stars clickable with onClick handler
// onSelect prop is function that returns whatever argument was sent to it
const Star = ({ selected = false, onSelect = f => f }) => (
  <FaStar color={selected ? "red" : "white"} onClick={onSelect}/>
);

const createArray = length => [...Array(length)];

export const StarRating = ({ totalStars = 5 }) => {
  // create a state variable selectedStars to hold the users rating with array destructuring
  // In order to change the state of the StarRating component we use setSelectedStars
  // to modify the value of selectedStars-> to set value of selected stars
  const [selectedStars, setSelectedStars] = useState(0);
  return (
    // i keeps a count of the number of stars clicked 
    // when map() renders the first star the value is 0, so we add 1 to get correct value
    <>
      {createArray(totalStars).map((n, i) => (
        <Star key={i} selected={selectedStars > i} 
        onSelect={() => setSelectedStars(i + 1)}/>
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </>
  );
};
