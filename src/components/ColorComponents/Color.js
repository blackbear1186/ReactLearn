import React from "react";
import StarRating from "./StarRating";
import { FaTrash } from "react-icons/fa";

export default function ({
  id,
  title,
  color,
  rating,
  onRemove = (f) => f,
  onRate = (f) => f,
}) {
  // add a trash icon button to remove colors -> use onRemove() property
  // Notify the parent that this event has occurred and pass the information about
  // which color the user clicked to remove
  // grab the rating from onRate handler and pass new rating along with id of color to parent
  return (
    <section>
      <h1>{title}</h1>
      <button onClick={() => onRemove(id)}>
        <FaTrash />
      </button>
      <div style={{ height: 50, backgroundColor: color }} />
      <StarRating
        selectedStars={rating}
        onRate={(rating) => onRate(id, rating)}
      />
    </section>
  );
}
