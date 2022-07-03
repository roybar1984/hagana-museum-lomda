import React from "react";
import "./AboutPalmachPage.css";
import { Markup } from "interweave";
import eyeGif from "./../../media/gifs/Soldier-talking.gif";

function AboutPalmachPage(props) {
  return (
    <div className="bubble-container">
      <h1 className="mission-title">
        <Markup content={props.Data[props.textIndex].title} />
      </h1>
      <div className="scroll-text-container text">
        <div className="scroll-text">
          {" "}
          <Markup content={props.Data[3].text} />
        </div>
      </div>
      <img className="character-gif small-gif" src={eyeGif} alt="loading..." />
    </div>
  );
}

export default AboutPalmachPage;
