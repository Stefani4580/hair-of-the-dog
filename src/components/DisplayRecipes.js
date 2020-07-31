import React from "react";
import Card from "react-bootstrap/Card";


function DisplayRecipes(props) {
  
  return(
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>{props.strDrink}</Card.Title>
          <Card.Text>
            {props.strInstructions}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
  );
}

export default DisplayRecipes;
