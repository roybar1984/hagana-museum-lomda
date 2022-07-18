import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Mission4.css";
import { Markup } from "interweave";
import { useNavigate } from "react-router-dom";
import BackBtn from "./../../components/backBtn/BackBtn";
import TextBtn from "../../components/textBtn/TextBtn";
import NextBtn from "../../components/nextBtn/NextBtn";
import PhoneIcon from "../../components/phoneIcon/PhoneIcon";

function Mission4(props) {
  const phoneNumberRef = useRef();
  const textAreaRef = useRef();
  const questionRef = useRef();
  const navigate = useNavigate();
  const [showMission, setShowMission] = useState(false);
  const [readOnly, setReadOnly] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    props.setTextIndex(7);
    props.setBackgroundType("medium-background");
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleShowMission4 = (event) => {
    setShowMission(true);
  };

  const handleCheckMission4 = (event) => {
    setIsFinished(true);
    setReadOnly(true);
  };

  const handleMoveIntroMission5 = (event) => {
    navigate("/introMission5");
  };

  useEffect(() => {
    if (showMission) {
      const mission4AnimationTl = gsap.timeline();
      mission4AnimationTl
        .from(phoneNumberRef.current, {
          y: 70,
          opacity: 0.5,
          border: "none",
          ease: "sine",
          duration: 1.2,
        })
        .from(
          questionRef.current,
          {
            opacity: 0,
            // y: 30,
            // scale: 0,
            ease: "sine",
            duration: 1.7,
          },
          "+=0.5"
        )
        .from(
          textAreaRef.current,
          {
            opacity: 0,
            ease: "sine",
            duration: 1.5,
          },
          "-=0.2"
        );
    }
  }, [showMission]);

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
        <p
          ref={questionRef}
          className={`mission-instruction-paragraph  ${
            showMission
              ? "mission4-question-paragrapgh"
              : "mission4-instruction-paragrapgh"
          }`}
        >
          {!showMission ? (
            <Markup content={props.Data[7].instruction} />
          ) : (
            <Markup content={props.Data[7].missionText} />
          )}
        </p>

        <p
          ref={phoneNumberRef}
          className={`mission-instruction-paragraph ${
            !showMission ? "phone-number" : "phone-number-for-question"
          }`}
        >
          <Markup content={props.Data[7].phoneNumber} />
        </p>
        {!showMission && (
          <>
            <PhoneIcon />
            <TextBtn
              handleClick={handleShowMission4}
              className="check-btn check-btn-mission3 continue-btn-mission4"
              btnText={props.Data[7].btnText}
            />
          </>
        )}
        {showMission && (
          <>
            <textarea
              ref={textAreaRef}
              className="input-mission2 input-mission4"
              placeholder="הקלידו כאן"
              type="text"
              readOnly={readOnly}
              onChange={(event) => {
                let answer = event.target.value;
                if (answer !== "" && answer.trim() !== "") {
                  setAnswer(answer.trim());
                }
              }}
              //   setReadOnly={setReadOnly}
              //   isFinished={isFinished}
              //   answer={answer}
              //   setAnswer={setAnswer}
              //   textIndex={7}
              //   id={0}
              //   Data={props.Data}
              //   checkAns={false}
            />
            {answer && !isFinished && (
              <TextBtn
                handleClick={handleCheckMission4}
                className="check-btn check-btn-mission4"
                btnText="בדיקה"
              />
            )}
            {isFinished && (
              <>
                <p className="answer-paragraph answer-paragrapgh-mission-4 fade-animation">
                  <Markup content={props.Data[7].answerText} />
                </p>
                <NextBtn
                  fillClassName={"light-btn"}
                  textIndex={props.textIndex}
                  handleClickNext={handleMoveIntroMission5}
                />
              </>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default Mission4;
