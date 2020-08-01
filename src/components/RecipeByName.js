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
      if (response.data.drinks === null) {
      } else {
      }
      let drinks = response.data.drinks;
      console.log("Drinks returned:", drinks);

      // Set up drinks to display one card saying 404
      if (drinks === null) {
        drinks = [
          {
            strDrinkThumb:
              "https://images.unsplash.com/photo-1529395884055-d0c30cc5ba70?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
            strDrink: "Drink Not Found",
            strInstructions: "",
            strIngredient1: "",
            strMeasure1: null,
          },
        ];
      }

      this.setState({
        drinks: drinks,
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

  // Ingredients and measurements are stored in 15 named parameters.  This method collects them into an array of arrays of measurement & ingredient.
  getIngredientsIntoAnArray = (item) => {
    let strIngredients = [];

    if (item.strIngredient1 != null) {
      strIngredients.push(new Array(item.strIngredient1, item.strMeasure1));
    }
    if (item.strIngredient2 != null) {
      strIngredients.push(new Array(item.strIngredient2, item.strMeasure2));
    }
    if (item.strIngredient3 != null) {
      strIngredients.push(new Array(item.strIngredient3, item.strMeasure3));
    }
    if (item.strIngredient4 != null) {
      strIngredients.push(new Array(item.strIngredient4, item.strMeasure4));
    }
    if (item.strIngredient5 != null) {
      strIngredients.push(new Array(item.strIngredient5, item.strMeasure5));
    }
    if (item.strIngredient6 != null) {
      strIngredients.push(new Array(item.strIngredient6, item.strMeasure6));
    }
    if (item.strIngredient7 != null) {
      strIngredients.push(new Array(item.strIngredient7, item.strMeasure7));
    }
    if (item.strIngredient8 != null) {
      strIngredients.push(new Array(item.strIngredient8, item.strMeasure8));
    }
    if (item.strIngredient9 != null) {
      strIngredients.push(new Array(item.strIngredient9, item.strMeasure9));
    }
    if (item.strIngredient10 != null) {
      strIngredients.push(new Array(item.strIngredient10, item.strMeasure10));
    }
    if (item.strIngredient11 != null) {
      strIngredients.push(new Array(item.strIngredient11, item.strMeasure11));
    }
    if (item.strIngredient12 != null) {
      strIngredients.push(new Array(item.strIngredient12, item.strMeasure12));
    }
    if (item.strIngredient13 != null) {
      strIngredients.push(new Array(item.strIngredient13, item.strMeasure13));
    }
    if (item.strIngredient14 != null) {
      strIngredients.push(new Array(item.strIngredient14, item.strMeasure14));
    }
    if (item.strIngredient15 != null) {
      strIngredients.push(new Array(item.strIngredient15, item.strMeasure15));
    }

    return strIngredients;
  };

  render() {
    const listOfDrinkRecipes = this.state.drinks.map((item, id) => {
      console.log("This is a recipe:  ", item);
      // Get ingredients into an array
      let ingredients = this.getIngredientsIntoAnArray(item);
      return (
        <DisplayRecipes
          key={id}
          strDrinkThumb={item.strDrinkThumb}
          strDrink={item.strDrink}
          strInstructions={item.strInstructions}
          ingredients={ingredients}
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
