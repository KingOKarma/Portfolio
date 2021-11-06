import React from 'react';
import TitleBox from '../../../components/Title/TitleBox';
import itchLogo from "../../../images/itchLogo.png";

const Games = () => {
    return (
        <div>
            {
                TitleBox(
                    "My Games",
                    "Heres a wonderful list of all of the games that I have maked/helped with!",
                    itchLogo,
                    5
                )
            }

<hr/>
            <span style={{
                padding: "10px 0px",
                display: 'flex',
                justifyContent: 'center',
                textAlign: 'center',
                color: 'white',
            }}>
                <p style={{
                    display: 'flex',
                    justifyContent: 'center',
                    textAlign: 'center',
                    color: 'white',
                }}>My games will appear here soon but at the moment you can view the list over at
                    <a href="https://kingokarma.itch.io/" target="_blank" rel='noreferrer' > itch.io</a>
                </p>

            </span>


        </div>

    );
};

export default Games;