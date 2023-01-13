import React from "react";
import PrimaryButton from "../../utils/PrimaryButton/PrimaryButton";
import "./styles.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function WorkoutCard() {
  return (
    <div className="workout-card">
      <img src="https://via.placeholder.com/256X144" />
      <div className="card-body">
        <h3>KILLER HIIT Workout by @really_cool_trainer</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.{" "}
        </p>
        <div className="card-buttons">
          <PrimaryButton />
          <FavoriteBorderIcon />
        </div>
      </div>
    </div>
  );
}
