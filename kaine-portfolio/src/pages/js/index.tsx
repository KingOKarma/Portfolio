
import React from 'react';
import TitleBox from '../../components/Title/TitleBox';
import kaineTitle from "../../images/kaineTitle.png";
import FetchBotStats from "../../utils/fetchAPI";
const Home = () => {
    const data = FetchBotStats("https://api.bucketbot.dev/application/stats");
    console.log(data.servers);
    console.log("Lol you found my secret logging place, yes I'll be adding api stuff here soon, shh")


  return (
    <div>
      {
        TitleBox(
          "Kaine Simpkins",
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
        }}>Take a look around via the navigation bar as this website is still under development</p>
      </span>
    </div>
  );
};

export default Home;