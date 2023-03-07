import React from "react";
import  "../App.css";
import proj5 from "../assets/proj5.png";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


function ProjectCard() {
  return (
    <Card style={{ width: '25rem'}}>
    <Card.Img variant="top" src={proj5} />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item>Password Generator</ListGroup.Item>
      <ListGroup.Item>Based on user input</ListGroup.Item>
      <ListGroup.Item>Project #5 Bootcamp</ListGroup.Item>
    </ListGroup>
    <Card.Body>
      <Card.Link href="#">GitHub Repository</Card.Link>
      <Card.Link href="#">Live Url</Card.Link>
    </Card.Body>

 

  </Card>
  
   

   
   );
}

export default ProjectCard;
