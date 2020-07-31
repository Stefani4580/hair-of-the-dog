import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

function DisplayIngredientsWithMeasurements(props) {
  // Measurements and Ingredients are in sychronized arrays.
  let index = 0;
  const listOfIngredMeas = props.ingredient.map((ingredient) => {
    <ListGroup horizontal>
      <ListGroup.Item>
        {props.measurement[index] === null ? "" : props.measurement[index]}
      </ListGroup.Item>
      <ListGroup.Item>{ingredient}</ListGroup.Item>
    </ListGroup>;
  });
  return <div>{listOfIngredMeas} </div>;
}

export default DisplayIngredientsWithMeasurements;
