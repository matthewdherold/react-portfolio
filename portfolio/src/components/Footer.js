import React from "react";

function Footer() {
  return (
    <footer>
      <button class="nav-link" onclick="gitLink()">GitHub</button>
      <button class="nav-link" onclick="linkedLink()">LinkedIn</button>
      <button class="nav-link" onclick="resumeLink()">Resume</button>
    </footer>
  );
}

export default Footer;