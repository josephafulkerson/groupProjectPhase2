import React from "react";
import { NavLink } from 'react-router-dom'

function Header() {
  return (
      <div className="headerbar">
          <NavLink to='/' style={{ 
          color: 'blue', 
          backgroundColor: '#614e423a',
          borderRadius: '8px'}} >Home</NavLink>
          <NavLink to='/gym' style={{ 
          color: 'blue', 
          backgroundColor: '#614e423a',
          borderRadius: '8px'}}>Gym</NavLink>
          <NavLink to='/trainers' style={{ 
          color: 'blue', 
          backgroundColor: '#614e423a',
          borderRadius: '8px'}} >Trainers</NavLink>
          <NavLink to='/join' style={{ 
          color: 'blue', 
          backgroundColor: '#614e423a',
          borderRadius: '8px'}} >Join Now</NavLink>
      </div>
  )
}

export default Header;
