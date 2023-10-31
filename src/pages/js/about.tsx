import React from 'react';
import TitleBox from '../../components/Title/TitleBox';
import kaineLofi from "../../images/kaine_lofi.png";
import "../css/about.css";
import "../css/global.css";

const About = () => {

  return (
    <div className="fadein">

      {
        TitleBox(
          "About Me",
          "This page tells you all there is to know about me!",
          kaineLofi,
          "100% 110%",
          5)
      }


      <hr />
      <div className="aboutBox">

        <h2>Who am I?</h2>
        <p>Hiya! I'm Kaine, I'm a Developer and Video Editor who loves to make games and passion projects in Unreal Engine,
        along with that have a few side projects made in Typescript which helped me get me to the point where I am today. My availability is always varied but if you'd like to contact me for a business opportunity please contact me using one of the contact methods provided below</p>
        <h2>What Have I done?</h2>
        <p>I've worked on a range of projects, some of which I cannot talk about as they're a secret
        🤫<br />But the stuff I can talk about ranges from my very first Steam release which was a procedurally generated space arcade shooter to
        editing short form content to make a mass amount of people laugh at a oneliner</p>

        <h2>Contact me</h2>


        <ul className='aboutBox'>
          <div>
            <b><a className="link" href="mailto:kaine@simpkins.dev" target="_blank" rel='noreferrer'>kaine@simpkins.dev</a></b>

          </div>
          <div>
            <b><a className="link" href="https://www.linkedin.com/in/kaine-simpkins-753900220/" target="_blank" rel='noreferrer'>LinkedIn</a></b>

          </div>

        </ul>

        <p></p>

      </div>
      <hr />
    </div >

  );
};

export default About;