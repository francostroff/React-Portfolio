import React from "react";
import  "../App.css";
import proj2 from "../assets/proj2.png";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


function ProjectCard() {
  return (
    <Card style={{ width: '25rem'}}>
    <Card.Img variant="top" src={proj2} />
    <Card.Body>
      <Card.Title>Bootstrap Portfolio</Card.Title>
      <Card.Text className="card-text">
      Recreate a similar portfolio to challenge 2 but this time with bootstrap.
      HTML/CSS/Bootstrap.
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item>Bootstrap Portfolio </ListGroup.Item>
      <ListGroup.Item>Based on HTML/Bootstrap/Css</ListGroup.Item>
      <ListGroup.Item>Project #3 Bootcamp</ListGroup.Item>
      <Card.Link className="project-link" href="https://github.com/francostroff/Bootstrap-Portfolio">GitHub</Card.Link>
      <Card.Link className="project-link" href="https://francostroff.github.io/Bootstrap-Portfolio/">Live Url</Card.Link>
    </ListGroup>
    
    <Card.Body>
     
    </Card.Body>

 

  </Card>
  
   

   
   );
}

export default ProjectCard;
