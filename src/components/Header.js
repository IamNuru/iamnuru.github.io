import React, { useState } from 'react';
import officeImage from '../images/office.jpg';

const Header= (props) => {
    const [ imgLoader, setImgLoader ] = useState(true)

    const btn = {
        fontWeight:600,
        height:'50px',
        width:'40%',
        marginLeft:'30%',
        fontSize:'24px',
        paddingTop:'5px',
        borderRadius:'0.2rem',
        backgroundColor:'#fff',
        color:'#00D7E5'
    }
    const btnHire={
        // color:'red',
        // background:'lightBlue',
        boxShadow: '0 8px 16px 0 rgba(250,250,250,0.2), 0 6px 20px 0 rgba(250,250,250,0.19)',
    }
    const btnProjects={
        // color:'green',
        // background:'aliceBlue',
        boxShadow: '0 8px 16px 0 rgba(250,250,250,0.2), 0 6px 20px 0 rgba(250,250,250,0.19)',
    }
    const wrapBtns ={
        display:'grid',
        gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr)',
        gridGap:'1em',
        marginTop:'1.5em'
    }

    const setBgIfLoaderNull = {
        backgroundColor: 'rgb(7, 7, 7)',
        opacity: 0.8,
    }

    /* const parallel = {
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    } */


    return (
        <article className="wrap-shimmer">
            <div className="bg-photo">
                <div className="bg-image">
                    <img src={officeImage} onLoad={() => setImgLoader(false)} alt=""/>
                </div>
                <div className="on-photo" 
                style={ imgLoader ? setBgIfLoaderNull : {}}>
                    <h2 className="shimmer name">ABDULAI NURU-DEEN</h2>
                    <h3 className="shimmer dev" style={{fontFamily:'Trebuchet Ms'}}>WEB DEVELOPER</h3>
                    <div style={wrapBtns}>
                        <a href="#contact" style={{...btn, ...btnHire}} 
                            className="headerBtn1" data-aos="fade-up-right">
                            <div></div>
                            <div>Hire Me</div>
                        </a>
                        <a href="#projects" style={{...btn, ...btnProjects}}
                            className="headerBtn2" data-aos="fade-up-left">
                            <div></div>
                            <div>My works</div>
                        </a> 
                    </div>
                </div>
            </div>
        </article>
    )

    
}

export default Header
