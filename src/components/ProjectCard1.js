import React from "react";
import  "../App.css";
import proj1 from "../assets/horiseon-refactor.png";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


function ProjectCard1() {
  return (
    <Card style={{ width: '25rem'}}>
    <Card.Img variant="top" src={proj1} />
    <Card.Body>
      <Card.Title>Horiseon Refactor</Card.Title>
      <Card.Text>
       Code Refactor for Horiseon Website.
       Updating code to semantic HTML and adding alt attributes to images.
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item>Password Generator</ListGroup.Item>
      <ListGroup.Item>Based on user input</ListGroup.Item>
      <ListGroup.Item>Project #1 Bootcamp</ListGroup.Item>
      
    </ListGroup>
      <Card.Link className="project-link" href="https://github.com/francostroff/Horiseon-Code-Refactor">GitHub</Card.Link>
      
    
    <Card.Body>
     
    </Card.Body>

 

  </Card>
  
   

   
   );
}

export default ProjectCard1;
