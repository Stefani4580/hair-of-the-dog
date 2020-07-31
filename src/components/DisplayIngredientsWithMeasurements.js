import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

function DisplayIngredientsWithMeasurements(props) {
  // Measurements and Ingredients are in sychronized arrays.

  const listOfIngredMeas = props.ingredients.map((ingredient) => {
      console.log("this is item:  ", ingredient);
    return (<ListGroup horizontal>
      {/* <ListGroup.Item>
        {props.measurements[key] === null ? "" : props.measurement[key]}
      </ListGroup.Item> */}
      <ListGroup.Item>{ingredient}</ListGroup.Item>
    </ListGroup>);
  });
  return <div>{listOfIngredMeas} </div>;
}

export default DisplayIngredientsWithMeasurements;
