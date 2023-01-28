import React from "react";
import { IWorkoutExercise } from "../../common/classes/WorkoutExercise";
import ClearIcon from "@mui/icons-material/Clear";
import { Box, Card, CardContent, IconButton, Typography } from "@mui/material";

interface Props {
  index: number;
  workoutExercise: IWorkoutExercise;
  handleDeleteWorkoutExercise: (exerciseToDelete: IWorkoutExercise) => void;
}

export default function WorkoutExerciseCard(props: Props) {
  const { index, workoutExercise, handleDeleteWorkoutExercise } = props;
  return (
    <Card>
      <CardContent
        sx={{
          display: "flex",
          height: "3rem",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#444",
          "&:last-child": { padding: "0" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: "1rem",
            height: "100%",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              width: "4rem",
              margin: "auto",
              alignContent: "center",
              borderRight: "1px solid #666",
              textAlign: "center",
            }}
          >
            {index + 1}
          </Typography>
          <Typography>
            {workoutExercise.exercise.name} ({workoutExercise.numReps} rep/s)
          </Typography>
        </Box>
        <IconButton
          sx={{ marginRight: "0.5rem" }}
          onClick={() => handleDeleteWorkoutExercise(workoutExercise)}
        >
          <ClearIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
}
