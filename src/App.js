import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useState } from "react";
import {
  Home,
  CounterButtonPage,
  PeopleListPage,
  NotFoundPage,
  ProtectedPage,
  ControlledFormPage,
  UncontrolledFormPage,
  UserProfilePage,
} from "./pages";
import { NavBar } from "./NavBar";
import { FormsNavBar } from "./FormsNavBar";
import { UserDataLoader } from "./components/UserDataLoader";
import { ThemeContext } from "./components/ThemeContext";

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

  const theme = "light";

  return (
    <ThemeContext.Provider value="dark">
      <div className="App">
        <Router>
          <NavBar />
          <div className="App-header">
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
              <Route path="/user">
                  <UserProfilePage />
              </Route>
              <Route path="/forms">
                <Router>
                  <FormsNavBar />
                  <Route path="/forms/controlled">
                    <ControlledFormPage />
                  </Route>
                  <Route path="/forms/uncontrolled">
                    <UncontrolledFormPage />
                  </Route>
                </Router>
              </Route>
              <Route>
                <NotFoundPage />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
