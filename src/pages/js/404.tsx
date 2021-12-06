import React from 'react';
import TitleBox from '../../components/Title/TitleBox';
import kaine404 from "../../images/kaine404.png";
import "../css/global.css"

const Error404 = () => {

    return (
        <div className="fadein">

            {
                TitleBox(
                    "404 Not Found",
                    "You seem to have gotten lost!"
                    , kaine404,
                    2)
            }

            <h1 style={{
                display: 'flex',
                justifyContent: 'center',
                color: 'white',
            }}>I'm more concerned about how you got here</h1>
            <hr />

        </div >

    );
};

export default Error404;