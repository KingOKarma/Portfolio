import React from 'react';
import TitleBox from '../../components/Title/TitleBox';

const Games = () => {
    return (
        <div>
            {
                TitleBox(
                    "My Games",
                    "Heres a wonderful list of all of the games that I have maked/helped with!"
                    )
            }

            <h1 style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'Right',
                height: '100vh',
                color: 'white',
            }}>My games!</h1>





        </div>

    );
};

export default Games;