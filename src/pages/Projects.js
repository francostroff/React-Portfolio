import React from "react"
import ProjectCard from "../components/ProjectCard";
import Wrapper from "../components/Wrapper";


function Projects() {
  return (
    
    <div>
    <h1 className="text-center">Web Projects</h1>
 <h2 className="text-center">
  This are the projects done for the Bootcamp 2022/23.
 </h2>
 <p>
   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque velit, lobortis ut magna
   varius, blandit rhoncus sem. Morbi lacinia nisi ac dui fermentum, sed luctus urna tincidunt.
   Etiam ut feugiat ex. Cras non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna
   imperdiet ac. Sed nec nulla aliquam, bibendum odio eget, vestibulum tortor. Cras rutrum
   ligula in tincidunt commodo. Morbi sit amet mollis orci, in tristique ex. Donec nec ornare
   elit. Donec blandit est sed risus feugiat porttitor. Vestibulum molestie hendrerit massa non
   consequat. Vestibulum vitae lorem tortor. In elementum ultricies tempus. Interdum et
   malesuada fames ac ante ipsum primis in faucibus.
   </p>
   <div class="projects-container">
    <Wrapper>
      <div className="row">
    <ProjectCard></ProjectCard> 
    
    <ProjectCard></ProjectCard>
    <ProjectCard></ProjectCard>
    </div>
    <div className="row">
    <ProjectCard></ProjectCard>

    <ProjectCard></ProjectCard>
    <ProjectCard></ProjectCard>

 
    </div>
    </Wrapper>
    
    </div>
  </div>
  
 
  );
}

export default Projects;
