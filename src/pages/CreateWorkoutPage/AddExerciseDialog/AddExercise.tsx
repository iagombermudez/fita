import {
  Box,
  Button,
  Dialog,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";
import ExerciseCard from "../../../components/ExerciseCard/ExerciseCard";
import { exercisesMock } from "../../../mocks/exercisesMock";

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AddExercise(props: Props) {
  const [exerciseIsSelected, setExerciseIsSelected] = useState<boolean[]>(
    initializeArrayToFalse(exercisesMock.length)
  );

  function initializeArrayToFalse(length: number) {
    return new Array(length).fill(false);
  }

  function handleSelectedExercise(index: number) {
    let temp = initializeArrayToFalse(exercisesMock.length);
    temp[index] = true;
    setExerciseIsSelected(temp);
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
        {exercisesMock.map((exercise, index) => {
          return (
            <Box onClick={() => handleSelectedExercise(index)}>
              <ExerciseCard
                index={""}
                title={exercise.name}
                selected={exerciseIsSelected[index]}
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
              sx={{ width: "100%" }}
              placeholder="Number of repetitions"
            />
          </Box>
          <Button variant="contained" sx={{ width: "20%" }}>
            Add
          </Button>
        </Box>
        {renderDialogBody()}
      </Box>
    </Dialog>
  );
}
