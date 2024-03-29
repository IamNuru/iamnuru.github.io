import React, {useEffect} from 'react';
import Skills from './Skills';
import About from './About';
import EmailForm from './EmailForm';
import Projects from './Projects';
import Header from './Header';
import AOS from 'aos';
import "aos/dist/aos.css"
// import {ThemeContext}  from '../context/ThemeContext';



const AppBody = (props) => {

    useEffect(() => {
        AOS.init({
            once:true
        });
      }, []);
      
    
    const { isLightTheme , light , dark, skills } = props.cont;
    const theme = isLightTheme ? light : dark;

    return (
        <section className="sect-wrap" id="home"
            style={{backgroundColor:theme.ui, color:theme.textColor,paddingBottom:'10px'}}>
            <Header theme={theme}/>

            <article id="about" className='mt-4' data-aos="flip-up">
                <About />
            </article>

            <article id="skills" className='mt-8' data-aos="fade-right">
                <Skills theme={theme} skills={skills}/>
            </article>

            <article className="contact mt-4" id="contact"  data-aos="fade-left">
                <div className="wrap-form-projects">
                    <div className="projects" id="projects">
                        <Projects />
                    </div>
                    <div className="email-form">
                        <EmailForm />
                    </div>
                </div>
            </article>
        </section>  
    );
}

export default AppBody;
