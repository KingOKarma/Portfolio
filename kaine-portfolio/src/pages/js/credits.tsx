import React from 'react';
import TitleBox from '../../components/Title/TitleBox';
import kaineLofi from "../../images/kaine_lofi.png";
import kaineTitle from "../../images/kaineTitle.png";

// import kaineBorder from "../../images/kaineBorder.png";
import "../css/credits.css";

const Credits = () => {

    return (
        <div>
            {
                TitleBox(
                    "Credits",
                    "This page will credit all people who have created any art related assets to help build the website!",
                    kaineLofi,
                    5)
            }

            <h1 className="credit-header">
                A list of wonderful people</h1>
            <ul className="list-unstyled">
                <div>
                    <li className="credit-text credit-link" >Banner: Commissioned to
                        <a href="https://www.instagram.com/toadeen/"> @toadeen</a></li>
                    <img src={kaineLofi} alt="Kaine_Lofi.png" className="credit-img"></img>
                </div>

                <hr />
                <div>
                    <li className="credit-text credit-link" >Avatar: Commissioned to
                        <a href="https://twitter.com/SElFVKU/"> @cat</a></li>
                    <img src={kaineTitle} alt="KaineTitle.png" className="credit-img"></img>
                </div>

                <hr />

            </ul>

        </div>

    );
};

export default Credits;

