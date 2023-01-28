import React, { useState } from "react";

import { categories } from "../../mocks/workoutCategories";
import { difficulties } from "../../mocks/workoutDifficulties";

import AddExercise from "./AddExerciseDialog/AddExercise";
import commonStyles from "../../common/Styles/commonStyles.module.css";
import { IWorkoutExercise } from "../../common/classes/WorkoutExercise";
import OptionPanelInput from "../../components/inputs/OptionsPanelInput";
import TextAreaInput from "../../components/inputs/TextAreaInput";
import TextInput from "../../components/inputs/TextInput";

import { Box } from "@mui/material";
import { Button } from "@mui/material";
import WorkoutExerciseCard from "./WorkoutExerciseCard";

export default function CreateWorkoutPage() {
  const [workoutName, setWorkoutName] = useState<string>("");
  const [workoutDescription, setWorkoutDescription] = useState<string>("");
  const [addExerciseIsOpen, setAddExerciseIsOpen] = useState<boolean>(false);
  const [selectedExercises, setSelectedExercises] = useState<
    IWorkoutExercise[]
  >([]);

  function handleOpenAddExerciseModal() {
    setAddExerciseIsOpen(!addExerciseIsOpen);
  }

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
      <h1 style={{ color: "#39ff13" }}>Create Workout</h1>
      <Box display={"flex"} gap={"2rem"}>
        <Box sx={{ width: "50%" }}>
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
        <Box
          sx={{
            width: "50%",
            marginTop: "1.5rem",
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
      </Box>
    </Box>
  );
}
