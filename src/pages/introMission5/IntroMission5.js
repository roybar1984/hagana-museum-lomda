import React, { useState, useEffect } from "react";
import "./IntroMission5.css";
import { Markup } from "interweave";
import { useNavigate } from "react-router-dom";
import BackBtn from "../../components/backBtn/BackBtn";
import TextBtn from "../../components/textBtn/TextBtn";
import NextBtn from "../../components/nextBtn/NextBtn";
import PalmachIcon from "../../components/palmachIcon/PalmachIcon";
import UpArrow from "../../components/upArrow/UpArrow";

function Mission5(props) {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    props.setTextIndex(8);
    props.setBackgroundType("dark-background");
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleMoveMission5 = (event) => {
    navigate("/mission5");
  };

  return (
    <>
      <div className="mission-container mission3-container">
        <BackBtn
          textIndex={props.textIndex}
          setTextIndex={props.setTextIndex}
        />
        <h1 className="mission-title">
          <Markup content={props.Data[8].title} />
        </h1>
        <p className="mission-instruction-paragraph mission5-intro-instruction-paragrapgh">
          <Markup content={props.Data[8].instruction} />
        </p>
        <PalmachIcon setIsClicked={setIsClicked} isClicked={isClicked} />
        <div className="btn-arrow-container">
          <UpArrow />
          <TextBtn
            className="check-btn-mission3 move-to-palmach-website-btn"
            btnText={props.Data[8].btnText}
          />
          {!isClicked && (
            <p className="mission-instruction-paragraph dont-forget-paragrapgh fade-animation">
              אבל אל תשכחו לחזור
            </p>
          )}
        </div>
        {isClicked && (
          <NextBtn
            handleClickNext={handleMoveMission5}
            fillClassName={"light-btn"}
          />
        )}
      </div>
    </>
  );
}

export default Mission5;
