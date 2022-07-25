import "./AboutPage.css";
import React, { useEffect } from "react";
import ScaleAnimationpage from "../../components/ScaleAnimationpage";

function AboutPage(props) {
  useEffect(() => {
    props.setBackgroundType("dark-background");
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <ScaleAnimationpage>
      <div className="bubble-container">
        <h1 className="mission-title about-title">אודות</h1>
        <div className="paragrapghs-container">
          <p className="about-paragtapgh">
            <span className="bold-text">ראש מדור מט"ח: </span> <br />
            רס"ן מור יהלומי - דאהן
          </p>
          <p className="about-paragtapgh">
            <span className="bold-text">מפקדת הדיגיטל: </span>
            <br />
            סגן יעל חפץ
          </p>
          <p className="about-paragtapgh">
            <span className="bold-text">מפקדת הסטודיו: </span>
            <br />
            סג"ם שיר יפה
          </p>
          <p className="about-paragtapgh">
            <span className="bold-text">מפתחת הלומדה:</span>
            <br />
            סמל ריטה ברזובסקי
          </p>
          <p className="about-paragtapgh">
            <span className="bold-text">עיצוב:</span>
            <br />
            סמל אריאל ליכטמן
          </p>
          <p className="about-paragtapgh">
            <span className="bold-text">מומחה התוכן:</span>
            <br />
            סגן מאיה אריאל
          </p>
        </div>
      </div>
    </ScaleAnimationpage>
  );
}

export default AboutPage;
