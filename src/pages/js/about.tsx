import React, { useEffect } from 'react';
import TitleBox from '../../components/Title/TitleBox';
import kaineLofi from "../../images/kaine_lofi.png";
import "../css/about.css";

const About = () => {

  useEffect(() => {
    const script = document.createElement('script');

    script.src = 'https://platform.linkedin.com/badges/js/profile.js';
    script.async = true;
    script.defer = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>

      {
        TitleBox(
          "About Me",
          "This page tells you all there is to know about me!",
          kaineLofi,
          5)
      }


      <hr />
      <p className="aboutBox">
        Hi I'm kaine! I'm a Developer who loves to make games in Unity and Unreal engine along with
        Discord/Twitch bots in Typescript, I have all of my work displayed on this very website.
        <br />
        I've been studying on how to make websites so I challenged myself to code my own website to
        show off all of my own hard work, I hope you enjoy it! If you see me as a potential employee
        you can take a look at my linkedin and other socials down below!</p>
      <hr />

      <div
        className="badge-base LI-profile-badge linkedin-box"
        data-locale="en_US"
        data-size="large"
        data-theme="dark"
        data-type="HORIZONTAL"
        data-vanity="kaine-simpkins-753900220"
        data-version="v1">

      </div>
    </div >

  );
};

export default About;