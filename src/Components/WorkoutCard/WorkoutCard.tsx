import React from "react";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import styles from "./WorkoutCard.module.css";
import { Button } from "@mui/material";

interface Props {
  imageSize?: string;
  showInfo?: boolean;
}

export default function WorkoutCard(props: Props) {
  const { imageSize = "medium", showInfo = true } = props;

  function getWorkoutImage() {
    switch (imageSize) {
      case "small":
        return <img src="https://via.placeholder.com/144x81" />;
      case "large":
        return <img src="https://via.placeholder.com/320x180" />;
      case "medium":
      default:
        return <img src="https://via.placeholder.com/256x144" />;
    }
  }

  return (
    <div className={styles.workoutCard}>
      {getWorkoutImage()}
      <div className={styles.cardBody}>
        <h3>KILLER HIIT Workout by @really_cool_trainer</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.{" "}
        </p>
        <div className={styles.cardButtons}>
          {showInfo && (
            <Link to="1" className={styles.moreInfoLink}>
              <Button>+ INFO</Button>
            </Link>
          )}
          <FavoriteBorderIcon />
        </div>
      </div>
    </div>
  );
}
