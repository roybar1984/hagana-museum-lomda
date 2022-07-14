import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./IntroPage.css";
// import { gsap } from "gsap";
import { Markup } from "interweave";
import gif from "../../media/gifs/Soldier-talking-fixed.gif";
import NextBtn from "../../components/nextBtn/NextBtn";

// import AnimatedPage from "../../components/AnimatedPage";
// import { motion } from "framer-motion";

function IntroPage(props) {
  console.log(props.textIndex);
  // const blackDivRef = useRef();

  //   useEffect(() => {
  //     if (props.isHidden) {
  //       gsap.from(blackDivRef.current, {
  //         opacity: 0,
  //         duration: 5,
  //         ease: "ease",
  //       });
  //     }
  //   }, [props.isHidden]);

  // const btnAnimations = {
  //   initial: { opacity: 0, visibility: "hidden" },
  //   animate: { opacity: 1, visibility: "visible" },
  //   exit: { opacity: 0, visibility: "hidden" },
  // };

  const navigate = useNavigate();

  useEffect(() => {
    props.setTextIndex(1);
    props.setBackgroundType("light-background");
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleClickNext = (event) => {
    if (props.textIndex === 2) {
      navigate("/aboutHagana");
      props.setTextIndex(props.textIndex + 1);
    }
    props.setTextIndex(props.textIndex + 1);
  };

  //   useEffect(() => {
  //     console.log("inside the first useState");
  //     props.setIsHidden("hidden");
  //     props.setTextIndex(1);
  //     props.setIsPreMissionPages(false);
  //     props.setIsStarted(true);

  //     setTimeout(function() {
  //       props.setIsHidden((prevState) => {
  //         prevState = "";
  //       });
  //     }, props.wait);

  //     return () => {
  //       props.setIsPreMissionPages(false);
  //       props.setIsStarted(true);
  //       props.setTextIndex(1);
  //     };
  //   }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    // <AnimatedPage>
    <div className="bubble-container">
      {/* {props.isHidden && <div ref={blackDivRef} className="black-div"></div>}
      {props.isPreMissionPages && ( */}
      <h1 className="mission-title">
        <Markup content={props.Data[props.textIndex].title} />
      </h1>
      <img className="character-gif" src={gif} alt="loading..." />
      <p className="text intro-text">
        <Markup content={props.Data[props.textIndex].text} />
      </p>
      <NextBtn handleClickNext={handleClickNext} />
    </div>
  );
}

export default IntroPage;
