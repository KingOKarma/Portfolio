import React from 'react';
import TitleBox from '../../../components/Title/TitleBox';
import githubLogo from "../../../images/githubLogo.png";

const Programming = () => {

  return (
    <div>
      {
        TitleBox(
          "My Code",
          "A well organised list of all the code I have ever posted to github!!",
          githubLogo,
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
        }}>My code will appear here soon, but in the mean time head over to my
          <a href="https://github.com/KingOKarma" target="_blank" rel='noreferrer' > Github</a>
        </p>
      </span>
    </div>

  );
};

export default Programming;