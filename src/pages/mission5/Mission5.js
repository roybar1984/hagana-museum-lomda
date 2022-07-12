import React, { useState, useEffect } from "react";
import "./Mission5.css";
import { Markup } from "interweave";
import { useNavigate } from "react-router-dom";
import BackBtn from "./../../components/backBtn/BackBtn";
import TextBtn from "../../components/textBtn/TextBtn";
import NextBtn from "../../components/nextBtn/NextBtn";
import InputField from "../../components/inputField/InputField";

function Mission5(props) {
  const navigate = useNavigate();
  const [readOnly, setReadOnly] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    props.setTextIndex(8);
    props.setBackgroundType("dark-background");
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
        <div className="questions-container-mission5">
          <div className="question-container-mission5">
            <p className="mission-instruction-paragraph mission5-instruction-paragrapgh">
              <Markup content={props.Data[8].questions[0]} />
            </p>
            <InputField
              className="input-mission2 input-mission5"
              placeholder="הקלידו כאן"
              type="text"
              // maxLength={5}
              // answer={ans1}
              // setAnswer={setAns1}
              textIndex={8}
              readOnly={readOnly}
              setReadOnly={setReadOnly}
              id={0}
              Data={props.Data}
            />
          </div>
          <div className="question-container-mission5">
            <p className="mission-instruction-paragraph mission5-instruction-paragrapgh">
              <Markup content={props.Data[8].questions[1]} />
            </p>
            <InputField
              className="input-mission2 input-mission5"
              placeholder="הקלידו כאן"
              type="text"
              // maxLength={5}
              // answer={ans1}
              // setAnswer={setAns1}
              textIndex={8}
              readOnly={readOnly}
              setReadOnly={setReadOnly}
              id={1}
              Data={props.Data}
            />
          </div>
          <div className="question-container-mission5">
            <p className="mission-instruction-paragraph mission5-instruction-paragrapgh">
              <Markup content={props.Data[8].questions[2]} />
            </p>
            <InputField
              className="input-mission2 input-mission5"
              placeholder="הקלידו כאן"
              type="text"
              // maxLength={5}
              // answer={ans1}
              // setAnswer={setAns1}
              textIndex={8}
              readOnly={readOnly}
              setReadOnly={setReadOnly}
              id={2}
              Data={props.Data}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Mission5;
