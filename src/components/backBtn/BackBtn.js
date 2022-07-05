import React from "react";
import "./BackBtn.css";
import { useNavigate } from "react-router-dom";

function BackBtn(props) {
  const navigate = useNavigate();
  return (
    <div>
      <svg
        onClick={() => {
          if (props.textIndex > 0) {
            props.setTextIndex(props.textIndex - 1);
            navigate(-1);
          }
        }}
        className="back-btn"
        xmlns="http://www.w3.org/2000/svg"
        height="48"
        width="48"
      >
        <path d="M6 38h3v-8.7q0-2.7 1.9-4.6 1.9-1.9 4.6-1.9h20.8l-7.7 7.7 2.1 2.1L42 21.3 30.7 10l-2.1 2.1 7.7 7.7H15.5q-3.9 0-6.7 2.775Q6 25.35 6 29.3Z" />
      </svg>
    </div>
  );
}

export default BackBtn;
