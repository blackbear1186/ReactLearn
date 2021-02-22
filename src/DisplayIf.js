import React from "react";

// children argument contains all elements within wrapping tag
export const DisplayIf = ({ condition, children }) => {
  return condition ? children : null;
};
