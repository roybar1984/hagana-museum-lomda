import React from "react";
import "./TextBtn.css";
import { Markup } from "interweave";

function TextBtn(props) {
  return (
    <button
      onClick={props.handleClick}
      //   ref={openingBtn}
      className={`btns start-lomda-btn ${props.className}`}
    >
      {props.btnText}
      {/* <Markup content={props.Data[props.textIndex].btnText} /> */}
    </button>
  );
}

export default TextBtn;
