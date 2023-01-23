import React, { useState } from "react";
import { categories } from "../../mocks/workoutCategories";

import commonStyles from "../../common/Styles/commonStyles.module.css";
import OptionPanelInput from "../../components/inputs/OptionsPanelInput";
import TextAreaInput from "../../components/inputs/TextAreaInput";
import TextInput from "../../components/inputs/TextInput";
import { Button } from "@mui/material";
import { Box } from "@mui/material";
import { difficulties } from "../../mocks/workoutDifficulties";
import AddExercise from "./AddExerciseDialog/AddExercise";

export default function CreateWorkoutPage() {
  const [workoutName, setWorkoutName] = useState<string>("");
  const [workoutDescription, setWorkoutDescription] = useState<string>("");
  const [addExerciseIsOpen, setAddExerciseIsOpen] = useState<boolean>(false);

  function handleOpenAddExerciseModal() {
    setAddExerciseIsOpen(!addExerciseIsOpen);
  }

  return (
    <div className={commonStyles.container}>
      <h1 style={{ color: "#39ff13" }}>Create Workout</h1>
      <div style={{ width: "50%" }}>
        <TextInput
          type="text"
          name="workout-name"
          placeholder="Introduce the workout name..."
          label="Workout name"
          text={workoutName}
          setText={setWorkoutName}
        />
        <TextAreaInput
          type="textarea"
          name="workout-description"
          placeholder="Introduce the workout description..."
          label="Workout description"
          maxLength={250}
          height={"8rem"}
          text={workoutDescription}
          setText={setWorkoutDescription}
        />
        <OptionPanelInput categories={categories} label={"Categories"} />
        <OptionPanelInput categories={difficulties} label={"Difficulty"} />
        <Box display={"flex"} gap={"0.5rem"}>
          <Button
            variant="contained"
            sx={{ marginLeft: "auto" }}
            onClick={handleOpenAddExerciseModal}
          >
            Add an exercise
          </Button>
          <AddExercise
            isOpen={addExerciseIsOpen}
            setIsOpen={setAddExerciseIsOpen}
          />
          <Button variant="contained">Create workout</Button>
        </Box>
      </div>
    </div>
  );
}
