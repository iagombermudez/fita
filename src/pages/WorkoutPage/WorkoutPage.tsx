import React from "react";
import ExerciseCard from "./ExerciseCard/ExerciseCard";
import WorkoutCard from "../../components/WorkoutCard/WorkoutCard";
import commonStyles from "../../utils/Styles/commonStyles.module.css";
import styles from "./WorkoutPage.module.css";

export default function WorkoutPage() {
  return (
    <div id={commonStyles.container}>
      <h1 style={{ color: "#39ff13" }}>My Workouts</h1>
      <div id="workout-container">
        <WorkoutCard imageSize="large" showInfo={false} />
        <div id={styles.exercisesContainer}>
          <ExerciseCard
            index="1"
            title="High Intensity Bike Ride (45 seconds)"
          />
          <ExerciseCard
            index="2"
            title="High Intensity Bike Ride (45 seconds)"
          />
          <ExerciseCard
            index="3"
            title="High Intensity Bike Ride (45 seconds)"
          />
          <ExerciseCard
            index="4"
            title="High Intensity Bike Ride (45 seconds)"
          />
        </div>
      </div>
    </div>
  );
}
