import React from "react";
import { PeopleListItem } from "./PeopleListItem";

// give component function a prop

export const PeopleList = ({ people }) => (
  <>
    {people.map((person) => (
      <PeopleListItem person={person} key={person.name} />
    ))}
  </>
);
