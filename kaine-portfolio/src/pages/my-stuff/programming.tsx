import React, { useEffect } from 'react';

const Programming = () => {

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
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'Right',
        height: '100vh'
      }}
    >
      <h1 style={{
        color: 'white',
      }}>My code goes here lmao.</h1>


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


    </div>

  );
};

export default Programming;