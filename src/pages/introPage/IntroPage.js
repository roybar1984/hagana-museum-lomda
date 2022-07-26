import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./IntroPage.css";
// import { gsap } from "gsap";
import { Markup } from "interweave";
import gif from "../../media/gifs/Soldier-talking-fixed.gif";
import NextBtn from "../../components/nextBtn/NextBtn";
import AnimatedPage from "../../components/AnimatedPage";

function IntroPage(props) {
  const navigate = useNavigate();
  const [typedtext, setTypedtext] = useState("");

  useEffect(() => {
    props.setTextIndex(1);
    props.setBackgroundType("light-background");
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTypedtext(
        props.Data[props.textIndex].text.slice(0, typedtext.length + 1)
      );
    }, 80);

    return () => clearTimeout(timeout);
  }, [typedtext, props.textIndex]);

  const handleClickNext = (event) => {
    if (props.textIndex === 2) {
      navigate("/aboutHagana");
      props.setTextIndex(props.textIndex + 1);
    }
    props.setTextIndex(props.textIndex + 1);
  };

  return (
    <AnimatedPage>
      <div className="bubble-container">
        {/* {props.isHidden && <div ref={blackDivRef} className="black-div"></div>}
      {props.isPreMissionPages && ( */}
        <h1 className="mission-title">
          <Markup content={props.Data[props.textIndex].title} />
        </h1>
        <img className="character-gif" src={gif} alt="loading..." />
        <p
          className={`text intro-text blinking-cursor ${props.textIndex === 2 &&
            "fade-animation"}`}
        >
          <Markup content={typedtext} />
        </p>
        <NextBtn handleClickNext={handleClickNext} />
      </div>
    </AnimatedPage>
  );
}

export default IntroPage;
