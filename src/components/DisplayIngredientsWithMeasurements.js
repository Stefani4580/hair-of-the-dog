import React from "react";

function DisplayIngredientsWithMeasurements() {
    // Measurements and Ingredients are in sychronized arrays.
    let index = 0;
    const listOfIngredMeas = props.ingredient.map((ingredient)=>{
        <ListGroup horizontal>
        <ListGroup.Item>{(measurement[index]=== null)? "" : measurement[index]}</ListGroup.Item>
        <ListGroup.Item>{ingredient}</ListGroup.Item>
        </ListGroup>

    })
  return (
    <div>
        <ListGroup.Item>renders</ListGroup.Item>
        <ListGroup.Item>horizontally!</ListGroup.Item>
    </div>
  );
}

export default DisplayIngredientsWithMeasurements;
