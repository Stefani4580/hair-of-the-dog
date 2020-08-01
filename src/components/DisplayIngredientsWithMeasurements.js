import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

function DisplayIngredientsWithMeasurements(props) {

  const listOfIngredMeas = props.ingredients.map((ingredient) => {
      console.log("this is item:  ", ingredient);
    return (<ListGroup horizontal>
      <ListGroup.Item>{ingredient[1]}</ListGroup.Item>
      <ListGroup.Item>
        {ingredient[0] === null ? "" : ingredient[0]}
      </ListGroup.Item>
    </ListGroup>);
  });
  return <div>{listOfIngredMeas} </div>;
}

export default DisplayIngredientsWithMeasurements;
