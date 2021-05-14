import React from 'react';
import proj1 from '../images/weatherApp.png';
import proj2 from '../images/picturesApp.png';
import proj3 from '../images/observergh.png';
import proj4 from '../images/jesash.png';


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
                        <h4 style={projectTitle}><a href="https://happy-edison-59a0fc.netlify.app/"> Weather App</a></h4> 
                        <img src={proj1} style={{width:'100%'}} alt="Project"/>
                        <div style={container}>
                            <p>
                                This Mini weather application is built using Reactjs and Weather Api, with tailwindCss for styling
                            </p> 
                        </div>
                    </div>
                    <div style={projectCard} className="project-card">
                        <h4 style={projectTitle}><a href="https://cocky-panini-fd7f7d.netlify.app/">Photos App</a> </h4> 
                        <img src={proj2} style={{width:'100%'}}  alt="Project" />
                        <div style={container}>
                            <p>I used a photos api to build this app for searching images</p> 
                        </div>
                    </div>
                    <div style={projectCard} className="project-card">
                        <h4 style={projectTitle}><a href="https://observergh.com">observergh</a> </h4> 
                        <img src={proj3} style={{width:'100%'}} alt="Project" />
                        <div style={container}>
                            <p>
                            This is just a wordpress website to show my prowess in wordpress too
                            </p> 
                        </div>
                    </div>
                    <div style={projectCard} className="project-card">
                        <h4 style={projectTitle}><a href="https://jesashevents.com">Jesash</a> </h4> 
                        <img src={proj4} style={{width:'100%'}} alt="Project" />
                        <div style={container}>
                            <p>This site is built with vanilla js, normal html and css with some bootstrap</p> 
                        </div>
                    </div>
                    
                </div>
            </fieldset>
    )
}

export default Projects
