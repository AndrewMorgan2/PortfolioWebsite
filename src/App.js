import ProjectDisplay from "./compents/ProjectDisplay";
import OtherDisplay from "./compents/OtherDisplay";
import GameDisplay from "./compents/GameDisplay";
import Qualifications from "./compents/Qualifications";
import Interactive from "./compents/Interactive";
import ShowCase from "./compents/ShowCase.js";
import SoftwareProjectDisplay from "./compents/SoftwareProjectDisplay";
import ViusalEffects from "./compents/VisualEffects.js";
import GithubIcon from "./img/GitHub-Mark-Light-120px-plus.png";
import LinkedIcon from "./img/LinkedIn_logo_initials.png";
import CV from "./img/CV.png";
import './App.css';
import icon from './img/Icon.png';
import AboutMe from './compents/AboutMe';

//Chess board
import Chess from './compents/Chess'

function App() {
  return (
    <div>
      <div style={{ marginLeft: "1vw", marginRight: "1vw" }}>
        <div style={{ textAlign: "center" }}>
          <h1 style={{ color: "#4483b6", display: "inline-flex", fontSize: "4vmax", textAlign: "center" }}>Andrew Morgan's Portfolio</h1>
          <div style={{display: "inline-flex"}}>
            <h2>
              <a href="https://github.com/AndrewMorgan2/">
                <img src={GithubIcon} style={{ alignSelf: 'center', marginLeft: "5vw", width: "6vw", height: "6vw" }} />
              </a>
            </h2>
            <h2>
              <a href="https://www.linkedin.com/in/andrew-morgan-9672261bb">
                <img src={LinkedIcon} style={{ alignSelf: 'center', marginLeft: "5vw", width: "6vw", height: "6vw" }} />
              </a>
            </h2>
            <h2>
              <a href="http://www.keepandshare.com/doc28/view.php?id=113632&da=y">
                <img src={CV} style={{ alignSelf: 'center', marginLeft: "5vw", width: "6vw", height: "6vw" }} />
              </a>
            </h2>
          </div>
        </div>
        <div>
          <AboutMe />
          <SoftwareProjectDisplay />
          <ProjectDisplay />
          <GameDisplay />
          <ViusalEffects />
          <Qualifications />
        </div>
      </div>
    </div>
  );
}

export default App;
