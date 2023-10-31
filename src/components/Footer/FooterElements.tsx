
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../App.css';
import "./Footer.css";

function FooterBar() {
    return (

        <div className="main-footer">
            <div className="container">
                <h4 className="footer-top" >Socials</h4>

                <div className="row row-sort">
                    {/* Column1 */}
                    <div className="col full-footer">
                        <ul className="list-unstyled">
                            <h4 className="footer-header" >Socials</h4>
                            <li className="footer-text footer-link" ><a href="https://www.youtube.com/@KingOfKarma/"
                                target="_blank" rel='noreferrer' >
                                Youtube</a></li>

                            <li className="footer-text footer-link" ><a href="https://github.com/KingOKarma"
                                target="_blank" rel='noreferrer'
                            >Github</a></li>

                            <li className="footer-text footer-link" ><a href="https://twitter.com/KaineDev"
                                target="_blank" rel='noreferrer' >
                                Twitter</a></li>

                            <li className="footer-text footer-link" ><a href="https://www.instagram.com/kainesimpkins_gamedev/"
                                target="_blank" rel='noreferrer' >
                                Instagram</a></li>



                        </ul>
                    </div>
                    {/* Column2 */}
                    <div className="col full-footer">
                        <ul className="list-unstyled">
                            <h4 className="footer-header">Contact</h4>
                            <li className="footer-text footer-link"><a href="mailto:kaine@simpkins.dev"
                            target="_blank" rel='noreferrer' >kaine@simpkins.dev</a></li>
                            <li className="footer-text footer-link" ><a href="https://www.linkedin.com/in/kaine-simpkins-753900220/"
                                target="_blank" rel='noreferrer' >
                                LinkedIn</a></li>
                        </ul>
                    </div>
                    {/* Column3 */}
                    <div className="col full-footer">
                        <ul className="list-unstyled">
                            <h4 className="footer-header">Extra </h4>
                            <li className="footer-text footer-link" > <NavLink to="/credits">Credits</NavLink></li>

                            <li className="footer-text footer-link" > <a href="https://cv.simpkins.dev"
                                target="_blank" rel='noreferrer'
                            >My CV</a></li>

                        </ul>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} Kaine Simpkins | All rights reserved
                    </p>
                </div>
            </div>
        </div>
    );
}

export default FooterBar;
