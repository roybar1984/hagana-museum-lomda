import React, { useState, useEffect } from "react";
import "./Mission5.css";
import { Markup } from "interweave";
import { useNavigate } from "react-router-dom";
import BackBtn from "./../../components/backBtn/BackBtn";
import TextBtn from "../../components/textBtn/TextBtn";
import NextBtn from "../../components/nextBtn/NextBtn";
import PalmachIcon from "../../components/palmachIcon/PalmachIcon";
import UpArrow from "../../components/upArrow/UpArrow";

function Mission5(props) {
  const navigate = useNavigate();
  useEffect(() => {
    props.setTextIndex(8);
    props.setBackgroundType("medium-background");
  }, []);

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
        <p className="mission-instruction-paragraph mission4-instruction-paragrapgh">
          <Markup content={props.Data[8].instruction} />
        </p>
        <PalmachIcon />
        <div className="btn-arrow-container">
          <UpArrow />
          <TextBtn
            className="check-btn-mission3 move-to-palmach-website-btn"
            btnText={props.Data[8].btnText}
          />
        </div>
      </div>
    </>
  );
}

export default Mission5;
