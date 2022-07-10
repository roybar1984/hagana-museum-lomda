import React, { useState, useEffect } from "react";
import "./InputField.css";

function InputField(props) {
  return (
    <input
      className={props.className}
      maxLength={props.maxLength}
      readOnly={props.readOnly}
      placeholder={props.placeholder}
      type={props.type}
      onClick={(event) => {
        props.setIsInputClicked(true);
      }}
      onChange={(event) => {
        let answer = event.target.value;
        if (answer !== "" && answer.trim() !== "") {
          props.setAnswer(answer);
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
