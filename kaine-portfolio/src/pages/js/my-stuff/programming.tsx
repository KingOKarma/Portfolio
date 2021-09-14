import React from 'react';
import TitleBox from '../../../components/Title/TitleBox';

const Programming = () => {

  return (
    <div>
      {
        TitleBox(
          "My Code",
          "A well organised list of all the code I have ever posted to github!!"
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
        <h1>My code will appear here soon, but in the mean time head over to my
          <a href="https://github.com/KingOKarma"> Github</a>
        </h1>
      </span>
    </div>

  );
};

export default Programming;