import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

function DisplayIngredientsWithMeasurements(props) {
  const listOfIngredMeas = props.ingredients.map((ingredient, id) => {
    return (
      <ListGroup horizontal>
        <ListGroup.Item key={Math.floor(Math.random() * 1000)}>{ingredient[1]}</ListGroup.Item>
        <ListGroup.Item key={Math.floor(Math.random() * 100)}>
          {ingredient[0] === null ? "" : ingredient[0]}
        </ListGroup.Item>
      </ListGroup>
    );
  });
  return <div>{listOfIngredMeas} </div>;
}

export default DisplayIngredientsWithMeasurements;
