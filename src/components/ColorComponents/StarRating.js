import React from "react";
import Star from './Star';

const createArray = (length) => [...Array(length)];

export default function StarRating({
  totalStars = 5,
  selectedStars = 0,
  onRate = (f) => f,
}) {
  // create a state variable selectedStars to hold the users rating with array destructuring
  // In order to change the state of the StarRating component we use setSelectedStars
  // to modify the value of selectedStars-> to set value of selected stars
  // const [selectedStars, setSelectedStars] = useState(0);

  return (
    // i keeps a count of the number of stars clicked
    // when map() renders the first star the value is 0, so we add 1 to get correct value
    // we collect the new rating from the star that was clicked and pass to the parent
    <>
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => onRate(i + 1)}
        />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </>
  );
}
