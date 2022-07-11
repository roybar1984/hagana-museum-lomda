import React, { useState, useEffect } from "react";
import "./InputField.css";

function InputField(props) {
  // console.log(props.Data[props.textIndex].answers[props.id]);
  const [isCorrect, setIsCorrect] = useState("");
  return (
    <input
      className={`${props.className} ${
        isCorrect && props.isFinished && "correct"
      } ${!isCorrect && props.isFinished && "wrong"}`}
      // className={props.className}
      maxLength={props.maxLength}
      readOnly={props.readOnly}
      placeholder={props.placeholder}
      type={props.type}
      // onClick={(event) => {
      //   props.setIsInputClicked(true);
      // }}
      onChange={(event) => {
        let answer = event.target.value;
        if (answer !== "" && answer.trim() !== "") {
          props.setAnswer(answer.trim());
          if (answer.trim() === props.Data[props.textIndex].answers[props.id]) {
            setIsCorrect(true);
            //   // if (parseInt(fieldIndex, 10) < numOfFields) {
            //   //   // Get the next input field
            //   //   const nextSibling = document.querySelector(
            //   //     `input[name=ssn-${parseInt(fieldIndex, 10) + 1}]`
            //   //   );

            //   //   // If found, focus the next field
            //   //   if (nextSibling !== null) {
            //   //     nextSibling.focus();
            //   //   }
            // }
          } else {
            setIsCorrect(false);
          }
        }

        // setIsClicked(true);
        // if (answer !== "" && answer.trim() !== "") {
        //   if (props.isOneSubmitted) {
        //     props.setIsBothSubmitted(true);
        //   } else {
        //     props.setIsOneSubmitted(true);
        //   }

        //   //   props.setIsBothSubmitted(true);
        //   //   if (
        //   //     answer === props.Data[props.textIndex].answers[0] ||
        //   //     props.Data[props.textIndex].answers[1]
        //   //   ) {
        //   //     //   setIsCorrect(true);
        //   //   } else {
        //   //     //   setIsCorrect(false);
        //   //   }
        //   //   //   setIsClicked(false);
        // }
        // props.setanswer(answer);
      }}
    ></input>
  );
}

export default InputField;
