import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function DisplayRecipes(props) {
  console.log("This is props: ", props);

  return (
    <Card>
      <Card.Img variant="top" src={props.strDrinkThumb} />
      <Card.Body>
        <Card.Title>{props.strDrink}</Card.Title>
        <ListGroup horizontal>
          <ListGroup.Item>This</ListGroup.Item>
          <ListGroup.Item>ListGroup</ListGroup.Item>
          <ListGroup.Item>renders</ListGroup.Item>
          <ListGroup.Item>horizontally!</ListGroup.Item>
        </ListGroup>
        <Card.Text>{props.strInstructions}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
  );
}

export default DisplayRecipes;
