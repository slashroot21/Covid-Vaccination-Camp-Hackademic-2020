import React from 'react'
import { NavLink } from 'react-router-dom';

import './Footer.css'

const Footer = () => {
   return (
      <div>
         <footer className="footer">
            <div className="container-footer">
               <div className="logo">
                  <p style={{ lineHeight: "25px", color: "white" }}>
                     Register yourself to get vaccinated as soon as possible and return<br /> to your normal life without any fear
                  </p>
               </div>
               <nav>
                  <NavLink to="/register" className="navButton">Register Here</NavLink>
               </nav>
            </div>
         </footer>
      </div>
   )
}

export default Footer
