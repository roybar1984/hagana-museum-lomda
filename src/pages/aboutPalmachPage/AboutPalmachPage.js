import React, { useState, useEffect } from "react";
import "./AboutPalmachPage.css";
import { Markup } from "interweave";
import { useNavigate } from "react-router-dom";
import eyeGif from "./../../media/gifs/Soldier-no talking-fixed.gif";
import BackBtn from "../../components/backBtn/BackBtn";
import NextBtn from "./../../components/nextBtn/NextBtn";

function AboutPalmachPage(props) {
  useEffect(() => {
    props.setTextIndex(props.textIndex);
    props.setBackgroundType(props.backgroundType);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
    props.setTextIndex(props.textIndex + 1);
    navigate("/mission1");
    // navigate(1);
  };

  const handleClickEndLomda = (event) => {
    navigate("/endPage");
  };

  return (
    <div className="bubble-container">
      <BackBtn textIndex={props.textIndex} setTextIndex={props.setTextIndex} />
      <h1 className={`mission-title ${props.textIndex === 9 && "light-text"}`}>
        <Markup content={props.Data[props.textIndex].title} />
      </h1>
      <div
        onScroll={handleScroll}
        className="scroll-text-container text scroll-text-container-dark"
      >
        <div
          className={`scroll-text ${
            props.textIndex === 9 && "light-text scroll-text-smaller"
          }`}
        >
          <Markup content={props.Data[props.textIndex].text} />
        </div>
      </div>
      <div className="chracter-btn-container">
        <img
          className="character-gif small-gif"
          src={eyeGif}
          alt="loading..."
        />
        {isFinishedScrolling && props.textIndex === 3 && (
          <button
            onClick={handleClickMission1}
            className={`btns start-lomda-btn start-mission-btn fade-animation $`}
          >
            למשימה
          </button>
        )}

        {isFinishedScrolling && props.textIndex === 9 && (
          <NextBtn
            handleClickNext={handleClickEndLomda}
            className="next-btn-scroll-page"
            fillClassName={"light-btn"}
          />
        )}
      </div>
    </div>
  );
}

export default AboutPalmachPage;
