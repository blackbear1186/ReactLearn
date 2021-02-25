import { useState, useEffect } from "react";

export const usePersistentState = (storageKey, defaultValue, Type) => {
  // starting will be a string so wrap in Number for number of clicks
  const [state, setState] = useState(
    // get the storageKey value, convert from string to number and set default value to defaultValue
    Number(localStorage.getItem(storageKey)) || defaultValue
  );
  // set storageKey value in local storage every time state changes
  useEffect(() => {
    localStorage.setItem(storageKey, state);
  }, [state]);
  // return state and setState so any componenet can destructure
  return [state, setState];
};
