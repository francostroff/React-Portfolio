import React from "react";
import  "../App.css";
import proj1 from "../assets/proj1.png";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


function ProjectCard2() {
  return (
    <Card style={{ width: '25rem'}}>
    <Card.Img variant="top" src={proj1} />
    <Card.Body>
      <Card.Title>HTML - CSS Portfolio</Card.Title>
      <Card.Text>
        Created an HTML/CSS web Portfolio from scratch adding some personal style to it.
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item>HTML/CSS Portfolio</ListGroup.Item>
      <ListGroup.Item>Showcasing some artworks in a single page application</ListGroup.Item>
      <ListGroup.Item>Project #2 Bootcamp</ListGroup.Item>
      <Card.Link className="project-link" href="https://github.com/francostroff/Fs-portfolio">GitHub</Card.Link>
      <Card.Link className="project-link" href="https://francostroff.github.io/fs-portfolio/">Live Url</Card.Link>
    </ListGroup>
    
    <Card.Body>
     
    </Card.Body>

 

  </Card>
  
   

   
   );
}

export default ProjectCard2;
