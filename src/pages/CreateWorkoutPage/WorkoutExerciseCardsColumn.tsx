import { Box } from "@mui/material";
import React from "react";
import { IWorkoutExercise } from "../../common/classes/WorkoutExercise";
import WorkoutExerciseCard from "./WorkoutExerciseCard";

interface Props {
  selectedExercises: IWorkoutExercise[];
  handleDeleteWorkoutExercise: (exerciseToDelete: IWorkoutExercise) => void;
}

export default function WorkoutExerciseCardsColumn(props: Props) {
  const { selectedExercises, handleDeleteWorkoutExercise } = props;
  return (
    <Box
      sx={{
        width: "50%",
        display: "flex",
        gap: "1rem",
        flexDirection: "column",
      }}
    >
      {selectedExercises.map((workoutExercise, index) => (
        <WorkoutExerciseCard
          index={index}
          workoutExercise={workoutExercise}
          handleDeleteWorkoutExercise={handleDeleteWorkoutExercise}
        />
      ))}
    </Box>
  );
}
