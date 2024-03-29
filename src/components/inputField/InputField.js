import React, { useState } from "react";
import "./InputField.css";

function InputField(props) {
  const [isCorrect, setIsCorrect] = useState("");

  return (
    <input
      className={`${props.className} ${isCorrect &&
        props.isFinished &&
        props.checkAns &&
        "correct"} ${!isCorrect &&
        props.isFinished &&
        props.checkAns &&
        "wrong"}`}
      maxLength={props.maxLength}
      readOnly={props.readOnly}
      placeholder={props.placeholder}
      type={props.type}
      onChange={(event) => {
        let answer = event.target.value;
        if (props.isMission5) {
          props.handleCheckAnswers(answer, props.id);
        } else {
          if (answer !== "" && answer.trim() !== "") {
            props.setAnswer(answer.trim());
            if (props.checkAns) {
              if (
                answer.trim() === props.Data[props.textIndex].answers[props.id]
              ) {
                setIsCorrect(true);
              } else {
                setIsCorrect(false);
              }
            }
          }
        }
      }}
    ></input>
  );
}

export default InputField;
