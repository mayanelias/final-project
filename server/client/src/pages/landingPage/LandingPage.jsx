import React, { useState } from "react";
import Register from "../register/Register";
import Login from "../login/Login";
import MainVideo from "../../../src/videos/video.mp4";
import style from "../landingPage/landingPage.module.css";
const LandingPage = ({
  auth,
  setAuth,
  USERֹֹ_INFORMATIOM,
  user,
  setUser,
  setWishList,
}) => {
  const [flag, setFlag] = useState({ register: false, login: false });
  return (
    <div className={style.navbar}>
      <img
        onClick={() => setFlag({ register: false, login: false })}
        className={style.logo}
        src="https://i.ibb.co/BGgPSbV/Elias-Music-Live-Shows-logos-transparent.png"
      />
      <h1 className={style.title}>Music is the soundtrack of your life...</h1>
<video className={style.mainVideo} src={MainVideo} autoPlay loop muted />
      {!flag.login && !flag.register ? (
        <button
          className={style.signInRegister}
          onClick={() => setFlag({ register: false, login: true })}
        >
          SiGN-IN/REGISTER
        </button>
      ) : (
        ""
      )}
      {flag.register ? (
        <Register
          auth={auth}
          setAuth={setAuth}
          USERֹֹ_INFORMATIOM={USERֹֹ_INFORMATIOM}
          setFlag={setFlag}
          user={user}
          setUser={setUser}
        />
      ) : (
        ""
      )}
      {flag.login ? (
        <Login
          setAuth={setAuth}
          auth={auth}
          USERֹֹ_INFORMATIOM={USERֹֹ_INFORMATIOM}
          setFlag={setFlag}
          user={user}
          setUser={setUser}
          setWishList={setWishList}
        />
      ) : (
        ""
      )}
    </div>
  );
};
export default LandingPage;
