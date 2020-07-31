import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

function DisplayIngredientsWithMeasurements(props) {
  // Measurements and Ingredients are in sychronized arrays.

  let listOfIngredMeas = "";
  for (let i = 0; i < props.ingredients.length; i++) {
    listOfIngredMeas += `<ListGroup horizontal>
      <ListGroup.Item>
        ${props.measurements[i] === null ? "" : props.measurements[i]}
      </ListGroup.Item>
      <ListGroup.Item>${props.ingredients[i]}</ListGroup.Item>
    </ListGroup>`;
  }
 
  return ({listOfIngredMeas});
}

export default DisplayIngredientsWithMeasurements;
