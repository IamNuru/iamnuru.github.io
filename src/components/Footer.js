import React from 'react'

function Footer() {
    return (
        <footer className="site-footer" id="social">
            <div className="d-grid">
                <div className="social-item">
                    <a className='d-flex' href="https://www.linkedin.com/in/nuru-deen-titiaka-9298b31b1/">
                        <div className="fa fa-linkedin fa-1-5x" style={{padding:"0px 3px"}}></div>
                        <div className="social-desc" title="linkedin">LinkedIn</div>
                    </a>
                </div>
                <div className="social-item">
                    <a className='d-flex' href="https://www.facebook.com/abdulai.nurudeen.370/">
                        <div className="fa fa-facebook fa-1-5x" style={{padding:"0px 3px"}}></div>
                        <div className="social-desc" title="facebook">Facebook</div>
                    </a>
                </div>
                <div className="social-item">
                    <a className='d-flex' href="https://twitter.com/intent/tweet?screen_name=mr_nuru_deen">
                        <div className="fa fa-twitter fa-1-5x" style={{padding:"0px 3px"}}></div>
                        <div className="social-desc" title="twitter">Twitter</div>
                    </a>
                </div>
                <div className="social-item">
                    <a className='d-flex' href="https://wa.me/+233543027058?text=Hello%20Nurudeen,">
                        <div className="fa fa-whatsapp fa-1-5x" style={{padding:"0px 3px"}}></div>
                        <div className="social-desc" title="whatsapp">whatsApp</div>
                    </a>
                </div>
                <div className="social-item">
                    <a className='d-flex' href="">
                        <div className="fa fa-envelope fa-1-5x" style={{padding:"0px 3px"}}></div>
                        <div className="social-desc" title="abdulainurudeentitiaka@gmail.com">email</div>
                    </a>
                </div>
                <div className="social-item">
                    <a className='d-flex' href="">
                        <div className="fa fa-phone fa-1-5x" style={{padding:"0px 3px"}}></div>
                        <div className="social-desc" title="call">+233(0)543027058</div>
                    </a>
                </div>
            </div>
            <hr className="footer-hr mt-4" />
            <div className="copyright" >
                &copy;nurudeen. All right reserved
                <div>Build with <span style={{color:'red'}}>&#10084; </span>using ReactJs</div>
            </div>
        
        </footer>
    )
}

export default Footer;
