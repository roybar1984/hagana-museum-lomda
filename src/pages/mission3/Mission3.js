import React, { useState, useEffect } from "react";
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

  const [ans0, setAns0] = useState("");
  const [ans1, setAns1] = useState("");
  const [ans2, setAns2] = useState("");
  const [ans3, setAns3] = useState("");
  const [ans4, setAns4] = useState("");
  const [ans5, setAns5] = useState("");

  useEffect(() => {
    props.setTextIndex(6);
    props.setBackgroundType("medium-background");
  }, []);

  //   useEffect(() => {
  //     console.log(answers);
  //     let isAllTrue = true;
  //     Array.from(answers).forEach((input, index) => {
  //       //   console.log(input);
  //       if (!input.inputText) {
  //         isAllTrue = false;
  //         setIsAllFull(false);
  //       }
  //     });
  //     if (isAllTrue) {
  //       setIsAllFull(true);
  //     }
  //     console.log(answers);
  //     return;
  //
  //   }, [answers]);

  //     const
  //   const initialAnswers = [
  //     { ans1: "" },
  //     { ans2: "" },
  //     { ans3: "" },
  //     { ans4: "" },
  //     { ans5: "" },
  //     { ans6: "" },
  //   ];

  //   const [answers, setAnswers] = useState(initialAnswers);
  //   const updateObjectInArray = () => {
  //     setAnswers((current) =>
  //       current.map((obj, index) => {
  //         if (obj.id === 2) {
  //           return { ...obj, name: "Sophia", country: "Sweden" };
  //         }

  //         return obj;
  //       })
  //     );
  //   };

  const handleCheckMission3 = (event) => {
    setIsFinished(true);
    setReadOnly(true);

    // let answer = event.target.value;
    // setIsClicked(true);

    // if (answer === props.arrLetters[props.id].answer) {
    //   setIsCorrect(true);
    //   // if (parseInt(fieldIndex, 10) < numOfFields) {
    //   //   // Get the next input field
    //   //   const nextSibling = document.querySelector(
    //   //     `input[name=ssn-${parseInt(fieldIndex, 10) + 1}]`
    //   //   );

    //   //   // If found, focus the next field
    //   //   if (nextSibling !== null) {
    //   //     nextSibling.focus();
    //   //   }
    //   // }
    // } else {
    //   setIsCorrect(false);
    // }

    // //  inputRef.current.blur();
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
            placeholder="..."
            type="text"
            maxLength={6}
            // value={answers[0]}
            id={0}
            // answer={answers}
            // setAnswer={setAnswers}
            answer={ans0}
            setAnswer={setAns0}
            textIndex={6}
            readOnly={readOnly}
            setReadOnly={setReadOnly}
            isFinished={isFinished}
            Data={props.Data}
            // isInputClicked={isInputClicked}
            // setIsInputClicked={setIsInputClicked}
          />
          <InputField
            className="input-mission2 input-mission3"
            placeholder="..."
            type="text"
            maxLength={6}
            // value={answers[1]}
            id={1}
            // answer={answers}
            // setAnswer={setAnswers}
            answer={ans1}
            setAnswer={setAns1}
            textIndex={6}
            readOnly={readOnly}
            setReadOnly={setReadOnly}
            isFinished={isFinished}
            Data={props.Data}
            // isInputClicked={isInputClicked}
            // setIsInputClicked={setIsInputClicked}
          />
          <InputField
            className="input-mission2 input-mission3"
            placeholder="..."
            type="text"
            maxLength={6}
            // value={answers[2]}
            id={2}
            // answer={answers}
            // setAnswer={setAnswers}
            answer={ans2}
            setAnswer={setAns2}
            textIndex={6}
            readOnly={readOnly}
            setReadOnly={setReadOnly}
            isFinished={isFinished}
            Data={props.Data}
            // isInputClicked={isInputClicked}
            // setIsInputClicked={setIsInputClicked}
          />
          <InputField
            className="input-mission2 input-mission3"
            placeholder="..."
            type="text"
            maxLength={6}
            // value={answers[3]}
            id={3}
            // answer={answers}
            // setAnswer={setAnswers}
            answer={ans3}
            setAnswer={setAns3}
            textIndex={6}
            readOnly={readOnly}
            setReadOnly={setReadOnly}
            isFinished={isFinished}
            Data={props.Data}
            // isInputClicked={isInputClicked}
            // setIsInputClicked={setIsInputClicked}
          />
          <InputField
            className="input-mission2 input-mission3"
            placeholder="..."
            type="text"
            maxLength={6}
            // value={answers[4]}
            id={4}
            // answer={answers}
            // setAnswer={setAnswers}
            answer={ans4}
            setAnswer={setAns4}
            textIndex={6}
            readOnly={readOnly}
            setReadOnly={setReadOnly}
            isFinished={isFinished}
            Data={props.Data}
            // isInputClicked={isInputClicked}
            // setIsInputClicked={setIsInputClicked}
          />
          <InputField
            className="input-mission2 input-mission3"
            placeholder="..."
            type="text"
            maxLength={6}
            // value={answers[5]}
            id={5}
            // answer={answers}
            // setAnswer={setAnswers}
            answer={ans5}
            setAnswer={setAns5}
            textIndex={6}
            readOnly={readOnly}
            setReadOnly={setReadOnly}
            isFinished={isFinished}
            Data={props.Data}
            // isInputClicked={isInputClicked}
            // setIsInputClicked={setIsInputClicked}
          />
        </div>
        {ans0 && ans1 && ans2 && ans3 && ans4 && ans5 && !isFinished && (
          <TextBtn
            handleClick={handleCheckMission3}
            className="check-btn-mission3"
            btnText="בדיקה"
          />
        )}

        {isFinished && (
          <p className="answer-paragraph answer-paragrapgh-mission-3 fade-animation">
            <Markup content={props.Data[6].answerText} />{" "}
          </p>
        )}

        {isFinished && (
          <NextBtn
            fillClassName={"light-btn"}
            textIndex={props.textIndex}
            handleClickNext={handleMoveMission4}
          />
        )}
      </div>
    </>
  );
}

export default Mission3;
