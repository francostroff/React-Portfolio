import React from 'react';
import {Link} from 'react-router-dom';


function Contact() {
  return (
    
    <div>
      <h1 id="contact-title"className="text-center">Contact</h1>
    
      <div id="contact-links"className="text-center">
      <Link to="https://github.com/francostroff" role="button" className="btn btn-link">
        GitHub
      </Link>
      <Link to="https://francostroff.myportfolio.com/" role="button" className="btn btn-link">
        Adobe Portfolio
      </Link>
      <Link to="https://www.linkedin.com/in/franco-stroff-285886268/" role="button" className="btn btn-link">
        LinkedIn
      </Link>
      <Link to="mailto:francostroff@gmail.com" role="button" className="btn btn-link">
        E-mail
      </Link>

      <div className="image-avatar">
        <img class="intro-image" 
          src={require('../assets/SelfPotrait.png')} 
          alt="selfpotrait"
        />  
  </div>
   
      </div>
    </div>
    
  );
}

export default Contact;
