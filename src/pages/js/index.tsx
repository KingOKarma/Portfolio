
import React from 'react';
import TitleBox from '../../components/Title/TitleBox';
import kaineTitle from "../../images/kaineTitle.png";
import '../css/global.css';
const Home = () => {


  return (
    <div className="fadein">
      {
        TitleBox(
          "Portfolio",
          "Typescript/Unity & Unreal Engine Games Developer, Follower of all that is \"Nerd\"",
          kaineTitle,
          6
        )
      }

      <span style={{
        padding: "10px 0px",
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
      }}>
        <p style={{
          fontSize: "25px",
          display: 'flex',
          justifyContent: 'center',
          textAlign: 'center',
          color: 'white',
        }}>Take a look around via the navigation bar!</p>
      </span>

    </div>
  );
};

export default Home;