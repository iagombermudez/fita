import React from "react";
import WorkoutCard from "../WorkoutCard/WorkoutCard";
import "./styles.css";

export default function WorkoutsContainer() {
  return (
    <div id="container">
      <h1 style={{ color: "#39ff13" }}>My Workouts</h1>
      <div id="workouts-container">
        {Array.from({ length: 8 }).map((it, index) => (
          <WorkoutCard />
        ))}
      </div>
    </div>
  );
}
