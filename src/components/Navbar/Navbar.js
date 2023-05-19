import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [expanded,setExpanded] = useState(false)

  return (
    <nav>
      <div className="logo">
        <span>
        Abhishek
        </span>
        <button onClick={()=> setExpanded(!expanded)}><i class="fa-solid fa-bars"></i></button>
      </div>
      <ul className={expanded ? "" : "expanded"}>
        <li className="link">
          <Link to="/">Home</Link>
        </li>
        <li className="link">
          <Link to="/about">About</Link>
        </li>
        <li className="link">
          <Link to="/skills">Skills</Link>
        </li>
        <li className="link">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="link">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
