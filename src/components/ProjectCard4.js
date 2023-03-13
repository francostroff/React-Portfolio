import React from "react";
import  "../App.css";
import proj4 from "../assets/proj5.png";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


function ProjectCard() {
  return (
    <Card style={{ width: '25rem'}}>
    <Card.Img variant="top" src={proj4} />
    <Card.Body>
      <Card.Title>Password Generator</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item>Password Generator</ListGroup.Item>
      <ListGroup.Item>Based on user input</ListGroup.Item>
      <ListGroup.Item>Project #5 Bootcamp</ListGroup.Item>
      <Card.Link className="project-link" href="https://github.com/francostroff/Password-Generator">GitHub</Card.Link>
      <Card.Link className="project-link" href="#">Live Url</Card.Link>
    </ListGroup>
    
    <Card.Body>
     
    </Card.Body>

 

  </Card>
  
   

   
   );
}

export default ProjectCard;
