import React, { Component } from "react";
import axios from "axios";
import DisplayRecipes from "./DisplayRecipes";

// React Bootstrap 4
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

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
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`
      );
      // Returns matching drinks in an array
      const drinks = response.data.drinks;
      console.log("Drinks returned:", drinks);

      this.setState((prevState) => {
        const newDrinksArray = new Array(prevState.drinks);
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

getIngredientsIntoAnArray = (item) =>{
        strIngredients = [];

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
        
           }


  render() {
    const listOfDrinkRecipes = this.state.drinks.map((item, id) => {
        // Get ingredients into an array
        this.getIngredientsIntoAnArray(item);
      return (
        <DisplayRecipes key={item.idDrink} strDrink={item.strDrink} strInstructions={item.strInstructions} />
     )
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
