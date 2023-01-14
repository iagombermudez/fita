import React, { useState } from "react";
import Accordion from "../../../components/Accordion/Accordion";
import "./styles.css";

export default function ExerciseCard(props) {
  const { index, image, imageSize = "small", title } = props;

  const [open, setOpen] = useState();

  function getWorkoutImage() {
    switch (imageSize) {
      case "small":
        return <img src="https://via.placeholder.com/144X81" />;
      case "large":
        return <img src="https://via.placeholder.com/320X180" />;
      case "medium":
      default:
        return <img src="https://via.placeholder.com/256X144" />;
    }
  }

  const exerciseHeader = (
    <div className="header-title">
      <div className="exercise-index">{index}</div>
      <div className="image-wrapper">{getWorkoutImage()}</div>
      <p>{title}</p>
    </div>
  );

  const exerciseBody = (
    <div className="body-container">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
        cupiditate eos ipsam! Impedit, ducimus dolor. Illo numquam in ea minus.
      </p>
    </div>
  );

  function handleAccordionOpen() {
    setOpen(!open);
  }

  return <Accordion header={exerciseHeader} body={exerciseBody} />;
}
