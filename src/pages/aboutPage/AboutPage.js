import "./AboutPage.css";
import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AboutPage(props) {
  useEffect(() => {
    props.setBackgroundType("dark-background");
  }, []);

  const navigate = useNavigate();
  return (
    <div className="bubble-container">
      <h1 className="mission-title about-title">אודות</h1>
      <div className="paragrapghs-container">
        <p className="about-paragtapgh">
          ראש מדור מט"ח: <br />
          רס"ן מור דהן
        </p>
        <p className="about-paragtapgh">
          מפקדת הדיגיטל: <br />
          סגן יעל חפץ
        </p>
        <p className="about-paragtapgh">
          מפקדת הסטודיו: <br />
          סג"ם שיר יפה
        </p>
        <p className="about-paragtapgh">
          מפתחת הלומדה:
          <br />
          סמל ריטה ברזובסקי
        </p>
        <p className="about-paragtapgh">
          עיצוב:
          <br />
          סמל אריאל ליכטמן
        </p>
        <p className="about-paragtapgh">
          מומחה התוכן:
          <br />
          סגן מאיה אריאל
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
