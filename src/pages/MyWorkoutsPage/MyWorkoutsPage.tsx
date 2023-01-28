import React from "react";
import AddIcon from "@mui/icons-material/Add";
import WorkoutCard from "../../components/WorkoutCard/WorkoutCard";
import commonStyles from "../../common/Styles/commonStyles.module.css";
import styles from "./MyWorkoutsPage.module.css";
import { Link } from "react-router-dom";
import { CREATE_WORKOUT_URL } from "../../common/routes";
import { Box, Button } from "@mui/material";
import { Typography } from "@mui/material";
import MainTitle from "../../components/MainTitle";

export default function MyWorkoutsPage() {
  return (
    <Box className={commonStyles.container}>
      <MainTitle>My Workouts</MainTitle>
      <Box>
        <Button variant="contained">
          <Link to={CREATE_WORKOUT_URL} className={styles.button}>
            <AddIcon />
            <p>Add Workout</p>
          </Link>
        </Button>
        {Array.from({ length: 8 }).map((it, index) => (
          <WorkoutCard />
        ))}
      </Box>
    </Box>
  );
}
