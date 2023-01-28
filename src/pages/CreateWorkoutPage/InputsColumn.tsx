import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { IWorkoutExercise } from "../../common/classes/WorkoutExercise";
import OptionPanelInput from "../../components/inputs/OptionsPanelInput";
import { categories } from "../../mocks/workoutCategories";
import { difficulties } from "../../mocks/workoutDifficulties";
import AddExercise from "./AddExerciseDialog/AddExercise";

interface Props {
  workoutName: string;
  setWorkoutName: React.Dispatch<React.SetStateAction<string>>;
  workoutDescription: string;
  setWorkoutDescription: React.Dispatch<React.SetStateAction<string>>;
  handleAddExercise: (exercise: IWorkoutExercise) => void;
}

export default function InputsColumn(props: Props) {
  const {
    workoutName,
    setWorkoutName,
    workoutDescription,
    setWorkoutDescription,
    handleAddExercise,
  } = props;

  const MAX_DESCRIPTION_LENGTH = 250;

  const [addExerciseIsOpen, setAddExerciseIsOpen] = useState<boolean>(false);

  function handleOpenAddExerciseModal() {
    setAddExerciseIsOpen(!addExerciseIsOpen);
  }
  return (
    <Box
      sx={{
        width: "50%",
        display: "flex",
        gap: "1rem",
        flexDirection: "column",
      }}
    >
      <TextField
        sx={{ width: "100%" }}
        label="Name"
        value={workoutName}
        onChange={(e) => setWorkoutName(e.currentTarget.value)}
      />
      <Box>
        <TextField
          sx={{ width: "100%" }}
          label="Description"
          value={workoutDescription}
          onChange={(e) => setWorkoutDescription(e.currentTarget.value)}
          multiline
          rows={4}
          maxRows={Infinity}
          inputProps={{ maxLength: MAX_DESCRIPTION_LENGTH }}
        />
        <Box sx={{ textAlign: "right" }}>
          <span>{workoutDescription.length}</span>
          <span>/{MAX_DESCRIPTION_LENGTH}</span>
        </Box>
      </Box>
      <OptionPanelInput categories={categories} label={"Categories"} />
      <OptionPanelInput categories={difficulties} label={"Difficulty"} />
      <Box sx={{ display: "flex", gap: "0.5rem" }}>
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
          handleAddExercise={handleAddExercise}
        />
        <Button variant="contained">Create workout</Button>
      </Box>
    </Box>
  );
}
