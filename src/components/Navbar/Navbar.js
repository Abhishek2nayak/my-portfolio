import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
        <ul>
       <li><a href="/">Abhishek</a></li>
           <li><a href="/">Home</a></li>
           <li><a href="/">About</a></li>
           <li><a href="/">Skills</a></li>
            <li><a href="/">Projects</a></li>
           <li><a href="/">Contact</a></li> 
        </ul>
    </nav>
  );
}

export default Navbar;
