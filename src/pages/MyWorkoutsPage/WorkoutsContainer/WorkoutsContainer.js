import React from "react";
import WorkoutCard from "../../../components/WorkoutCard/WorkoutCard";
import commonStyles from "../../../utils/Styles/commonStyles.module.css";

export default function WorkoutsContainer() {
  return (
    <div id={commonStyles.container}>
      <h1 style={{ color: "#39ff13" }}>My Workouts</h1>
      <div id="workouts-container">
        {Array.from({ length: 8 }).map((it, index) => (
          <WorkoutCard />
        ))}
      </div>
    </div>
  );
}
