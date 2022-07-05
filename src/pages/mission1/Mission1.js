import React from "react";
import { useState, useEffect } from "react";
import "./Mission1.css";
import { Markup } from "interweave";
import TextBtn from "./../../components/textBtn/TextBtn";
import InfoIcon from "../../components/infoIcon/InfoIcon";
import BackBtn from "../../components/backBtn/BackBtn";

function Mission1(props) {
  const [isInfoShowed, setIsInfoShowed] = useState(true);

  useEffect(() => {
    props.setTextIndex(4);
    setIsInfoShowed(true);
  }, []);

  const handleCloseInfo = (event) => {
    console.log("gs");
    if (!isInfoShowed) {
      setIsInfoShowed(true);
    } else {
      setIsInfoShowed(false);
    }
  };

  return (
    <div className="mission-container">
      <h1 className="mission-title">
        {" "}
        <Markup content={props.Data[4].title} />
      </h1>
      <BackBtn textIndex={props.textIndex} setTextIndex={props.setTextIndex} />
      <InfoIcon isInfoShowed={isInfoShowed} setIsInfoShowed={setIsInfoShowed} />
      <div
        className={`info-icon ${
          !isInfoShowed ? "display-btn" : "hint-icon-hidden "
        }`}
        onClick={() => setIsInfoShowed(true)}
      ></div>

      <div
        className={`info-container-wrapper ${
          // !isHintShowed ? "hint-container-showed" : "hint-container-hidden"
          isInfoShowed ? "info-container-showed " : "info-container-hidden"
        }`}
      >
        <div
          className="info-container"

          // isInfoShowed ? "info-container-showed" : "info-container-hidden"
        >
          <Markup content={props.Data[4].instruction} />
          <button
            onClick={handleCloseInfo}
            //   ref={openingBtn}
            className="btns understand-btn"
          >
            <Markup content={props.Data[4].btnText} />
          </button>
        </div>
      </div>

      <div className="answer-container ">
        <Markup content={props.Data[4].missionText} />
      </div>
    </div>
  );
}

export default Mission1;
