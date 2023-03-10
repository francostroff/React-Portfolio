import React from 'react';
import {Card, CardGroup} from 'react-bootstrap';
import deer from "../assets/DEER.png";
import ogre from "../assets/Oniogre.png";
import samurai from "../assets/nobunaga_honor.jpeg";

function card() {
  return (
    <CardGroup>
      <Card>
        <Card.Img className="projImg-fluid"variant="top" src={deer} />
       </Card>
      <Card>
        <Card.Img className="projImg-fluid"variant="top" src={ogre} />
        </Card>
      <Card>
        <Card.Img className="projImg-fluid"variant="top" src={samurai} />
       </Card>
 </CardGroup>

    
    
  )};
export default card;
