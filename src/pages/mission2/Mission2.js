import { Markup } from "interweave";
import React, { useState, useEffect } from "react";
import "./Mission2.css";
import NextBtn from "../../components/nextBtn/NextBtn";
import { useNavigate } from "react-router-dom";
import BackBtn from "../../components/backBtn/BackBtn";
import InputField from "../../components/inputField/InputField";
import TextBtn from "../../components/textBtn/TextBtn";

function Mission2(props) {
  const navigate = useNavigate();
  const [isFinished, setIsFinished] = useState(false);
  const [ans1, setAns1] = useState("");
  const [ans2, setAns2] = useState("");
  const [isBothSubmitted, setIsBothSubmitted] = useState(false);
  const [isOneSubmitted, setIsOneSubmitted] = useState(false);
  const [readOnly, setReadOnly] = useState(false);

  useEffect(() => {
    props.setTextIndex(5);

    // setIsFinished(JSON.parse(window.localStorage.getItem("isFinished")));
  }, []);

  //   useEffect(() => {
  //     if (isBothSubmitted === true) {
  //       window.localStorage.setItem("isFinished", true);
  //     }
  //   }, [isBothSubmitted]);

  const handleCheckMission2 = (event) => {
    setIsFinished(true);
    setReadOnly(true);
    //  inputRef.current.blur();
  };

  const handleMoveMission3 = (event) => {
    navigate("/mission3");
  };

  const handleChangeAnswer = (event) => {};

  return (
    <div className="mission-container mission2-container">
      <BackBtn textIndex={props.textIndex} setTextIndex={props.setTextIndex} />
      <h1 className="mission-title">
        {" "}
        <Markup content={props.Data[5].title} />
      </h1>
      <p className="mission-instruction-paragraph">
        <Markup content={props.Data[5].instruction} />
      </p>
      <div className="input-fields-container">
        <InputField
          className="input-mission2"
          placeholder="הקלידו כאן"
          type="text"
          maxLength={5}
          answer={ans1}
          setAnswer={setAns1}
          textIndex={props.textIndex}
          isBothSubmitted={isBothSubmitted}
          setIsBothSubmitted={setIsBothSubmitted}
          isOneSubmitted={isOneSubmitted}
          setIsOneSubmitted={setIsOneSubmitted}
          readOnly={readOnly}
          setReadOnly={setReadOnly}
        />
        <InputField
          className="input-mission2"
          placeholder="הקלידו כאן"
          type="text"
          maxLength={5}
          answer={ans2}
          setAnswer={setAns2}
          textIndex={props.textIndex}
          isBothSubmitted={isBothSubmitted}
          setIsBothSubmitted={setIsBothSubmitted}
          isOneSubmitted={isOneSubmitted}
          setIsOneSubmitted={setIsOneSubmitted}
          readOnly={readOnly}
          setReadOnly={setReadOnly}
        />
      </div>
      {/* {isBothSubmitted && (
        <NextBtn
          textIndex={props.textIndex}
          handleClickNext={handleMoveMission3}
        />
      )} */}

      {isBothSubmitted && !isFinished && (
        <TextBtn
          handleClick={handleCheckMission2}
          className="check-btn"
          btnText="בדיקה"
        />
      )}

      {isFinished && (
        <p className="answer-paragraph fade-animation">
          <Markup content={props.Data[5].answerText} />{" "}
        </p>
      )}

      {isFinished && (
        <NextBtn
          textIndex={props.textIndex}
          handleClickNext={handleMoveMission3}
        />
      )}

      {/* 
      {isFinished && [
        <>
          <p className="answer-paragraph fade-animation">
            <Markup content={props.Data[5].answerText} />{" "}
          </p>
          <NextBtn
            textIndex={props.textIndex}
            handleClickNext={handleMoveMission3}
          />
        </>,
      ]} */}
    </div>
  );
}

export default Mission2;
