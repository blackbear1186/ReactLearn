import React from "react";
import { PeopleListItem } from "./PeopleListItem";
import styled from 'styled-components';

// styled components wrapper
const Wrapper = styled.div`
  border: 2px solid white;
  padding: 32px;
  margin: auto;
`;

// give component function a prop

export const PeopleList = ({ people }) => (
  <Wrapper>
    {people.map((person) => (
      <PeopleListItem person={person} key={person.name} />
    ))}
  </Wrapper>
);
