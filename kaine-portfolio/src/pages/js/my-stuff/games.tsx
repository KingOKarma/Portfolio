import React from 'react';
import TitleBox from '../../../components/Title/TitleBox';

const Games = () => {
    return (
        <div>
            {
                TitleBox(
                    "My Games",
                    "Heres a wonderful list of all of the games that I have maked/helped with!"
                )
            }

            <span style={{
                padding: "10px 0px",
                display: 'flex',
                justifyContent: 'center',
                textAlign: 'center',
                color: 'white',
                fontSize: "5px"
            }}>
                <h1>My games will appear here soon but at the moment you can view the list over at
                    <a href="https://kingokarma.itch.io/">itch.io</a>
                    </h1>

            </span>


        </div>

    );
};

export default Games;