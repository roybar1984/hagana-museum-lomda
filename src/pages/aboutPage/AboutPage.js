import "./AboutPage.css";
import React, { useEffect } from "react";

function AboutPage(props) {
  useEffect(() => {
    props.setBackgroundType("dark-background");
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="bubble-container">
      <h1 className="mission-title about-title">אודות</h1>
      <div className="paragrapghs-container">
        <p className="about-paragtapgh">
          ראש מדור מט"ח: <br />
          רס"ן מור יהלומי - דאהן
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
