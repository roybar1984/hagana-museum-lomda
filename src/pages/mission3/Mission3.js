import React, { useState, useEffect, useReducer } from "react";
import "./Mission3.css";
import BackBtn from "./../../components/backBtn/BackBtn";
import { Markup } from "interweave";
import InputField from "../../components/inputField/InputField";
import TextBtn from "../../components/textBtn/TextBtn";
import NextBtn from "../../components/nextBtn/NextBtn";
import { useNavigate } from "react-router-dom";

function Mission3(props) {
  const navigate = useNavigate();
  const [readOnly, setReadOnly] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [isAllFull, setIsAllFull] = useState(false);
  //   const [answers, setAnswers] = useState([
  //     {
  //       inputText: "",
  //     },
  //     {
  //       inputText: "",
  //     },
  //     {
  //       inputText: "",
  //     },
  //     {
  //       inputText: "",
  //     },
  //     {
  //       inputText: "",
  //     },
  //     {
  //       inputText: "",
  //     },
  //   ]);

  const initialState = {
    ans0: "",
    ans1: "",
    ans2: "",
    ans3: "",
    ans4: "",
    ans5: "",
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
      case 3:
        newState = { ...state, ans3: action.inputValue };
        break;
      case 4:
        newState = { ...state, ans4: action.inputValue };
        break;
      case 5:
        newState = { ...state, ans5: action.inputValue };
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

  //   const checkIfAllFull = (newState) => {
  //     let isAllTrue = true;
  //     Object.keys(newState).forEach(function(key, index) {
  //       if (!newState[key]) {
  //         isAllTrue = false;
  //         setIsAllFull(false);
  //       }
  //     });
  //     if (isAllTrue) {
  //       setIsAllFull(true);
  //     }
  //     return;
  //   };

  useEffect(() => {
    props.setTextIndex(6);
    props.setBackgroundType("medium-background");
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleCheckMission3 = (event) => {
    setIsFinished(true);
    setReadOnly(true);
  };

  const handleMoveMission4 = (event) => {
    navigate("/mission4");
  };

  return (
    <>
      <div className="mission-container mission3-container">
        <BackBtn
          textIndex={props.textIndex}
          setTextIndex={props.setTextIndex}
        />
        <h1 className="mission-title">
          {" "}
          <Markup content={props.Data[6].title} />
        </h1>
        <p className="mission-instruction-paragraph mission3-instruction-paragrapgh">
          <Markup content={props.Data[6].instruction} />
        </p>
        <div className="input-fields-container-mission3">
          <InputField
            className="input-mission2 input-mission3"
            placeholder="הקלידו כאן"
            type="text"
            maxLength={6}
            // value={answers[0]}
            id={0}
            // answer={answers}
            // setAnswer={setAnswers}
            answer={state.ans0}
            setAnswer={(value) =>
              dispatch({ inputNumber: 0, inputValue: value })
            }
            textIndex={6}
            readOnly={readOnly}
            setReadOnly={setReadOnly}
            isFinished={isFinished}
            Data={props.Data}
            checkAns={true}
          />
          <InputField
            className="input-mission2 input-mission3"
            placeholder="הקלידו כאן"
            type="text"
            maxLength={6}
            // value={answers[1]}
            id={1}
            // answer={answers}
            // setAnswer={setAnswers}
            // answer={ans1}
            // setAnswer={setAns1}
            answer={state.ans1}
            setAnswer={(value) =>
              dispatch({ inputNumber: 1, inputValue: value })
            }
            textIndex={6}
            readOnly={readOnly}
            setReadOnly={setReadOnly}
            isFinished={isFinished}
            Data={props.Data}
            checkAns={true}
          />
          <InputField
            className="input-mission2 input-mission3"
            placeholder="הקלידו כאן"
            type="text"
            maxLength={6}
            // value={answers[2]}
            id={2}
            // answer={answers}
            // setAnswer={setAnswers}
            // answer={ans2}
            // setAnswer={setAns2}
            answer={state.ans2}
            setAnswer={(value) =>
              dispatch({ inputNumber: 2, inputValue: value })
            }
            textIndex={6}
            readOnly={readOnly}
            setReadOnly={setReadOnly}
            isFinished={isFinished}
            Data={props.Data}
            checkAns={true}
          />
          <InputField
            className="input-mission2 input-mission3"
            placeholder="הקלידו כאן"
            type="text"
            maxLength={6}
            // value={answers[3]}
            id={3}
            // answer={answers}
            // setAnswer={setAnswers}
            // answer={ans3}
            // setAnswer={setAns3}
            answer={state.ans3}
            setAnswer={(value) =>
              dispatch({ inputNumber: 3, inputValue: value })
            }
            textIndex={6}
            readOnly={readOnly}
            setReadOnly={setReadOnly}
            isFinished={isFinished}
            Data={props.Data}
            checkAns={true}
          />
          <InputField
            className="input-mission2 input-mission3"
            placeholder="הקלידו כאן"
            type="text"
            maxLength={6}
            // value={answers[4]}
            id={4}
            // answer={answers}
            // setAnswer={setAnswers}
            // answer={ans4}
            // setAnswer={setAns4}
            answer={state.ans4}
            setAnswer={(value) =>
              dispatch({ inputNumber: 4, inputValue: value })
            }
            textIndex={6}
            readOnly={readOnly}
            setReadOnly={setReadOnly}
            isFinished={isFinished}
            Data={props.Data}
            checkAns={true}
          />
          <InputField
            className="input-mission2 input-mission3"
            placeholder="הקלידו כאן"
            type="text"
            maxLength={6}
            // value={answers[5]}
            id={5}
            // answer={answers}
            // setAnswer={setAnswers}
            // answer={ans5}
            // setAnswer={setAns5}
            answer={state.ans5}
            setAnswer={(value) =>
              dispatch({ inputNumber: 5, inputValue: value })
            }
            textIndex={6}
            readOnly={readOnly}
            setReadOnly={setReadOnly}
            isFinished={isFinished}
            Data={props.Data}
            checkAns={true}
          />
        </div>

        {isAllFull && !isFinished && (
          <TextBtn
            handleClick={handleCheckMission3}
            className="check-btn-mission3"
            btnText="בדיקה"
          />
        )}

        {isFinished && (
          <>
            <p className="answer-paragraph answer-paragrapgh-mission-3 fade-animation">
              <Markup content={props.Data[6].answerText} />{" "}
            </p>
            <NextBtn
              fillClassName={"light-btn"}
              textIndex={props.textIndex}
              handleClickNext={handleMoveMission4}
            />
          </>
        )}

        {/* {isFinished && (
          <NextBtn
            fillClassName={"light-btn"}
            textIndex={props.textIndex}
            handleClickNext={handleMoveMission4}
          />
        )} */}
      </div>
    </>
  );
}

export default Mission3;
