import React from 'react';
import {Greeting} from '../components/Greeting';

export const Home = () => {
  return (
    <>
      <h1>The Home Page</h1>
      <Greeting name="Berlin" numberOfMessages={9}/>
    </>
  )
}
