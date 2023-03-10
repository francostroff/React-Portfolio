import React from "react";
import  "../App.css";
import proj5 from "../assets/quiz.gif";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


function ProjectCard1() {
  return (
    <Card style={{ width: '25rem'}}>
    <Card.Img variant="top" src={proj5} />
    <Card.Body>
      <Card.Title>Javascript Quiz</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item>Javascript Quiz</ListGroup.Item>
      <ListGroup.Item>Javascript</ListGroup.Item>
      <ListGroup.Item>Project #6 Bootcamp</ListGroup.Item>
      <Card.Link className="project-link" href="#">GitHub</Card.Link>
      <Card.Link className="project-link" href="#">Live Url</Card.Link>
    </ListGroup>
    
    <Card.Body>
     
    </Card.Body>

 

  </Card>
  
   

   
   );
}

export default ProjectCard1;
