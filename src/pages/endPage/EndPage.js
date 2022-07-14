import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./EndPage.css";
import { Markup } from "interweave";
import gif from "../../media/gifs/Soldier-no talking-fixed.gif";
import TextBtn from "../../components/textBtn/TextBtn";
import BackBtn from "./../../components/backBtn/BackBtn";
import Confetti from "react-confetti";

function EndPage(props) {
  const navigate = useNavigate();

  useEffect(() => {
    props.setTextIndex(10);
    props.setBackgroundType("dark-background");
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleMoveToAbout = (event) => {
    navigate("/aboutPage");
  };

  return (
    <>
      <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        numberOfPieces={500}
        tweenDuration={9000}
        recycle={false}
      />
      <div className="bubble-container end-container">
        <BackBtn
          textIndex={props.textIndex}
          setTextIndex={props.setTextIndex}
        />
        <img className="character-gif" src={gif} alt="loading..." />
        <p className="text intro-text end-text">
          <Markup content={props.Data[10].text} />
        </p>
        <TextBtn
          handleClick={handleMoveToAbout}
          className="check-btn-mission3 to-about-page-btn"
          btnText=" אודות"
        />
      </div>
    </>
  );
}

export default EndPage;
