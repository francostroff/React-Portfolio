import React from 'react';
import {Card, CardGroup} from 'react-bootstrap';
import videoedit from "../assets/videoedit.jpg";
import mylogo from "../assets/mylogo.jpg";
import premiere from "../assets/premierePro.jpg";

function card() {
  return (
    <CardGroup>
      <Card>
        <Card.Img className="projImg"variant="top" src={videoedit} />
       </Card>
      <Card>
        <Card.Img className="projImg"variant="top" src={mylogo} />
        </Card>
      <Card>
        <Card.Img className="projImg"variant="top" src={premiere} />
       </Card>

       
      
    </CardGroup>

    
    
  )};
export default card;
