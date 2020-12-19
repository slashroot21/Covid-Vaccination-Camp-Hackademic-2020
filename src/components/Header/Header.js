import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.css';

const Header = () => {
   return (
      <header>
         <div className="container-header">
            <div className="logo">
               <h1> <span className="bold">COVID-19</span>Vaccination Camp</h1>
            </div>
            <nav>
               <NavLink to="/" className="navButton">Home</NavLink>
               <NavLink to="/register" className="navButton">Register Now</NavLink>
            </nav>
         </div>
      </header>
   )
}

export default Header
