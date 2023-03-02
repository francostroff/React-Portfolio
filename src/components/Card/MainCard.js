import React from "react";
import "./style.css";



function MainCard() {
  return (
    <div className="card">
      <div className="img-container">
        <img
          alt="Profile Image"
          src="https://vignette3.wikia.nocookie.net/vsbattles/images/8/80/Mr._Krabs.png/revision/latest?cb=20150919162131"
        />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> Mr. Stroff
          </li>
          <li>
            <strong>Occupation:</strong> Web Developer
          </li>
          <li>
            <strong>Location:</strong> Beginner
          </li>
        </ul>
      </div>
    </div>
    
  );
}

export default MainCard;
