import React, { useState } from "react";
import { IExercise } from "../../common/classes/Exercise";
import Accordion from "../Accordion/Accordion";
import styles from "./ExerciseCard.module.css";

interface Props {
  selected?: boolean;
  index: number;
  image?: JSX.Element;
  imageSize?: string;
  exercise: IExercise;
  handleSetSelected?: (index: number) => void;
}

export default function ExerciseCard(props: Props) {
  const {
    selected = false,
    index,
    image,
    imageSize = "small",
    exercise,
    handleSetSelected,
  } = props;

  function getWorkoutImage() {
    switch (imageSize) {
      case "small":
        return <img src="https://via.placeholder.com/144x81" alt="" />;
      case "large":
        return <img src="https://via.placeholder.com/320x180" alt="" />;
      case "medium":
      default:
        return <img src="https://via.placeholder.com/256x144" alt="" />;
    }
  }

  const exerciseHeader = (
    <div className={styles.headerTitle}>
      <div className={styles.exerciseIndex}>{index + 1}</div>
      <div className={styles.imageWrapper}>{getWorkoutImage()}</div>
      <p>{exercise.name}</p>
    </div>
  );

  const exerciseBody = (
    <div className={styles.bodyContainer}>
      <p>{exercise.description}</p>
    </div>
  );

  return (
    <Accordion
      header={exerciseHeader}
      body={exerciseBody}
      selected={selected}
      index={index}
      handleSetSelected={handleSetSelected}
    />
  );
}
