import React, { useState, useEffect } from "react";
import "./Mission4.css";
import { Markup } from "interweave";
import { useNavigate } from "react-router-dom";
import BackBtn from "./../../components/backBtn/BackBtn";
import TextBtn from "../../components/textBtn/TextBtn";
import NextBtn from "../../components/nextBtn/NextBtn";
import PhoneIcon from "../../components/phoneIcon/PhoneIcon";

function Mission4(props) {
  const navigate = useNavigate();
  useEffect(() => {
    props.setTextIndex(6);
    props.setBackgroundType("medium-background");
  }, []);
  return (
    <>
      <div className="mission-container mission4-container">
        <BackBtn
          textIndex={props.textIndex}
          setTextIndex={props.setTextIndex}
        />
        <h1 className="mission-title">
          {" "}
          <Markup content={props.Data[7].title} />
        </h1>
        <p className="mission-instruction-paragraph mission4-instruction-paragrapgh">
          <Markup content={props.Data[7].instruction} />
        </p>
        <p className="mission-instruction-paragraph phone-number">
          <Markup content={props.Data[7].phoneNumber} />
        </p>
        <PhoneIcon />
        <TextBtn
          //   handleClick={handleCheckMission3}
          className="check-btn-mission3 continue-btn-mission4"
          btnText={props.Data[7].btnText}
        />
      </div>
    </>
  );
}

export default Mission4;
