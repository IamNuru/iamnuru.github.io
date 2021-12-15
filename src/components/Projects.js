import React from 'react';

const Projects = (e) =>{

    const projects = [
        {
            title:"ObserverGh",
            description:"This is just a wordpress website to show my prowess in wordpress too",
            imageName:"observergh.png",
            url:"https://observergh.com",
            imgAlt:"Observergh",
            repo:"",
        },
        {
            title:"Nuru Shop",
            description:"An online shopping website (Ecommerce) built using react.",
            imageName:"shop.png",
            url:"https://shop.observergh.com",
            imgAlt:"Nuru Store",
            repo:"",
        },
        {
            title:"Quiz app",
            description:"A simple app that you can use and try out some questions and answers",
            imageName:"quiz.png",
            url:"https://quizgh.netlify.app",
            imgAlt:"Quiz app",
            repo:"https://github.com/IamNuru/quiz-app.git",
        },
        {
            title:"Todos app",
            description:"A simple todo app made in an extraordinary way to keep your todos",
            imageName:"todos.png",
            url:"https://my-todos-keeper.netlify.app",
            imgAlt:"Todos",
            repo:"https://github.com/IamNuru/todo.git",
        },
        {
            title:"Jesash Events Management",
            description:"This site is built with vanilla js, normal html and css with some bootstrap",
            imageName:"jesash.png",
            url:"https://jesashevents.com",
            imgAlt:"Weather App",
            repo:"",
        },
        {
            title:"Weather App",
            description:"This Mini weather application is built using Reactjs and Weather Api, with tailwindCss for styling",
            imageName:"weatherApp.png",
            url:"https://nuru-weather.netlify.app/",
            imgAlt:"Weather App",
            repo:"https://github.com/IamNuru/weather-app.git",
        },
        {
            title:"Pictures",
            description:"I used a photos api to build this app for searching images",
            imageName:"picturesApp.png",
            url:"https://nuru-mini-gallery.netlify.app",
            imgAlt:"Pictures App",
            repo:"https://github.com/IamNuru/pics.git",
        },
    ]


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
        padding:'5px',
        position:"relative"
    }
    const projectTitle = {
        fontWeight:600,
        color:'#03709B',
        padding:"8px 0px"
    }
    const container = {
        padding: '2px 16px',
        marginBottom:"3rem"
    }

    /* const btn = {
        fontWeight:600,
        textAlign:"center",
        fontSize:'21px',
        borderRadius:'0.2rem',
        color:'#00D7E5',
        backgroundColor:'aliceBlue',
        border:"2px solid #72dced",
        boxShadow: '0 8px 16px 0 rgba(250,250,250,0.2), 0 6px 20px 0 rgba(250,250,250,0.19)',
    } */

    return (
            <fieldset>
                <legend>PROJECTS</legend>
                <div style={wrapProjects}>
                    {
                        projects?.length > 0 ?
                        <>
                        {
                            projects.map( (proj, index) =>{
                                return (
                                <div key={index} style={projectCard} className="project-card">
                                    <h4 style={projectTitle}><a href={proj.url}>{proj.title}</a></h4> 
                                    <img src={'../images/'+proj.imageName} style={{width:'100%', height:"200px"}} alt={proj.imageAlt}/>
                                    <div style={container}>
                                        {proj.description}
                                    </div>
                                    {
                                        proj.repo && (
                                        <div className="repo-link mt-4" >
                                            <a href={proj.repo} className='repo-link-tag'
                                                style={
                                                    {
                                                        width:"100%", 
                                                        maxWidth:"250px", 
                                                        display:"block", 
                                                        padding:"5px 0px",
                                                        textDecoration:"none",
                                                    }
                                                    }>
                                                Repo
                                            </a> 
                                        </div>
                                        )
                                        }
                                </div>
                                )
                            })
                        }
                        </> 
                        : 
                        <p>Loading projects</p>
                    }
                    
                    
                </div>
            </fieldset>
    )
}

export default Projects
