import React from 'react'

function Footer() {
    return (
        <footer className="site-footer" id="social">
            <table className="w-100">
                <thead>
                    <tr>
                        <th>
                           Contact Me Via; 
                        </th>
                    </tr>
                </thead>
                <tbody className="footer-table-body">
                    <tr className="d-grid">
                        <td>
                            <a href="https://www.linkedin.com/in/nuru-deen-titiaka-9298b31b1/">
                                <div className="fa fa-linkedin fa-1-5x"></div>
                                <div className="social-desc" title="">LinkIn</div>
                            </a>
                        </td>
                        <td>
                            <a href="https://www.facebook.com/abdulai.nurudeen.370/">
                                <div className="fa fa-facebook fa-1-5x"></div>
                                <div className="social-desc" title="">Facebook</div>
                            </a>
                        </td>
                        <td>
                            <a href="https://twitter.com/intent/tweet?screen_name=mr_nuru_deen">
                            <div className="fa fa-twitter fa-1-5x"></div>
                                <div className="social-desc" title="Twitter">Twitter</div>
                            </a>
                        </td>
                        <td>
                            <a href="https://wa.me/+233543027058?text=Hello%20Nurudeen,">
                            <div className="fa fa-whatsapp fa-1-5x"></div>
                            <div className="social-desc" title="WhatsApp">WhatsApp</div>
                            </a>
                        </td>
                        <td>
                            <div className="fa fa-envelope fa-1-5x"></div>
                            <div className="social-desc" title="abdulainurudeentitiaka@gmail.com"> abdulainurudeentitiaka@gmail.com</div>
                        </td>
                        <td>
                            <div className="fa fa-phone fa-1-5x"></div>
                            <div className="social-desc" title="+233(0)543027058">+233(0)543027058</div>
                        </td>
                    </tr>
                    
                </tbody>
            </table>
            <hr className="footer-hr" />
            <div className="copyright" >
                &copy;nurudeen. All right 
                <div>Build with <span style={{color:'red'}}>&#10084; </span>using ReactJs</div>
            </div>
        
        </footer>
    )
}

export default Footer;
