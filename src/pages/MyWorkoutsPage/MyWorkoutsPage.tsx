import React from "react";
import AddIcon from "@mui/icons-material/Add";
import PrimaryButton from "../../components/buttons/PrimaryButton/PrimaryButton";
import WorkoutCard from "../../components/WorkoutCard/WorkoutCard";
import commonStyles from "../../common/Styles/commonStyles.module.css";
import styles from "./MyWorkoutsPage.module.css";
import { Link } from "react-router-dom";
import { CREATE_WORKOUT_URL } from "../../common/routes";

export default function MyWorkoutsPage() {
  return (
    <div className={commonStyles.container}>
      <h1 style={{ color: "#39ff13" }}>My Workouts</h1>
      <div>
        <PrimaryButton
          text={
            <Link to={CREATE_WORKOUT_URL} className={styles.button}>
              <AddIcon />
              <p>Add Workout</p>
            </Link>
          }
        />
        {Array.from({ length: 8 }).map((it, index) => (
          <WorkoutCard />
        ))}
      </div>
    </div>
  );
}
