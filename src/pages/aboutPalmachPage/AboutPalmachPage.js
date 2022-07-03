import React from "react";
import "./AboutPalmachPage.css";
import { Markup } from "interweave";

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
    </div>
  );
}

export default AboutPalmachPage;
