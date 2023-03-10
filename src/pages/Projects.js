import React from "react"
import Wrapper from "../components/Wrapper";
import ProjectCard1 from "../components/ProjectCard1";
import ProjectCard2 from "../components/ProjectCard2";
import ProjectCard3 from "../components/ProjectCard3";
import ProjectCard4 from "../components/ProjectCard4";
import ProjectCard5 from "../components/ProjectCard5";
import ProjectCard6 from "../components/ProjectCard6";
import ProjectCard7 from "../components/ProjectCard7";


function Projects() {
  return (
    
    <div>
    <h1 className="text-center">Web Projects</h1>
 <h2 className="text-center">
  This are some of the projects I've done for the Bootcamp 2022/23.
 </h2>
 <p>
  This is a collection of the projects that I've done so far for the 
  Bootcamp 2022/23.
  This projects involved the use of HTML - CSS - JavaScript -Bootstrap 
  JSON - Web API - Node.js - React.
  Have a look at my projects and click on the links to be redirected to the git page and live url.
   </p>
   <div class="projects-container">
    <Wrapper>
      <div className="row">
    <ProjectCard1></ProjectCard1> 
    <ProjectCard2></ProjectCard2>
    <ProjectCard3></ProjectCard3>
    </div>
    <div className="row">
    <ProjectCard4></ProjectCard4>
    <ProjectCard5></ProjectCard5>
    <ProjectCard6></ProjectCard6>
    <ProjectCard7></ProjectCard7>
    <ProjectCard7></ProjectCard7>
    <ProjectCard7></ProjectCard7>

 
    </div>
    </Wrapper>
    
    </div>
  </div>
  
 
  );
}

export default Projects;
