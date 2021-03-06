import React from "react";
import logo from '../logo.png'
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <img src={logo} width="500" height="200" style={{display: 'block', marginLeft:'auto', marginRight: 'auto', marginBottom: '-85px', marginTop: '-25px'}}/>
      <div className="headerbar" >
        <NavLink
          to="/"
          style={{
            color: "blue",
            backgroundColor: "#614e423a",
            borderRadius: "8px",
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/gym"
          style={{
            color: "blue",
            backgroundColor: "#614e423a",
            borderRadius: "8px",
          }}
        >
          Gym
        </NavLink>
        <NavLink
          to="/trainers"
          style={{
            color: "blue",
            backgroundColor: "#614e423a",
            borderRadius: "8px",
          }}
        >
          Trainers
        </NavLink>
        <NavLink
          to="/join"
          style={{
            color: "blue",
            backgroundColor: "#614e423a",
            borderRadius: "8px",
          }}
        >
          Join Now
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
