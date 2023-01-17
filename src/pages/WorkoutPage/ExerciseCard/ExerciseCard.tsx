import React, { useState } from "react";
import Accordion from "../../../components/Accordion/Accordion";
import styles from "./ExerciseCard.module.css";

interface Props {
  index: string;
  image?: JSX.Element;
  imageSize?: string;
  title?: string;
}

export default function ExerciseCard(props: Props) {
  const { index, image, imageSize = "small", title } = props;

  const [open, setOpen] = useState<boolean>(false);

  function getWorkoutImage() {
    switch (imageSize) {
      case "small":
        return <img src="https://via.placeholder.com/144X81" alt="" />;
      case "large":
        return <img src="https://via.placeholder.com/320X180" alt="" />;
      case "medium":
      default:
        return <img src="https://via.placeholder.com/256X144" alt="" />;
    }
  }

  const exerciseHeader = (
    <div className={styles.headerTitle}>
      <div className={styles.exerciseIndex}>{index}</div>
      <div className={styles.imageWrapper}>{getWorkoutImage()}</div>
      <p>{title}</p>
    </div>
  );

  const exerciseBody = (
    <div className={styles.bodyContainer}>
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
