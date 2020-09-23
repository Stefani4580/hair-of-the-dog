import React, { useState, useEffect } from "react";
import axios from "axios";
import DisplayDrinks from "./DisplayDrinks";
import Form from "react-bootstrap/Form";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";

function DrinksByAlcohol() {
  const [alcohol, setAlcohol] = useState("");
  const [drinks, setDrinks] = useState([]);

  const onAlcoholNameChange = (e) => {
    setAlcohol(e.target.value);
  };

  async function getDrinksByAlcohol() {
    try {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${alcohol}`
      );

      let retrievedDrinks = response.data.drinks;
      console.log(retrievedDrinks);
      if (retrievedDrinks === undefined) {
        retrievedDrinks = [
          {
            strDrinkThumb:
              "https://images.unsplash.com/photo-1529395884055-d0c30cc5ba70?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
            strDrink: "Drink Not Found",
          },
        ];
      }
      setDrinks(retrievedDrinks);
    } catch (error) {
      console.log("error: ", error);
    }
  }

  // useEffect(() => {
  //     getDrinksByAlcohol();
  // }, [alcohol])

  const handleFormSubmission = (e) => {
    e.preventDefault();
    getDrinksByAlcohol();
  
  };

  const listOfDrinks = drinks.map((item, id) => {
    return (
      <DisplayDrinks
        key={id}
        strDrinkThumb={item.strDrinkThumb}
        strDrink={item.strDrink}
      />
    );
  });


  return (
    <div className="drinks-by-alcohol">
      <Form className="search">
        <Form.Group>
          <Form.Label>Alcohol</Form.Label>
          <Form.Control
            type="Text"
            placeholder="Enter alcohol name"
            onChange={onAlcoholNameChange}
          />
          <Form.Text className="text-muted">What alcohol do you have</Form.Text>
        </Form.Group>
        <Button variant="dark" type="submit" onClick={handleFormSubmission}>
          Submit
        </Button>
      </Form>
      <CardGroup>{listOfDrinks}</CardGroup>
    </div>
  );
}

export default DrinksByAlcohol;
