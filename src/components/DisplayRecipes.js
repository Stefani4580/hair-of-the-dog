import React from "react";
import Card from "react-bootstrap/Card";
import DisplayIngredientsWithMeasurements from "./DisplayIngredientsWithMeasurements";
function DisplayRecipes(props) {
  console.log("This is props: ", props);

  return (
    <Card>
      <Card.Img variant="top" src={props.strDrinkThumb} />
      <Card.Body>
        <Card.Title>{props.strDrink}</Card.Title>
        <DisplayIngredientsWithMeasurements
          measurements={props.measurements}
          ingredients={props.ingredients}
        />
        <Card.Text>{props.strInstructions}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
  );
}

export default DisplayRecipes;
