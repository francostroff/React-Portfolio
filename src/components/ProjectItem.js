import React from 'react';
import {Card, CardGroup} from 'react-bootstrap';


function ProjectItem () {
    return (
        <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://via.placeholder.com/400x200?text=Image+1" />
        <Card.Body>
          <Card.Title>Card 1</Card.Title>
          <Card.Text>
            This is the content of Card 1. You can add any content you like here.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://via.placeholder.com/400x200?text=Image+2" />
        <Card.Body>
          <Card.Title>Card 2</Card.Title>
          <Card.Text>
            This is the content of Card 2. You can add any content you like here.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://via.placeholder.com/400x200?text=Image+3" />
        <Card.Body>
          <Card.Title>Card 3</Card.Title>
          <Card.Text>
            This is the content of Card 3. You can add any content you like here.
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
    );

}
export default ProjectItem;