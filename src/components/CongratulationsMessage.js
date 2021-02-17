import React from 'react';

const CongratulationsMessage = ({numberOfClicks, threshold}) => {
  return numberOfClicks >= threshold ? 
    <h1>Congratulations! You've reached {threshold} number of clicks!</h1> 
    : null;
}
export default CongratulationsMessage;