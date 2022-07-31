import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./IntroPage.css";
// import { gsap } from "gsap";
import { Markup } from "interweave";
import gif from "../../media/gifs/Soldier-talking-fixed.gif";
import lookingGif from "../../media/gifs/Soldier-no talking-fixed.gif";
import NextBtn from "../../components/nextBtn/NextBtn";
import AnimatedPage from "../../components/AnimatedPage";

function IntroPage(props) {
  const navigate = useNavigate();
  const [typedtext, setTypedtext] = useState("");
  const [currGif, setCurrGif] = useState(gif);

  useEffect(() => {
    props.setTextIndex(1);
    props.setBackgroundType("light-background");
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (currGif === lookingGif) {
      setCurrGif(gif);
    }
    const timeout = setTimeout(() => {
      setTypedtext(
        props.Data[props.textIndex].text.slice(0, typedtext.length + 1)
      );
    }, 80);

    return () => clearTimeout(timeout);
  }, [typedtext, props.textIndex]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrGif(lookingGif);
    }, 14000);
    return () => clearTimeout(timer);
  }, [props.textIndex]);

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
        <img className="character-gif" src={currGif} alt="loading..." />
        <p
          className={`text intro-text blinking-cursor ${props.textIndex === 2 &&
            "fade-animation"}`}
        >
          <Markup content={typedtext} />
        </p>
        {currGif === lookingGif && (
          <NextBtn handleClickNext={handleClickNext} />
        )}
      </div>
    </AnimatedPage>
  );
}

export default IntroPage;
