import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import DisplayIngredientsWithMeasurements from "./DisplayIngredientsWithMeasurements";
function DisplayRecipes(props) {
  return (
    <Col lg={2}>
      <Card className="recipe-card">
        <Card.Img
          variant="top"
          src={props.strDrinkThumb}
          className="drink-pic"
        />
        <Card.Body>
          <Card.Title>{props.strDrink}</Card.Title>
          <DisplayIngredientsWithMeasurements ingredients={props.ingredients} />
          <Card.Text>{props.strInstructions}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default DisplayRecipes;
