import React from "react";
import  "../App.css";
import proj6 from "../assets/react_portfolio.png";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


function ProjectCard() {
  return (
    <Card style={{ width: '25rem'}}>
    <Card.Img variant="top" src={proj6} />
    <Card.Body>
      <Card.Title>React Portfolio</Card.Title>
      <Card.Text>
        A multi page React portoflio displaying my work as designer and front end developer.
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item>React Portfolio</ListGroup.Item>
      <ListGroup.Item>React - JSX - CSS</ListGroup.Item>
      <ListGroup.Item>Project #13 Bootcamp</ListGroup.Item>
      <Card.Link className="project-link" href="#">GitHub</Card.Link>
      <Card.Link className="project-link" href="#">Live Url</Card.Link>
    </ListGroup>
    
    <Card.Body>
     
    </Card.Body>

 

  </Card>
  
   

   
   );
}

export default ProjectCard;
