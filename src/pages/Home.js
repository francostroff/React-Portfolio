import React from "react";


function Home() {
  return (
    <div> 
  
     <h1 id="top-title"className="text-center">Franco Stroff</h1>
      <h2 className="text-center">Video - Motion - Design</h2>
    
<div className="image-avatar">
        <img class="intro-image" width="150"
          src={require('../assets/SelfPotrait.png')} 
          alt="selfpotrait"
        /> 
        <div className="text-home"><h4 id="home-text" className="animate-charcter">Welcome to my page, where creativity meets innovation! As a versatile video editor, designer, and illustrator, I offer a range of services to help bring your vision to life. Whether you're looking to create a captivating video, design a stunning website, or illustrate a unique concept, I have the skills and expertise to deliver exceptional results.
        
        </h4>
        </div>
  </div>
</div>
);
}

export default Home;
