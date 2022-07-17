import React, { useState, useEffect, useReducer } from "react";
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
  const [isAllFull, setIsAllFull] = useState(false);

  const initialState = {
    ans0: "",
    ans1: "",
    ans2: "",
  };

  const reducer = (state, action) => {
    let newState;
    switch (action.inputNumber) {
      case 0:
        newState = { ...state, ans0: action.inputValue };
        break;
      case 1:
        newState = { ...state, ans1: action.inputValue };
        break;
      case 2:
        newState = { ...state, ans2: action.inputValue };
        break;
      default:
        throw new Error();
    }
    // checkIfAllFull(newState);
    let isAllTrue = true;
    Object.keys(newState).forEach(function(key, index) {
      if (!newState[key]) {
        isAllTrue = false;
        setIsAllFull(false);
      }
    });
    if (isAllTrue) {
      setIsAllFull(true);
    }
    return newState;
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    props.setTextIndex(8);
    props.setBackgroundType("dark-background");
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleCheckMission5 = (event) => {
    setIsFinished(true);
    setReadOnly(true);
  };

  const handleMovePalmachScroll = (event) => {
    navigate("/aboutPalmach");
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
        <div className="questions-container-mission5">
          <div className="question-container-mission5">
            <p className="mission-instruction-paragraph mission5-instruction-paragrapgh">
              <Markup content={props.Data[8].questions[0]} />
            </p>
            <InputField
              className="input-mission2 input-mission5"
              placeholder="הקלידו כאן"
              type="text"
              maxLength={8}
              textIndex={8}
              readOnly={readOnly}
              setReadOnly={setReadOnly}
              id={0}
              Data={props.Data}
              checkAns={true}
              answer={state.ans0}
              setAnswer={(value) =>
                dispatch({ inputNumber: 0, inputValue: value })
              }
              isFinished={isFinished}
            />

            <p
              className={`answer-paragraph answer-paragrapgh-mission-5 fade-animation ${isFinished &&
                "visible"}`}
            >
              <Markup content={props.Data[8].answers[0]} />
            </p>
          </div>
          <div className="question-container-mission5">
            <p className="mission-instruction-paragraph mission5-instruction-paragrapgh">
              <Markup content={props.Data[8].questions[1]} />
            </p>
            <InputField
              className="input-mission2 input-mission5"
              placeholder="הקלידו כאן"
              type="text"
              maxLength={8}
              textIndex={8}
              readOnly={readOnly}
              setReadOnly={setReadOnly}
              id={1}
              Data={props.Data}
              checkAns={true}
              answer={state.ans1}
              setAnswer={(value) =>
                dispatch({ inputNumber: 1, inputValue: value })
              }
              isFinished={isFinished}
            />
            <p
              className={`answer-paragraph answer-paragrapgh-mission-5 fade-animation ${isFinished &&
                "visible"}`}
            >
              <Markup content={props.Data[8].answers[1]} />
            </p>
          </div>
          <div className="question-container-mission5">
            <p className="mission-instruction-paragraph mission5-instruction-paragrapgh">
              <Markup content={props.Data[8].questions[2]} />
            </p>
            <InputField
              className="input-mission2 input-mission5"
              placeholder="הקלידו כאן"
              type="text"
              maxLength={10}
              textIndex={8}
              readOnly={readOnly}
              setReadOnly={setReadOnly}
              id={2}
              Data={props.Data}
              checkAns={true}
              answer={state.ans2}
              setAnswer={(value) =>
                dispatch({ inputNumber: 2, inputValue: value })
              }
              isFinished={isFinished}
            />
            <p
              className={`answer-paragraph answer-paragrapgh-mission-5 fade-animation ${isFinished &&
                "visible"}`}
            >
              <Markup content={props.Data[8].answers[2]} />
            </p>
          </div>
        </div>
        {isAllFull && !isFinished && (
          <TextBtn
            handleClick={handleCheckMission5}
            className="check-btn check-btn-mission3 check-btn-mission5"
            btnText="בדיקה"
          />
        )}
        {isFinished && (
          <NextBtn
            fillClassName={"light-btn"}
            textIndex={8}
            handleClickNext={handleMovePalmachScroll}
          />
        )}
      </div>
    </>
  );
}

export default Mission5;
