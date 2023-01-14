import React from "react";
import PrimaryButton from "../../utils/PrimaryButton/PrimaryButton";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./styles.css";

export default function WorkoutCard(props) {
  const { imageSize = "medium" } = props;

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

  return (
    <div className="workout-card">
      {getWorkoutImage()}
      <div className="card-body">
        <h3>KILLER HIIT Workout by @really_cool_trainer</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.{" "}
        </p>
        <div className="card-buttons">
          <Link to="1">
            <PrimaryButton />
          </Link>
          <FavoriteBorderIcon />
        </div>
      </div>
    </div>
  );
}
