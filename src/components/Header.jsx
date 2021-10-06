import React from "react";
import { NavLink } from 'react-router-dom'

function Header() {
  return (
      <div>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/gym'>Gym</NavLink>
          <NavLink to='/trainers'>Trainers</NavLink>
          <NavLink to='/join'>Join Now</NavLink>
      </div>
  )
}

export default Header;
