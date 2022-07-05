import React, { useState } from "react";
import "./AboutPalmachPage.css";
import { Markup } from "interweave";
import { useNavigate } from "react-router-dom";
import eyeGif from "./../../media/gifs/Soldier not talking.gif";
import BackBtn from "../../components/backBtn/BackBtn";

function AboutPalmachPage(props) {
  const navigate = useNavigate();
  const [isFinishedScrolling, setIsFinishedScrolling] = useState(false);

  const handleScroll = (e) => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) {
      setIsFinishedScrolling(true);
    }
  };

  const handleClickMission1 = (e) => {
    console.log("textIndex: " + props.textIndex);
    props.setTextIndex(props.textIndex + 1);
    navigate("/mission1");
    // navigate(1);
  };

  return (
    <div className="bubble-container">
      <BackBtn textIndex={props.textIndex} setTextIndex={props.setTextIndex} />
      <h1 className="mission-title">
        <Markup content={props.Data[props.textIndex].title} />
      </h1>
      <div onScroll={handleScroll} className="scroll-text-container text">
        <div className="scroll-text">
          {" "}
          <Markup content={props.Data[3].text} />
        </div>
      </div>
      <div className="chracter-btn-container">
        <img
          className="character-gif small-gif"
          src={eyeGif}
          alt="loading..."
        />
        {isFinishedScrolling && (
          <button
            onClick={handleClickMission1}
            className="btns start-lomda-btn start-mission-btn"
          >
            למשימה
          </button>
        )}
      </div>
    </div>
  );
}

export default AboutPalmachPage;
