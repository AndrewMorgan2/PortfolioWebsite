import ProjectDisplay from "./compents/ProjectDisplay";
import OtherDisplay from "./compents/OtherDisplay";
import GameDisplay from "./compents/GameDisplay";
import Qualifications from "./compents/Qualifications";
import ShowCase from "./compents/ShowCase.js";
import './App.css';
import icon from './img/Icon.png';
import AboutMe from './compents/AboutMe';

//Chess board
import Chess from './compents/Chess'

function App() {
  return (
    <div>
      <div  style={{marginLeft : "1vw", marginRight : "1vw"}}>
        <h1 style={{color: "#4483b6", display: "inline-flex", fontSize: "5vmax"}}>Andrew Morgan's Portfolio</h1>
        <div>
          <AboutMe />
          <ShowCase />
          <GameDisplay />
          <ProjectDisplay />
          <Qualifications />
        </div>
      </div>
      </div>
  );
}

export default App;
