import React from "react";
import { useState, useEffect } from "react";
import "./Mission1.css";
import { Markup } from "interweave";
import TextBtn from "./../../components/textBtn/TextBtn";
import InfoIcon from "../../components/infoIcon/InfoIcon";
import BackBtn from "../../components/backBtn/BackBtn";
import NextBtn from "../../components/nextBtn/NextBtn";
import { useNavigate } from "react-router-dom";
import InputField from "../../components/inputField/InputField";

function Mission1(props) {
  const navigate = useNavigate();

  const [isInfoShowed, setIsInfoShowed] = useState(true);
  const [isCorrect, setIsCorrect] = useState();
  const [isClicked, setIsClicked] = useState(false);
  const [isMissionDone, setIsMissionDone] = useState(false);

  useEffect(() => {
    props.setTextIndex(4);
    setIsInfoShowed(true);

    return () => {
      setIsInfoShowed(false);
    };
  }, []);

  // useEffect(() => {
  //   if (isMissionDone) {
  //     setIsInfoShowed(false);
  //   }
  // }, [isMissionDone]);

  const handleCloseInfo = (event) => {
    if (!isInfoShowed) {
      setIsInfoShowed(true);
    } else {
      setIsInfoShowed(false);
    }
  };

  const handleChangeAnswer = (event) => {
    setIsClicked(true);
    if (event.target.value === "") {
      setIsClicked(false);
    }

    if (event.target.value === props.Data[4].answer) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  const handleMoveMission2 = (event) => {
    setIsMissionDone(true);
    navigate("/mission2");
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
        <input
          maxLength={2}
          className={`number-input  ${isCorrect && "correct"} ${isClicked &&
            !isCorrect &&
            "wrong"} ${!isClicked && isCorrect === "" && "number-input"}`}
          placeholder={"מספר"}
          type={"number"}
          onChange={handleChangeAnswer}
        ></input>
        {isClicked && (
          <p
            className={`feedback-text ${
              isCorrect ? "feedback-text-correct" : "feedback-text-wrong"
            } `}
          >
            {isCorrect ? "כל הכבוד!" : "נסו שוב"}
          </p>
        )}
      </div>
      {isCorrect && (
        <NextBtn
          textIndex={props.textIndex}
          setTextIndex={props.setTextIndex}
          handleClickNext={handleMoveMission2}
        />
      )}
    </div>
  );
}

export default Mission1;
