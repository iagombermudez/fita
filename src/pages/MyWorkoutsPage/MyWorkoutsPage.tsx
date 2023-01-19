import React from "react";
import AddIcon from "@mui/icons-material/Add";
import PrimaryButton from "../../components/buttons/PrimaryButton/PrimaryButton";
import WorkoutCard from "../../components/WorkoutCard/WorkoutCard";
import commonStyles from "../../common/Styles/commonStyles.module.css";
import styles from "./MyWorkoutsPage.module.css";
import { Link } from "react-router-dom";
import { CREATE_WORKOUT_URL } from "../../common/routes";
import { Box, Button } from "@mui/material";
import { Typography } from "@mui/material";

export default function MyWorkoutsPage() {
  return (
    <Box className={commonStyles.container}>
      <Typography variant="h3" color="primary" sx={{ marginBottom: "1rem" }}>
        My Workouts
      </Typography>
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
