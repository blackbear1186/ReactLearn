import React from 'react';
import {FaStar} from 'react-icons/fa';


// make stars clickable with onClick handler
// onSelect prop is function that returns whatever argument was sent to it
export default function Star ({ selected = false, onSelect = f => f}){
  return <FaStar color={selected ? "red" : "white"} onClick={onSelect}/>;
}