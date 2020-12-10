import React from 'react';
import proj1 from '../images/project1.png';
import proj2 from '../images/project2.png';
import proj3 from '../images/project3.png';
import proj4 from '../images/project4.png';


const Projects = (e) =>{
    const wrapProjects = {
        display:'grid',
        gridTemplateColumns:'repeat(auto-fit, minmax(170px , 1fr))',
        gridGap:'1.1em',
        padding:'15px',
    }
    const projectCard = {
        boxShadow: 'black 1px 5px 20px -12px',
        transition: '0.3s',
        borderRadius: '5px',
        textAlign:'center',
        fontSize:'1.2em',
        padding:'3px'
    }
    const projectTitle = {
        fontWeight:600,
        color:'#03709B',
    }
    const container = {
        padding: '2px 16px'
    }
    return (
            <fieldset>
                <legend>Projects</legend>
                <div style={wrapProjects}>
                    <div style={projectCard} className="project-card">
                        <h4 style={projectTitle}>Larvel and Vuejs</h4> 
                        <img src={proj1} style={{width:'100%'}} alt="Project"/>
                        <div style={container}>
                            <p>
                            The project description goes here. What the project solves
                            </p> 
                        </div>
                    </div>
                    <div style={projectCard} className="project-card">
                        <h4 style={projectTitle}>ReactJs and SQL</h4> 
                        <img src={proj2} style={{width:'100%'}}  alt="Project" />
                        <div style={container}>
                            <p>The project description goes here. What the project solves</p> 
                        </div>
                    </div>
                    <div style={projectCard} className="project-card">
                        <h4 style={projectTitle}>Larvel and Vuejs</h4> 
                        <img src={proj3} style={{width:'100%'}} alt="Project" />
                        <div style={container}>
                            <p>
                            The project description goes here. What the project solves
                            </p> 
                        </div>
                    </div>
                    <div style={projectCard} className="project-card">
                        <h4 style={projectTitle}>ReactJs and SQL</h4> 
                        <img src={proj4} style={{width:'100%'}} alt="Project" />
                        <div style={container}>
                            <p>The project description goes here. What the project solves</p> 
                        </div>
                    </div>
                    
                </div>
            </fieldset>
    )
}

export default Projects
