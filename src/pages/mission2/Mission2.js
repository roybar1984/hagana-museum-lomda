import { Markup } from "interweave";
import React, { useState, useEffect, useReducer } from "react";
import "./Mission2.css";
import NextBtn from "../../components/nextBtn/NextBtn";
import { useNavigate } from "react-router-dom";
import BackBtn from "../../components/backBtn/BackBtn";
import InputField from "../../components/inputField/InputField";
import TextBtn from "../../components/textBtn/TextBtn";

function Mission2(props) {
  const navigate = useNavigate();
  const [isFinished, setIsFinished] = useState(false);
  const [readOnly, setReadOnly] = useState(false);
  const [isAllFull, setIsAllFull] = useState(false);

  const initialState = {
    ans1: "",
    ans2: "",
  };

  const reducer = (state, action) => {
    let newState;
    switch (action.inputNumber) {
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
    console.log(newState);
    return newState;
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    props.setTextIndex(5);
    props.setBackgroundType("light-background");
    // setIsFinished(JSON.parse(window.localStorage.getItem("isFinished")));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleCheckMission2 = (event) => {
    setIsFinished(true);
    setReadOnly(true);
  };

  const handleMoveMission3 = (event) => {
    navigate("/mission3");
  };

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
          answer={state.ans1}
          setAnswer={(value) => dispatch({ inputNumber: 1, inputValue: value })}
          textIndex={5}
          readOnly={readOnly}
          setReadOnly={setReadOnly}
          id={0}
          Data={props.Data}
          // isInputClicked={isInputClicked}
          // setIsInputClicked={setIsInputClicked}
        />
        <InputField
          className="input-mission2"
          placeholder="הקלידו כאן"
          type="text"
          maxLength={5}
          answer={state.ans2}
          setAnswer={(value) => dispatch({ inputNumber: 2, inputValue: value })}
          textIndex={5}
          readOnly={readOnly}
          setReadOnly={setReadOnly}
          id={1}
          Data={props.Data}
          // isInputClicked={isInputClicked}
          // setIsInputClicked={setIsInputClicked}
        />
      </div>

      {isAllFull && !isFinished && (
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
