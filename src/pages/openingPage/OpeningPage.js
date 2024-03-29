import React, { useRef, useEffect } from "react";
import "./OpeningPage.css";
// import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";
// import AnimatedPage from "../../components/AnimatedPage";

function OpeningPage(props) {
  useEffect(() => {
    props.setTextIndex(0);
    props.setBackgroundType("light-background");
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  const navigate = useNavigate();

  const titlesContainerRef = useRef(null);
  const title1 = useRef(null);
  const title2 = useRef(null);
  const openingBtn = useRef(null);

  //   useEffect(() => {
  //     const openingAnimationTl = gsap.timeline();
  //     openingAnimationTl
  //       .from(title1.current, {
  //         opacity: 0,
  //         scale: 0.4,
  //         ease: "back",
  //         duration: 1.5,
  //       })
  //       .from(
  //         title2.current,
  //         {
  //           opacity: 0,
  //           scale: 0.4,
  //           ease: "sine",
  //           duration: 1.7,
  //         },
  //         "-=0.5"
  //       )
  //       .from(
  //         titlesContainerRef.current,
  //         {
  //           y: 70,
  //           ease: "sine",
  //           duration: 1.5,
  //         },
  //         ">"
  //       )
  //       .from(
  //         openingBtn.current,
  //         {
  //           opacity: 0,
  //           ease: "sine",
  //           duration: 2,
  //         },
  //         "+=0.5"
  //       );
  //   }, []);

  //   useEffect(() => {
  //     props.setIsPreMissionPages(false);
  //     props.setIsStarted(false);
  //   }, []); // eslint-disable-line react-hooks/exhaustive-deps

  function handleStartLomda(event) {
    setTimeout(navigate("./intro"), 1000);
    //if the btn is vissible move to the rellevant page
    if (event.target.style.opacity > 0.3) {
      //   props.setIsStarted(true);
      setTimeout(navigate("./intro"), 1000);
    }
  }

  return (
    <>
      <div ref={titlesContainerRef} className="titles-container">
        <h1 ref={title1} className="opening-titles opening-title1">
          המירוץ לצה״ל
        </h1>
        <h3 ref={title2} className="opening-titles opening-title2">
          התחנה השנייה
        </h3>
      </div>
      <button
        onClick={handleStartLomda}
        ref={openingBtn}
        className="btns start-lomda-btn"
      >
        בואו נתחיל
      </button>
    </>
  );
}

export default OpeningPage;
