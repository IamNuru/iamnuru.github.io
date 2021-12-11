import React from 'react'

const Skills = (props) => {
    const theme = props.theme;
    const skills = props.skills;
    // let bgImage = theme.ui==='white' ? `url(${img1})` : `url(${img2})`;
            return(
                <div className="skills-body" 
                    // style={{backgroundImage:bgImage,color:theme.textColor}}
                    >
                    <fieldset>
                        <legend>SKILLS</legend>
                        <div className="my-skills">
                            <div className="strong-fields">
                                <h2>Strong Fields</h2>
                                <ul>
                                {
                                    skills.strongFields.map((skill) =>{
                                        return(<li style={{color:theme.textColor}} key={skill}>{skill}</li>)
                                    })
                                }
                                </ul>
                            </div>
                            <div className="frontEnd">
                                <h2>Front End</h2>
                                <ul>
                                {
                                    skills.frontEnd.map((skill) =>{
                                        return(<li style={{color:theme.textColor}} key={skill}>{skill}</li>)
                                    })
                                }
                                </ul>
                            </div>
                            <div className="backEnd">
                                <h2>Back End</h2>
                                <ul>
                                {
                                    skills.backEnd.map((skill) =>{
                                        return(<li style={{color:theme.textColor}} key={skill}>{skill}</li>)
                                    })
                                }
                                </ul>
                            </div>
                            
                        </div>
                    </fieldset>
                </div>
    )
}

export default Skills;
