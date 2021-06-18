import React from "react";
import { Link } from "react-router-dom";

function Navbars() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light">
    <Link class="navbar-brand" to="/" id="navHead">Matthew Herold</Link>
           <Link class="nav-link" to="/">Home</Link>
            <Link class="nav-link" to="/portfolio">Portfolio</Link>
            <a class="nav-link" href="mailto:matthewdherold@gmail.com">Contact</a>
   </nav>
  );
}

export default Navbars;