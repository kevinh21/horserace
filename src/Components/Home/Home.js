import React from "react";
import "./Home.css";
import "../Animate/Animate.css";
// import RaceActivity from "../RaceActivity/RaceActivity";
// import CalcDuration from "../RaceActivity/CalcDuration";
import Animate from "../Animate/Animate";
// import Move from "../Utility/Moves";
// import SkillCounter from "../Utility/SkillCounter";
// import CalcMovement from "../RaceActivity/CalcMovement";
// import Timer from "../Utility/Timer";

const Home = (props) => {
  return (
    <div className="homeGridContainer">
      <Animate />
      {/* <Move /> */}
      <div className="homeGridTopRow">
        {/* <div className="homeGridTopLeft">
          <ul className="homeTutorials">
            <h2>NEED TO ADD LINKS</h2>
            <li />
            Horse Racing Tutorial - Introduction #1
            https://youtu.be/wzelDSVGKoM?t=1
            <li />
            Horse Racing Tutorial - Jockey & Trainer #2
            https://youtu.be/mTupULTEIbQ?t=1
            <li /> Horse Racing Tutorial - Pace #3
            https://youtu.be/CVDqTGCh5x0?t=1
            <li /> Horse Racing Tutorial - Fitness #4
            https://youtu.be/wKhGKDFI4OU?t=1
            <li /> Horse Racing Tutorial - Fair Odds #5
            https://youtu.be/_cSPTazv52s?t=1
            <li /> Horse Racing Tutorial - Energy & Rank #6
            https://youtu.be/kYjByTLaPA4?t=1
            <li />
            Horse Racing Tutorial - Letter Grades #7
            https://youtu.be/wwLVtQfL7fk?t=1
            <li />
          </ul>
        </div>
        <div className="homeGridBottomLeft">
          <h2 id="homeHowToTakeCare"> HOW TO CARE FOR A RACE HORSE</h2>?
        </div>
      </div>
      <div className="homeGridBottomRow">
        <div className="homeGridTopRight">
          <h2>Sampling of Race Tracks We Feature</h2>
          <ul className="homeTrackList">
            <li />
            Albury Racing club, Albury,
            <li /> New South Wales Armidale Jockey Club,
            <li /> Armidale, New South Wales,
            <li />
            Ascot Racecourse, Perth,
            <li />
            Western Australia Bairnsdale Racecourse,
            <li />
            Bairnsdale, Victoria Ballarat Turf Club,
            <li />
            Ballarat,
            <li /> Victoria Balnarring Racecourse,
            <li /> Balnarring,
            <li /> Victoria Belmont Park Racecourse,
            <li /> Perth,
            <li /> Western Australia Bendigo Racecourse,
            <li /> Bendigo,
          </ul>
        </div> */}
        <div className="homeGridBottomRight">
          Bottom Right - Quad Four
          {/* <CalcMovement /> */}
          {/* <Timer /> */}
          {/* <SkillCounter /> */}
        </div>
      </div>
      {/* <div id="homeVideoTop">
        <h1> Watch Previous Races </h1>
        <iframe
          width="600"
          height="340"
          src="https://www.youtube.com/embed/VMAk1_bcv90?rel=0&amp;autoplay=0&mute=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; mute=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <br />
        <br />
        <iframe
          id="homeVideoBottom"
          width="600"
          height="340"
          src="https://www.youtube.com/embed/rPaU-waOqcQ?rel=0&amp;autoplay=0&mute=01"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div> */}
    </div>
  );
};

export default Home;
