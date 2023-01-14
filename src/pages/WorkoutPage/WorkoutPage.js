import React from "react";
import ExerciseCard from "./ExerciseCard/ExerciseCard";
import WorkoutCard from "../../components/WorkoutCard/WorkoutCard";
import "./styles.css";

export default function WorkoutPage() {
  return (
    <div id="container">
      <h1 style={{ color: "#39ff13" }}>My Workouts</h1>
      <div id="workout-container">
        <WorkoutCard imageSize="large" />
        <div id="exercises-container">
          <ExerciseCard
            index="1"
            image=""
            title="High Intensity Bike Ride (45 seconds)"
          />
        </div>
      </div>
    </div>
  );
}
