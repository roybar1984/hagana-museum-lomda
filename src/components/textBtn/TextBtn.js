import React from "react";
import "./TextBtn.css";
import { Markup } from "interweave";

function TextBtn(props) {
  return (
    <button
      //   onClick={handleStartLomda}
      //   ref={openingBtn}
      className="btns start-lomda-btn"
    >
      <Markup content={props.Data[props.textIndex].btnText} />
    </button>
  );
}

export default TextBtn;
