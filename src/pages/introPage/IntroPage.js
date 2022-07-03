import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./IntroPage.css";
import { gsap } from "gsap";
import SpeechBubble from "../../components/speechBubble/SpeachBubble";
// import Character from "../../components/speechBubble/character/Character";
import { Markup } from "interweave";
import gif from "../../media/gifs/Soldier-talking.gif";
import NextBtn from "../../components/nextBtn/NextBtn";
// import CharacterCircle from "../../components/characterCircle/CharacterCircle";
// import AnimatedPage from "../../components/AnimatedPage";
// import { motion } from "framer-motion";
// import Button from "../../components/Button/Button";

function IntroPage(props) {
  const blackDivRef = useRef();

  //   useEffect(() => {
  //     if (props.isHidden) {
  //       gsap.from(blackDivRef.current, {
  //         opacity: 0,
  //         duration: 5,
  //         ease: "ease",
  //       });
  //     }
  //   }, [props.isHidden]);

  const btnAnimations = {
    initial: { opacity: 0, visibility: "hidden" },
    animate: { opacity: 1, visibility: "visible" },
    exit: { opacity: 0, visibility: "hidden" },
  };

  const navigate = useNavigate();

  useEffect(() => {
    props.setTextIndex(1);
  }, []);

  const handleClickNext = (event) => {
    if (props.textIndex === 2) {
      console.log("now is the long text");
      navigate("/aboutPalmach", { replace: true });
    }
    props.setTextIndex(props.textIndex + 1);
  };

  // const handleClickPrevText = (event) => {
  //   props.setTextIndex(3);
  //   navigate("/intro", { replace: true });
  // };

  //   const handleClickNext = (event) => {
  //     //if the btn is vissible move to the rellevant page
  //     if (event.target.style.opacity > 0.3) {
  //       //move to game if clicked to start on the last index
  //       if (props.textIndex === 4) {
  //         navigate("/game", { replace: true });
  //       }

  //       //if on the first pre-mission page
  //       if (props.textIndex === 2) {
  //         props.setIsPreMissionPages(true);
  //         props.setIsHidden("hidden");

  //         setTimeout(function() {
  //           props.setIsHidden((prevState) => {
  //             prevState = "";
  //           });
  //         }, props.wait);
  //       }

  //       //increment the index if is not the last one
  //       if (props.textIndex < 4) {
  //         props.setTextIndex(props.textIndex + 1);
  //       }
  //     }
  //   };

  //   const handleClickPrevText = (event) => {
  //     //if the btn is vissible move to the rellevant page
  //     if (event.target.style.opacity > 0.3) {
  //       props.setTextIndex(3);
  //       navigate("/intro", { replace: true });
  //       props.setIsHidden("hidden");
  //       setTimeout(function() {
  //         props.setIsHidden((prevState) => {
  //           prevState = "";
  //         });
  //       }, props.wait);
  //     }
  //   };

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
      {/* <SpeechBubble
        delay={1}
        duration={3}
        animationY={220}
        textIndex={props.textIndex}
        text={props.Data[props.textIndex].bubbleText1}
        // title={props.Data[props.textIndex].bubbleTitle}
        className={`top-bubble 
          ${props.textIndex !== 2 && "top-speech-bubble "}
          ${props.isPreMissionPages && "pre-mission-bubbles "}`}
      />

      {props.Data[props.textIndex].bubbleText2 && (
        <SpeechBubble
          delay={5}
          duration={2}
          animationY={80}
          textIndex={props.textIndex}
          text={props.Data[props.textIndex].bubbleText2}
          className={`bottom-bubble ${props.isPreMissionPages &&
            "pre-mission-bubbles "} ${props.textIndex === 4 &&
            "feel-ready-bubble"}`}
        />
      )} */}

      {/* {!props.Data[props.textIndex].btnText ? (
        // <motion.div
        //   variants={btnAnimations}
        //   initial="initial"
        //   animate="animate"
        //   exit="exit"
        //   transition={{ duration: 2, delay: 9 }}
        //   className="next-btn"
        //   onClick={handleClickNext}
        // >
        //   {" "}
        // </motion.div>
        <Button
          textIndex={props.textIndex}
          handleClickNext={handleClickNext}
        ></Button>
      ) : ( */}
      {/* props.Data[props.textIndex].btnText && ( */}
      {/* <motion.button
        onClick={handleClickNext}
        // ref={openingBtn}
        className={`btns start-lomda-btn 
              ${props.isPreMissionPages &&
                "start-mission-btn"} ${props.textIndex === 2 &&
          "start-first-point-btn"}`}
        variants={btnAnimations}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 2, delay: 6 }}
      >
        {props.Data[props.textIndex].btnText}
      </motion.button> */}
    </div>
  );
}

export default IntroPage;
