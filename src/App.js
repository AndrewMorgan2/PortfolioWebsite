import ProjectDisplay from "./compents/ProjectDisplay";
import OtherDisplay from "./compents/OtherDisplay";
import GameDisplay from "./compents/GameDisplay";
import Qualifications from "./compents/Qualifications";
import './App.css';
import icon from './img/Icon.png';
import AboutMe from './compents/AboutMe';

//Chess board
import Chess from './compents/Chess'

function App() {
  return (
    <div>
      <img src={icon} style={{float: 'right', height: '30vmin', margin: '0.5vmin'}}/>
      <div  style={{marginLeft : "1vw", marginRight : "1vw"}}>
        <h1 style={{color: "#4483b6", display: "inline-flex", fontSize: "5vmax"}}>My Portfolio</h1>
        <div>
          <AboutMe/>
          <GameDisplay/>
          <ProjectDisplay/>
          <Chess/>
          <OtherDisplay/>
          <Qualifications/>
        </div>
      </div>
    </div>
  );
}

export default App;
