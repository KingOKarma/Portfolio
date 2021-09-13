import React, { useEffect } from 'react';
import TitleBox from '../components/Title/TitleBox';
import kaineLofi from "../images/kaine_lofi.png";

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
          "wooodsa sadsadhas f sasfj safsaasfsadsafassadsad sads safsaasfsadasadsasadsad fsafsasasdsa ads adsd sadas dsaasfsafsfasdsad sad sa dasda dasassad sadsa dasdasda dsa dsa dd sa dasda dasassad sadsa dasdasda dsa dsa dd sa dasda dasassad sadsa dasdasda dsa dsa dssad sadsa dasdasda dsa dsa dssad sadsa dasdasda dsa dsa dssad sadsa dasdasda dsa dsa dssad sadsa dasdasda dsa dsa dssad sadsa dasdasda dsa dsa dssad sadsa dasdasda dsa dsa dssad sadsa dasdasda dsa dsa dssad sadsa dasdasda dsa dsa dssad sadsa dasdasda dsa dsa dssad sadsa dasdasda dsa dsa dssad sadsa dasdasda dsa dsa dssad sadsa dasdasda dsa dsa dssad sadsa dasdasda dsa dsa dssad sadsa dasdasda dsa dsa dssad sadsa dasdasda dsa dsa dssad sadsa dasdasda dsa dsa dssad sadsa dasdasda dsa dsa dssad sadsa dasdasda dsa dsa dssad sadsa dasdasda dsa dsa dd sa dasda dasassad sadsa dasdasda dsa dsa dsad sad sa asdsad sa",
          kaineLofi,
          2)
      }

      <h1 style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'Right',
        height: '100vh',
        color: 'white',
      }}>All About Kaine!.</h1>


      <div
        className="badge-base LI-profile-badge"
        data-locale="en_US"
        data-size="large"
        data-theme="dark"
        data-type="HORIZONTAL"
        data-vanity="kaine-simpkins-753900220"
        data-version="v1">
        <a
          className="badge-base__link LI-simple-link"
          href="https://uk.linkedin.com/in/kaine-simpkins-753900220?trk=profile-badge">
        </a>

      </div>


    </div >

  );
};

export default About;