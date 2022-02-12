import React from "react";
import "./navBar.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
function NavBar({ auth,setAuth, USERֹֹ_INFORMATIOM, setWishList }) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  return (
    <div>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className="navbar" onClick={(e) => e.stopPropagation()}>
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <img src="https://i.ibb.co/BGgPSbV/Elias-Music-Live-Shows-logos-transparent.png" />
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Artists"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Artists
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Concerts"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Concerts
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Destinations"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Destinations
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/WishList"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Wish-List
              </NavLink>
            </li>
          {auth?<li className="nav-links"><b className="email">{auth.email}</b></li>:""}
          </ul>
          <img
          src="https://i.ibb.co/VNdV4yL/logout.png"
            className="signOut"
            onClick={() => {
              localStorage.removeItem(USERֹֹ_INFORMATIOM);
              setAuth(null);
              setWishList("");
            }}
          />
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
