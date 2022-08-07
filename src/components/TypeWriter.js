import React, { useEffect, useState, useRef } from "react";
import { Markup } from "interweave";

function TypeWriter({ text, textIndex }) {
  const [currentText, setCurrentText] = useState("");
  //   const [index, setIndex] = useState(0);

  const index = useRef(0);

  useEffect(() => {
    index.current = 0;
    setCurrentText("");
  }, [text]);

  useEffect(() => {
    if (index.current < text.length) {
      const timeoutId = setTimeout(() => {
        setCurrentText((value) => value + text.charAt(index.current));
        index.current += 1;
      }, 80);
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [currentText, text]);
  return (
    <p
      className={`text intro-text blinking-cursor ${textIndex === 2 &&
        "fade-animation"}`}
    >
      <Markup content={currentText} />
    </p>
  );
}

export default TypeWriter;
