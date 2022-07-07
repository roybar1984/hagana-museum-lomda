import React, { useState, useEffect } from "react";
import "./InputField.css";

function InputField(props) {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  useEffect(() => {
    return () => {
      props.setIsOneSubmitted(false);
    };
  }, []);
  return (
    <input
      className={props.className}
      maxLength={props.maxLength}
      readOnly={props.readOnly}
      placeholder={props.placeholder}
      type={props.type}
      onChange={(event) => {
        let answer = event.target.value;
        props.setAnswer(answer);

        // setIsClicked(true);
        if (answer !== "" && answer.trim() !== "") {
          if (props.isOneSubmitted) {
            props.setIsBothSubmitted(true);
          } else {
            props.setIsOneSubmitted(true);
          }

          //   props.setIsBothSubmitted(true);
          //   if (
          //     answer === props.Data[props.textIndex].answers[0] ||
          //     props.Data[props.textIndex].answers[1]
          //   ) {
          //     //   setIsCorrect(true);
          //   } else {
          //     //   setIsCorrect(false);
          //   }
          //   //   setIsClicked(false);
        }
        // props.setanswer(answer);
      }}
    ></input>
  );
}

export default InputField;
