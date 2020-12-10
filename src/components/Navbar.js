import React , {useRef} from 'react';
import logo from '../images/nuru.jpg'

const Navbar = (props) =>{
    // const s= document.getElementById("leftsidenav");
    const s = useRef();
    const openNav = () =>{
        if(s.current.style.width==="300px"){
            s.current.style.width = "0";
        }else{
            s.current.style.width = "300px";
        }
    }
    
        
    

    /* Set the width of the side navigation to 300px and back to 0px if equal to 300px */
    

    // close sidenav when clicked outside
    // window.onclick = function(e){
    //    if (s.current.style.width === 300) {
    //        closeNav()
    //    }else{
    //        s.current.style.width = 300
    //    }
    // }
    /**Set the Side Navbar back to 0px width */
    function closeNav() {
        s.current.style.width = "0"
    }

    

    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        var navLinks = document.querySelectorAll("ul > li a");
        var navbarToggler = document.querySelectorAll(".toggler span");
        if (currentScrollPos > window.innerHeight) {
            document.getElementById("head-wrapper").style.backgroundColor = "#00D1E0";
            navLinks.forEach(link => {
                link.style.color = "#fff";
            });
            navbarToggler.forEach(togglers => {
                togglers.style.backgroundColor = "#fff";
            });

        } else {
            document.getElementById("head-wrapper").style.backgroundColor = "#fff";
            navLinks.forEach(link => {
                link.style.color = "#00D1E0"; 
            });
            navbarToggler.forEach(togglers => {
                togglers.style.backgroundColor = "#000";
            });
        }
    }
    return (
        <div>
            <header>
            <div className="head-wrapper" id="head-wrapper">
                <div className="logo">
                    <div className="img">
                        <a href="/"><img src={logo} alt="Nuru-Deen" /></a>
                    </div>
                    <div className="img-desc">
                        <a href="/">
                            <span className="sp-1">Nuru</span><span className="sp-2">Deen</span>
                        </a>
                    </div>
                </div>
                <div className="menus">
                    <div className="desktop-menus" id="desktop-menus">
                        <ul id="navLinks">
                            <li><a href="#home" id="nav-link">Home</a></li>
                            <li><a href="#about" id="nav-link">About</a></li>
                            <li><a href="#skills" id="nav-link">Skills</a></li>
                            <li><a href="#contact" id="nav-link">Contact</a></li>
                            <li><a href="#social" id="nav-link">Social media</a></li>
                        </ul>
                    </div>
                    <div className="mobile-menus">
                        <div id="leftsidenav" ref={s} className="sidenav">
                            <div href=""
                            // href="javascript:void(0)"
                             className="closebtn" 
                            onClick={closeNav}
                            >&times;</div>
                            <a href="#home">Home</a>
                            <a href="#about">About</a>
                            <a href="#skills">Skills</a>
                            <a href="#contact">Contact</a>
                            <a href="#social">Social media</a>
                        </div>
                    </div>
                    <div className="toggler" 
                            onClick={openNav}
                            >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            {/* <div className="scroll-container">
                <div className="scroll-bar" id="myBar"></div>
            </div> */}
            </div> 
        </header>
        </div>
    )
}

export default Navbar
