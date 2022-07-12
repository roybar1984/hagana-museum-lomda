import React, { useState, useEffect } from "react";
import "./Mission5.css";
import { Markup } from "interweave";
import { useNavigate } from "react-router-dom";
import BackBtn from "./../../components/backBtn/BackBtn";
import TextBtn from "../../components/textBtn/TextBtn";
import NextBtn from "../../components/nextBtn/NextBtn";
import InputField from "../../components/inputField/InputField";

function Mission5(props) {
  const navigate = useNavigate();
  const [readOnly, setReadOnly] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    props.setTextIndex(8);
    props.setBackgroundType("dark-background");
  }, []);

  return <div>Mission5</div>;
}

export default Mission5;
