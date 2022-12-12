
import React, { useEffect } from 'react';
import TitleBox from '../../components/Title/TitleBox';
import kaineTitle from "../../images/kaineTitle.png";
import '../css/global.css';
import '../css/main.css';
const Home = () => {


  useEffect(() => {
    const anchor = document.createElement("a");
    anchor.setAttribute("class", "twitter-timeline");
    anchor.setAttribute("data-theme", "dark");
    anchor.setAttribute("data-tweet-limit", "5");
    anchor.setAttribute("href", "https://twitter.com/KaineDev");
    document.getElementsByClassName("twitter-embed")[0].appendChild(anchor);

    const script = document.createElement("script");
    script.setAttribute("src", "https://platform.twitter.com/widgets.js");
    document.getElementsByClassName("twitter-embed")[0].appendChild(script);
  }, []);

  return (
    <div className="fadein">
      {
        TitleBox(
          "Portfolio",
          "Typescript/Games Developer/Video Editor, Follower of all that is \"Nerd\"",
          kaineTitle,
          "33.3% 100%",
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
        <br/>
      </span>
        <section className="twitterContainer twitterBorder">
          <div className="twitter-embed"></div>
        </section>

    </div>
  );
};

export default Home;