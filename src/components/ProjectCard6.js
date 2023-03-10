import React from "react";
import  "../App.css";
import proj6 from "../assets/weather-app.png";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


function ProjectCard() {
  return (
    <Card style={{ width: '25rem'}}>
    <Card.Img variant="top" src={proj6} />
    <Card.Body>
      <Card.Title>Weather App</Card.Title>
      <Card.Text>
        An app that provides the current and forecast weather of any city based 
        on a user input.
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item>Weather Forecast</ListGroup.Item>
      <ListGroup.Item>Search city based on user input</ListGroup.Item>
      <ListGroup.Item>Project #8 Bootcamp</ListGroup.Item>
      <Card.Link className="project-link" href="#">GitHub</Card.Link>
      <Card.Link className="project-link" href="#">Live Url</Card.Link>
    </ListGroup>
    
    <Card.Body>
     
    </Card.Body>

 

  </Card>
  
   

   
   );
}

export default ProjectCard;
