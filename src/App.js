import React, { useState, useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import OpeningPage from "./pages/openingPage/OpeningPage";
import IntroPage from "./pages/introPage/IntroPage";
import Data from "./data/text.json";
import "./App.css";
import AboutPalmachPage from "./pages/aboutPalmachPage/AboutPalmachPage";
import Mission1 from "./pages/mission1/Mission1";
import Mission2 from "./pages/mission2/Mission2";
import Mission3 from "./pages/mission3/Mission3";
import Mission4 from "./pages/mission4/Mission4";
import IntroMission5 from "./pages/introMission5/IntroMission5";
import Mission5 from "./pages/mission5/Mission5";
import EndPage from "./pages/endPage/EndPage";
import AboutPage from "./pages/aboutPage/AboutPage";
import { AnimatePresence } from "framer-motion";

function App() {
  const appRef = useRef();
  const location = useLocation();
  const [textIndex, setTextIndex] = useState(1);
  const [backgroundType, setBackgroundType] = useState("light-background ");

  useEffect(() => {
    setTextIndex(1);
  }, []);

  return (
    <div ref={appRef} className={`App ${backgroundType}`}>
      <AnimatePresence exitBeforeEnter initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route
            exact
            path="/"
            element={
              <OpeningPage
                Data={Data}
                textIndex={textIndex}
                setTextIndex={setTextIndex}
                setBackgroundType={setBackgroundType}
              />
            }
          ></Route>
          <Route
            exact
            path="/intro"
            element={
              <IntroPage
                Data={Data}
                textIndex={textIndex}
                setTextIndex={setTextIndex}
                setBackgroundType={setBackgroundType}
                backgroundType={"light-background"}
              />
            }
          ></Route>
          <Route
            exact
            path="/aboutHagana"
            element={
              <AboutPalmachPage
                Data={Data}
                textIndex={3}
                setTextIndex={setTextIndex}
                setBackgroundType={setBackgroundType}
                backgroundType={"light-background"}
              />
            }
          ></Route>
          <Route
            exact
            path="/mission1"
            element={
              <Mission1
                Data={Data}
                textIndex={textIndex}
                setTextIndex={setTextIndex}
                setBackgroundType={setBackgroundType}
              />
            }
          ></Route>
          <Route
            exact
            path="/mission2"
            element={
              <Mission2
                Data={Data}
                textIndex={textIndex}
                setTextIndex={setTextIndex}
                setBackgroundType={setBackgroundType}
              />
            }
          ></Route>
          <Route
            exact
            path="/mission3"
            element={
              <Mission3
                Data={Data}
                textIndex={textIndex}
                setTextIndex={setTextIndex}
                setBackgroundType={setBackgroundType}
              />
            }
          ></Route>
          <Route
            exact
            path="/mission4"
            element={
              <Mission4
                Data={Data}
                textIndex={textIndex}
                setTextIndex={setTextIndex}
                setBackgroundType={setBackgroundType}
              />
            }
          ></Route>
          <Route
            exact
            path="/introMission5"
            element={
              <IntroMission5
                Data={Data}
                textIndex={textIndex}
                setTextIndex={setTextIndex}
                setBackgroundType={setBackgroundType}
              />
            }
          ></Route>
          <Route
            exact
            path="/mission5"
            element={
              <Mission5
                Data={Data}
                textIndex={textIndex}
                setTextIndex={setTextIndex}
                setBackgroundType={setBackgroundType}
              />
            }
          ></Route>
          <Route
            exact
            path="/aboutPalmach"
            element={
              <AboutPalmachPage
                Data={Data}
                textIndex={9}
                setTextIndex={setTextIndex}
                setBackgroundType={setBackgroundType}
                backgroundType={"dark-background"}
              />
            }
          ></Route>
          <Route
            exact
            path="/endPage"
            element={
              <EndPage
                Data={Data}
                textIndex={10}
                setTextIndex={setTextIndex}
                setBackgroundType={setBackgroundType}
                backgroundType={"dark-background"}
              />
            }
          ></Route>
          <Route
            exact
            path="/aboutPage"
            element={
              <AboutPage
                Data={Data}
                setBackgroundType={setBackgroundType}
                backgroundType={"dark-background"}
              />
            }
          ></Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
