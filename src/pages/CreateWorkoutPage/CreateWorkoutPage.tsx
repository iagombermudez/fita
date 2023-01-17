import React, { useState } from "react";
import commonStyles from "../../common/Styles/commonStyles.module.css";
import TextInput from "../../components/TextInput/TextInput";

export default function CreateWorkoutPage() {
  const [workoutName, setWorkoutName] = useState<string>("");
  return (
    <div className={commonStyles.container}>
      <h1 style={{ color: "#39ff13" }}>Create Workout</h1>
      <div>
        <TextInput
          type="text"
          name="workout-name"
          placeholder="Introduce the workout name..."
          label="Workout name"
          text={workoutName}
          setText={setWorkoutName}
        />
      </div>
    </div>
  );
}
