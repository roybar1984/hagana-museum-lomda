import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OpeningPage from "./pages/openingPage/OpeningPage";
import IntroPage from "./pages/introPage/IntroPage";
import Data from "./data/text.json";
import "./App.css";
import AboutPalmachPage from "./pages/aboutPalmachPage/AboutPalmachPage";
import Mission1 from "./pages/mission1/Mission1";

function App() {
  const [textIndex, setTextIndex] = useState(1);

  useEffect(() => {
    // setIsHidden("hidden");
    setTextIndex(1);
    // setIsPreMissionPages(false);
  }, []);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <OpeningPage
                Data={Data}
                textIndex={textIndex}
                setTextIndex={setTextIndex}
                // Data={Data}
                // isPreMissionPages={isPreMissionPages}
                // setIsPreMissionPages={setIsPreMissionPages}
                // isStarted={setIsStarted}
                // setIsStarted={setIsStarted}
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
                // isHidden={isHidden}
                // setIsHidden={setIsHidden}
                // wait={800}
                // isPreMissionPages={isPreMissionPages}
                // setIsPreMissionPages={setIsPreMissionPages}
                // isStarted={isStarted}
                // setIsStarted={setIsStarted}
              />
            }
          ></Route>
          <Route
            exact
            path="/aboutPalmach"
            element={
              <AboutPalmachPage
                Data={Data}
                textIndex={textIndex}
                setTextIndex={setTextIndex}
                // isHidden={isHidden}
                // setIsHidden={setIsHidden}
                // wait={800}
                // isPreMissionPages={isPreMissionPages}
                // setIsPreMissionPages={setIsPreMissionPages}
                // isStarted={isStarted}
                // setIsStarted={setIsStarted}
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
                // isHidden={isHidden}
                // setIsHidden={setIsHidden}
                // wait={800}
                // isPreMissionPages={isPreMissionPages}
                // setIsPreMissionPages={setIsPreMissionPages}
                // isStarted={isStarted}
                // setIsStarted={setIsStarted}
              />
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
