import React from "react";
import { PeopleList } from "../components/PeopleList";
import { Container } from 'react-bootstrap';


const people = [
  {
    name: "Berlin",
    age: 34,
    hairColor: "black",
  },
  {
    name: "Atusko",
    age: 48,
    hairColor: "black",
  },
  {
    name: "Syo",
    age: 20,
    hairColor: "black",
  },
  {
    name: "Moe",
    age: 19,
    hairColor: "brown",
  },
];

export const PeopleListPage = () => {
  return (
    <Container className="text-center">
        <h1>The People List Page</h1>
        <PeopleList people={people} />
    </Container>
  );
};
