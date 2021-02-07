import React from 'react'

export const PeopleListItem = ({person}) => (
    <>
      <div>
        <h3>{person.name}</h3>
        <p>Age: {person.age}</p>
        <p>Hair Color: {person.hairColor}</p>
      </div>
    </>
  )

