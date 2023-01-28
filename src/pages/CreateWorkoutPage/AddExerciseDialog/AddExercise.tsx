import {
  Box,
  Button,
  Dialog,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useEffect, useState } from "react";
import ExerciseCard from "../../../components/ExerciseCard/ExerciseCard";
import { addExercise, getAllExercises } from "../../../services/exercisesApi";
import { Exercise, IExercise } from "../../../common/classes/Exercise";
import {
  IWorkoutExercise,
  WorkoutExercise,
} from "../../../common/classes/WorkoutExercise";

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleAddExercise: (exercise: IWorkoutExercise) => void;
}

export default function AddExercise(props: Props) {
  const [availableExercises, setAvailableExercises] = useState<IExercise[]>([]);
  const [exerciseIsSelected, setExerciseIsSelected] = useState<boolean[]>(
    initializeArrayToFalse(availableExercises.length)
  );
  const [numRepetitions, setNumRepetitions] = useState<number>(1);

  useEffect(() => {
    try {
      getExercises().then((response) => setAvailableExercises(response));
    } catch (exception) {
      console.log(exception);
    }
  }, []);

  useEffect(() => {
    initializeArrayToFalse(availableExercises.length);
  }, [availableExercises]);

  function initializeArrayToFalse(length: number) {
    return new Array(length).fill(false);
  }

  function handleSelectedExercise(index: number) {
    const indexCurrentValue = exerciseIsSelected[index];
    let temp = initializeArrayToFalse(availableExercises.length);
    temp[index] = !indexCurrentValue;
    setExerciseIsSelected(temp);
  }

  function handleAddExercise() {
    const index = exerciseIsSelected.indexOf(true);
    if (index !== -1) {
      const exerciseToAdd = availableExercises![index];
      const workoutExercise = new WorkoutExercise(
        exerciseToAdd,
        numRepetitions
      );
      props.handleAddExercise(workoutExercise);
      props.setIsOpen(false);
    }
  }

  async function getExercises() {
    const response = await getAllExercises();
    return response;
  }

  function renderDialogBody() {
    return (
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={"0.5rem"}
        flex={"1 1 auto"}
        overflow={"auto"}
        sx={{
          scrollbarColor: "#6b6b6b #2b2b2b",
          "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
            backgroundColor: "#2b2b2b",
          },
          "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
            borderRadius: 8,
            backgroundColor: "#6b6b6b",
            minHeight: 24,
            border: "3px solid #2b2b2b",
          },
          "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus":
            {
              backgroundColor: "#959595",
            },
          "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active":
            {
              backgroundColor: "#959595",
            },
          "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover":
            {
              backgroundColor: "#959595",
            },
          "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
            backgroundColor: "#2b2b2b",
          },
        }}
      >
        {availableExercises &&
          availableExercises.map((exercise, index) => {
            return (
              <Box>
                <ExerciseCard
                  index={index}
                  exercise={
                    new Exercise(
                      exercise.name,
                      exercise.description,
                      exercise.difficulty
                    )
                  }
                  selected={exerciseIsSelected[index]}
                  handleSetSelected={handleSelectedExercise}
                />
              </Box>
            );
          })}
      </Box>
    );
  }

  return (
    <Dialog
      open={props.isOpen}
      onClose={() => props.setIsOpen(false)}
      maxWidth={"lg"}
      fullWidth
      PaperProps={{
        sx: {
          height: "90vh",
        },
      }}
    >
      <Box
        margin={"1rem 2rem"}
        overflow="hidden"
        display={"flex"}
        flexDirection="column"
        height={"100%"}
      >
        <Typography
          variant="h3"
          marginBottom={"1rem"}
          color="primary"
          fontWeight={"600"}
        >
          Add Exercise
        </Typography>
        <Box
          display={"flex"}
          flexDirection={"row"}
          gap="2rem"
          margin={"1rem 0"}
        >
          <Box
            display={"flex"}
            flexDirection={"row"}
            gap="1rem"
            sx={{ width: "80%" }}
          >
            <TextField
              sx={{ width: "100%" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              placeholder="Search"
            />
            <TextField
              error={numRepetitions <= 0}
              sx={{ width: "100%" }}
              placeholder="Number of repetitions"
              type="number"
              value={numRepetitions}
              onChange={(e) => setNumRepetitions(+e.currentTarget.value)}
            />
          </Box>
          <Button
            variant="contained"
            sx={{ width: "20%" }}
            onClick={handleAddExercise}
          >
            Add
          </Button>
        </Box>
        {renderDialogBody()}
      </Box>
    </Dialog>
  );
}
