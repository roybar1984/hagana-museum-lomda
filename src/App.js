import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OpeningPage from "./pages/openingPage/OpeningPage";
import IntroPage from "./pages/introPage/IntroPage";
import Data from "./data/text.json";
import "./App.css";
import AboutPalmachPage from "./pages/aboutPalmachPage/AboutPalmachPage";
import Mission1 from "./pages/mission1/Mission1";
import Mission2 from "./pages/mission2/Mission2";
import Mission3 from "./pages/mission3/Mission3";
import Mission4 from "./pages/mission4/Mission4";
import Mission5 from "./pages/mission5/Mission5";
function App() {
  const [textIndex, setTextIndex] = useState(1);
  const [backgroundType, setBackgroundType] = useState("light-background ");

  useEffect(() => {
    setTextIndex(1);
  }, []);

  return (
    <div className={`App ${backgroundType}`}>
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
                setBackgroundType={setBackgroundType}
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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
