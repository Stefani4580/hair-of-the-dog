import React from "react";
import "../App.css";
import Home from "./Home";
import RecipeByName from "./RecipeByName";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/recipeByName">Recipe By Name</Link>
            </li>
            <li>
              <Link to="/recipeByAlcohol">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/recipeByName">
            <RecipeByName />
          </Route>
          <Route path="/recipeByAlcohol">
            <RecipeByAlcohol />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}



function Users() {
  return <h2>Users</h2>;
}