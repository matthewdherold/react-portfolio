import React from "react";
import { Link } from "react-router-dom";

function Navbars() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
    <Link className="navbar-brand" to="/" id="navHead">Matthew Herold</Link>
           <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/portfolio">Portfolio</Link>
            <a className="nav-link" href="mailto:matthewdherold@gmail.com">Contact</a>
   </nav>
  );
}

export default Navbars;