import React from "react";
import { PeopleList } from "../components/PeopleList";


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
    <>
        <h1>The People List Page</h1>
        <PeopleList people={people} />
    </>
  );
};
