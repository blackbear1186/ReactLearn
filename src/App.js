import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import React, { useState } from "react";
import {
  Home,
  CounterButtonPage,
  PeopleListPage,
  NotFoundPage,
  ProtectedPage,
} from "./pages";
import { CongratulationsMessage } from "./components/CongratulationsMessage";
import { Greeting } from "./components/Greeting";
import { PeopleList } from "./components/PeopleList";
import { CounterButton } from "./components/CounterButton";

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

const App = () => {
  const [numberOfClicks, setNumberOfClicks] = useState(0);
  const increment = () => setNumberOfClicks(numberOfClicks + 1);
  // exact to make sure the url is displayed only if the route matches exactly
  // Not found page has not route path so will be displayed all the time
  // Import Switch and wrap all routes in it to have each page displayed separately

  return (
    <div className="App">
      <Router>
        <Link to="/counter">Go to the Counter Page</Link>
        <br></br>
        <Link to="/people-list">Go to the People List Page</Link>
        <br></br>
        <Link to="/">Go to the Home Page</Link>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/counter">
            <CounterButtonPage />
          </Route>
          <Route path="/people-list">
            <PeopleListPage />
          </Route>
          <Route path="/protected">
            <ProtectedPage />
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
