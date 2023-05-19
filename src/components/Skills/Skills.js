import React from 'react';
import  './index.css';
const Skills = () => {
  return (
      <>
      <center><h1 className="header-title">
        .Skills
      </h1>
      </center>
      <div className="skill-container">
        <SkillCard logo= { <i class="fa-brands fa-html5"></i>}/>
        <SkillCard logo= { <i class="fa-brands fa-css3-alt"></i>}/>
        <SkillCard logo= { <i class="fa-brands fa-square-js"></i>}/>
        <SkillCard logo= { <i class="fa-brands fa-react"></i>}/>
        <SkillCard logo= { <i class="fa-brands fa-bootstrap"></i>}/>
        <SkillCard logo= { <i class="fa-brands fa-java"></i>}/>
        <SkillCard logo= { <i class="fa-brands fa-python"></i>}/>
        <SkillCard logo= { <i class="fa-brands fa-php"></i>}/>
        <SkillCard logo= { <i class="fa-brands fa-git-alt"></i>}/>
        <SkillCard logo= { <i class="fa-brands fa-github"></i>}/>
       
        <SkillCard logo= { <i class="fa-brands fa-sass"></i> }/>
      </div>
      
      </>
  );
}

function SkillCard ({logo}) {
    return(
      <div className="skill-card">
       
      {logo}
       
    </div>
    );
}



export default Skills;
