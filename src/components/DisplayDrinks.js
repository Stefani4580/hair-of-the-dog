import React from "react";
import Card from "react-bootstrap/Card";


function DisplayDrinks(props) {
  return (
    <div>
      <Card>
        <Card.Img
          variant="top"
          src={props.strDrinkThumb}
          className="drinks-by-alcohol-drink-pic"
        />
        <Card.Body>
          <Card.Title>{props.strDrink}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
}

export default DisplayDrinks;
