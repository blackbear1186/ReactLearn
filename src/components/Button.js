import React from 'react'
import styled from 'styled-components';

// create props function to pass buttonColor prop
const StyledButton = styled.button`
  
  background-color: ${props => props.buttonColor || 'transparent' };
  border: 4px solid white;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  margin: 8px;
  outline: none;
  padding: 16px;
`;

export const Button = ({ children, buttonColor, ...props }) => {
  // ...props pass the rest of the props
  // children displays all of the children inside the button tag
  return (
    <StyledButton buttonColor={buttonColor} {...props}>{children}</StyledButton>
  )
}

// create red danger button
export const DangerButton = ({ children, ...props }) => {
  return <Button buttonColor='red' {...props}>{children}</Button>
}

// create success danger button
export const SuccessButton = ({ children, ...props }) => {
  return <Button buttonColor='green' {...props}>{children}</Button>
}
