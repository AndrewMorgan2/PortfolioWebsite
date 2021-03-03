import ProjectDisplay from "./compents/ProjectDisplay";
import OtherDisplay from "./compents/OtherDisplay";
import GameDisplay from "./compents/GameDisplay";
import Qualifications from "./compents/Qualifications";
import './App.css';
import icon from './img/Icon.png';
import AboutMe from './compents/AboutMe';

function App() {
  return (
    <div style={{backgroundColor : 'black'}}>
      <img src={icon} style={{float: 'right', height: '30vmin'}}/>
      <div  style={{marginLeft : "1vw", marginRight : "1vw"}}>
        <h1 style={{color: "#3041cb", display: "inline-flex", fontSize: "5vmax"}}>My Portfolio</h1>
        <div>
          <AboutMe/>
          <GameDisplay/>
          <ProjectDisplay/>
          <OtherDisplay/>
          <Qualifications/>
        </div>
      </div>
    </div>
  );
}

export default App;
