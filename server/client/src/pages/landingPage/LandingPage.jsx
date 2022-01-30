import React, { useState } from "react";
import Register from "../register/Register";
import Login from "../login/Login";
import MainVideo from "../../../src/videos/video.mp4";
import "../landingPage/landingPage.css";
const LandingPage = ({ setAuth, USERֹֹ_INFORMATIOM }) => {
  const [flag, setFlag] = useState({ register: false, login: false });
  return (
    <div className="navbar">
<img onClick={() => setFlag({ register: false, login: false })}
 className="logo" src="https://i.ibb.co/WgDgKwy/Luxury-music-logo-design-golden-shiny-musical-emblem-Vector-illustration.jpg"/>
      <h1
        className="title"
      >
        Music is the soundtrack of your life
      </h1>
      {!flag.login&&!flag.register? (
        <button
          className="signInRegister"
          onClick={() => setFlag({ register: false, login: true })}
        >
          SiGN-IN/REGISTER
        </button>
      ) : (
        ""
      )}
      {flag.register?  <Register
      setAuth={setAuth}
      USERֹֹ_INFORMATIOM={USERֹֹ_INFORMATIOM}
      setFlag={setFlag}
    />:""}
    {flag.login?   <Login
      setAuth={setAuth}
      USERֹֹ_INFORMATIOM={USERֹֹ_INFORMATIOM}
      setFlag={setFlag}
    />:""}
  <video id="mainVideo" src={MainVideo} autoPlay loop muted />
    </div>
  );
};
export default LandingPage;
