import React, { useState } from "react";

import commonStyles from "../../common/Styles/commonStyles.module.css";
import { IWorkoutExercise } from "../../common/classes/WorkoutExercise";

import { Box } from "@mui/material";
import WorkoutExerciseCardsColumn from "./WorkoutExerciseCardsColumn";
import InputsColumn from "./InputsColumn";
import MainTitle from "../../components/MainTitle";

export default function CreateWorkoutPage() {
  const [workoutName, setWorkoutName] = useState<string>("");
  const [workoutDescription, setWorkoutDescription] = useState<string>("");
  const [selectedExercises, setSelectedExercises] = useState<
    IWorkoutExercise[]
  >([]);

  function handleAddExercise(exercise: IWorkoutExercise): void {
    setSelectedExercises((prev) => [...prev, exercise]);
  }

  function handleDeleteWorkoutExercise(
    exerciseToDelete: IWorkoutExercise
  ): void {
    setSelectedExercises(
      selectedExercises.filter((ex) => exerciseToDelete !== ex)
    );
  }

  return (
    <Box className={commonStyles.container}>
      <MainTitle>Create workout</MainTitle>
      <Box display={"flex"} gap={"2rem"}>
        <InputsColumn
          workoutName={workoutName}
          setWorkoutName={setWorkoutName}
          workoutDescription={workoutDescription}
          setWorkoutDescription={setWorkoutDescription}
          handleAddExercise={handleAddExercise}
        />
        <WorkoutExerciseCardsColumn
          selectedExercises={selectedExercises}
          handleDeleteWorkoutExercise={handleDeleteWorkoutExercise}
        />
      </Box>
    </Box>
  );
}
