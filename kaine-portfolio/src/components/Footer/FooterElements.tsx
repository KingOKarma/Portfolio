
import React from 'react';
import '../../App.css';
import "./Footer.css";

function FooterBar() {
    return (

        <div className="main-footer">
            <div className="container">
            <h4 className="footer-top" >Socials</h4>

                <div className="row">
                    {/* Column1 */}
                    <div className="col">
                        <h4 className="footer-header" >Socials</h4>
                        <ul className="list-unstyled">
                            <li className="footer-text footer-link" ><a href="https://github.com/KingOKarma">Github</a></li>
                            <li className="footer-text footer-link" ><a href="https://twitter.com/King_O_Karma">Twitter</a></li>
                            <li className="footer-text footer-link" ><a href="https://github.com/KingOKarma">Discord</a></li>
                            <li className="footer-text footer-link" ><a href="https://discord.com/invite/nQRC3SR">Twitch</a></li>

                        </ul>
                    </div>
                    {/* Column2 */}
                    <div className="col">
                        <h4 className="footer-header">Contact</h4>
                        <ul className="list-unstyled">
                            <li className="footer-text" >kainesimpkins782@gmail.com</li>
                        </ul>
                    </div>
                    {/* Column3 */}
                    <div className="col">
                        <h4 className="footer-header">Extra </h4>
                        <ul className="list-unstyled">
                            <li className="footer-text footer-link" > <a href="./credits">Credits</a></li>
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
