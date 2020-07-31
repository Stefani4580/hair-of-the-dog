import React, { Component } from "react";
import axios from "axios";
import DisplayRecipes from "./DisplayRecipes";

// React Bootstrap 4
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import CardGroup from "react-bootstrap/CardGroup";

export default class RecipeByName extends Component {
  constructor() {
    super();

    this.state = {
      drinkName: "",
      drinks: [],
    };
  }

  onDrinkNameChange = (e) => {
    console.log("In onDrinkNameChange");
    this.setState({
      drinkName: e.target.value,
    });
  };

  async searchRecipeByName() {
    try {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.state.drinkName}`
      );
      // Returns matching drinks in an array
      const drinks = response.data.drinks;
      console.log("Drinks returned:", drinks);

      this.setState((prevState) => {
        const newDrinksArray = new Array(drinks);
        return {
          drinks: newDrinksArray,
        };
      });
    } catch (error) {
      console.log("error: ", error);
    }
  }

  handleFormSubmission = (e) => {
    e.preventDefault();
    console.log("Form submitted1");

    this.searchRecipeByName();
    console.log("Form submitted");
  };

  // Ingredients are stored in 15 named parameters.  This method collects them into an array.
  getIngredientsIntoAnArray = (item) => {
    let strIngredients = [];

    if (item.strIngredient1 != null) {
      strIngredients.push(item.strIngredient1);
    }
    if (item.strIngredient2 != null) {
      strIngredients.push(item.strIngredient2);
    }
    if (item.strIngredient3 != null) {
      strIngredients.push(item.strIngredient3);
    }
    if (item.strIngredient4 != null) {
      strIngredients.push(item.strIngredient4);
    }
    if (item.strIngredient5 != null) {
      strIngredients.push(item.strIngredient5);
    }
    if (item.strIngredient6 != null) {
      strIngredients.push(item.strIngredient6);
    }
    if (item.strIngredient7 != null) {
      strIngredients.push(item.strIngredient7);
    }
    if (item.strIngredient8 != null) {
      strIngredients.push(item.strIngredient8);
    }
    if (item.strIngredient9 != null) {
      strIngredients.push(item.strIngredient9);
    }
    if (item.strIngredient10 != null) {
      strIngredients.push(item.strIngredient10);
    }
    if (item.strIngredient11 != null) {
      strIngredients.push(item.strIngredient11);
    }
    if (item.strIngredient12 != null) {
      strIngredients.push(item.strIngredient12);
    }
    if (item.strIngredient13 != null) {
      strIngredients.push(item.strIngredient13);
    }
    if (item.strIngredient14 != null) {
      strIngredients.push(item.strIngredient14);
    }
    if (item.strIngredient15 != null) {
      strIngredients.push(item.strIngredient15);
    }

    return strIngredients;
  };

  // Measurements for ingredients are stored in 15 named parameters.  This method collects them into an array.
  getIMeasurementsIntoAnArray = (item) => {
    let strMeasures = [];

    if (item.strMeasure1 != null) {
      strMeasures.push(item.strMeasure1);
    }
    if (item.strMeasure2 != null) {
      strMeasures.push(item.strMeasure2);
    }
    if (item.strMeasure3 != null) {
      strMeasures.push(item.strMeasure3);
    }
    if (item.strMeasure4 != null) {
      strMeasures.push(item.strMeasure4);
    }
    if (item.strMeasure5 != null) {
      strMeasures.push(item.strMeasure5);
    }
    if (item.strMeasure6 != null) {
      strMeasures.push(item.strMeasure6);
    }
    if (item.strMeasure7 != null) {
      strMeasures.push(item.strMeasure7);
    }
    if (item.strMeasure8 != null) {
      strMeasures.push(item.strMeasure8);
    }
    if (item.strMeasure9 != null) {
      strMeasures.push(item.strMeasure9);
    }
    if (item.strMeasure10 != null) {
      strMeasures.push(item.strMeasure10);
    }
    if (item.strMeasure11 != null) {
      strMeasures.push(item.strMeasure11);
    }
    if (item.strMeasure12 != null) {
      strMeasures.push(item.strMeasure12);
    }
    if (item.strMeasure13 != null) {
      strMeasures.push(item.strMeasure13);
    }
    if (item.strMeasure14 != null) {
      strMeasures.push(item.strMeasure14);
    }
    if (item.strMeasure15 != null) {
      strMeasures.push(item.strMeasure15);
    }

    return strMeasures;
  };



  render() {
    const listOfDrinkRecipes = this.state.drinks.map((item, id) => {
      // Get ingredients into an array
      let ingredients = this.getIngredientsIntoAnArray(item);
      let measurements = this.getIMeasurementsIntoAnArray(item);
      return (
        <DisplayRecipes
          key={id}
          strDrink={item.strDrink}
          strInstructions={item.strInstructions}
          ingredients={ingredients}
          measurements={measurements}
        />
      );
    });

    return (
      <div>
        <Form>
          <Form.Group>
            <Form.Label>Drink Name</Form.Label>
            <Form.Control
              type="Text"
              placeholder="Enter drink name"
              onChange={this.onDrinkNameChange}
            />
            <Form.Text className="text-muted">
              What drink recipe would you like
            </Form.Text>
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            onClick={this.handleFormSubmission}
          >
            Submit
          </Button>
        </Form>
        <CardGroup>{listOfDrinkRecipes}</CardGroup>
      </div>
    );
  }
}
