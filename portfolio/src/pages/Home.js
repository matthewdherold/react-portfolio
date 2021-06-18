import React from "react";

function Home() {
  return (
    <div class="elementForm" id="homeDiv">
    <div id="banner">
      <div id="aboutMeDiv">
  <h1>About Me</h1>
  <img src=".\Assets\meAndMandy.jpg" alt="selfy with dog" id="homeImg"/>
</div>
  <div id="homeImgDiv">
  <img src=".\Assets\jsLogo.png" alt="logo" class="badgeImgs" id=""/>
  <img src=".\Assets\nodeLogo.png" alt="logo" class="badgeImgs" id=""/>
  <img src=".\Assets\reactLogo.png" alt="logo" class="badgeImgs" id=""/>
  <img src=".\Assets\gitLogo.jpg" alt="logo" class="badgeImgs" id=""/>
  <img src=".\Assets\cssLogo.png" alt="logo" class="badgeImgs" id=""/>
  <img src=".\Assets\htmlLogo.png" alt="logo" class="badgeImgs" id=""/>
</div>
    </div>
  <p id="aboutMe"> 
      Hey there! I am a web developer currently based in Southern California and seeking employment opportunities. 
      I completed the Web Developement bootcamp program at UC Davis, and am primarily interested in writing JavaScript applications. 
      Check out some of the projects I have completed in the portfolio tab, or feel free to contact me via the contact tab. 
      You can also find links to my GitHub, LinkedIn, and Resume at the bottom of the page. Thanks for stopping by.
   
  </p>
  </div>

  );
}

export default Home;