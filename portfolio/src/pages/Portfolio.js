import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
      <div id="homeDiv">
          <h1 id="portTitle">Portfolio</h1>
<div class="elementForm">
  <div id="portfolioCon">

    <div> <Link class="portLink" to="https://github.com/matthewdherold/HW4-1-21">Tech Blog:
    <br/>
    <img class="portImg" src="./Assets/techBlog.png" alt="Tech Blog"/></Link>
  </div><div> <Link class="portLink" to="https://github.com/matthewdherold/HW4-29-21">Progressive Budget:
  <br/>
    <img class="portImg" src="./Assets/progressiveBudget.png" alt="Progressive Budget"/></Link>
  </div><div> <Link class="portLink" to="https://github.com/matthewdherold/HW2-25-21">Readme Generator:
  <br/>
    <img class="portImg" src="./Assets/READMEgen.png" alt="Readme Generator"/></Link>
  </div><div> <Link class="portLink" to="https://github.com/matthewdherold/HW4-22-21">Fitness Tracker:
  <br/>
    <img class="portImg" src="./Assets/fitnessTracker.png" alt="Fitness Tracker"/></Link>
</div></div></div>

<div>
<div class="elementForm">
    <div id="portfolioCon">
      <div> <Link class="portLink" to="https://github.com/matthewdherold/HW2-4-21">Weather Dashboard:
      <br/>
      <img class="portImg" src="./Assets/weatherDash.png" alt="Weather Dashboard App"/></Link>
    </div><div> <Link class="portLink" to="https://github.com/matthewdherold/HW3-4-21">Team Profile Generator:
    <br/>
      <img class="portImg" src="./Assets/teamGen.png" alt="Team Profile Generator"/></Link>
    </div><div> <Link class="portLink" to="https://github.com/matthewdherold/HW1-28-21">Work Day Scheduler:
    <br/>
      <img class="portImg" src="./Assets/scheduler.png" alt="Work Day Scheduler"/></Link>
    </div><div> <Link class="portLink" to="https://github.com/matthewdherold/GroupProject">Trip Planner:
    <br/>
      <img class="portImg" src="./Assets/project1.png" alt="Trip Planner Group Project"/></Link>
    </div></div></div></div>

</div>
  );
}

export default Home;