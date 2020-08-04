import React from "react";
import "../App.css";
import Home from "./Home";
import RecipeByName from "./RecipeByName";
import DrinksByAlcohol from "./DrinksByAlcohol";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavLink from "react-bootstrap/NavLink";




export default function Main() {
  return (
    <Router>
      <div>
        <Navbar className="nav" variant="dark" bg="dark" expand="lg">
          <Navbar.Brand as={Link} to="/">Hair of the Dog</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/recipeByName">Recipe By Name</Nav.Link>
              <Nav.Link as={Link} to="/drinksByAlcohol">Drinks By Alcohol</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/recipeByName">
            <RecipeByName />
          </Route>
          <Route path="/drinksByAlcohol">
            <DrinksByAlcohol />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
