import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../../utils/Navbar/Navbar";
import MyWorkoutsPage from "../MyWorkoutsPage/MyWorkoutsPage";
import HomePage from "../HomePage/HomePage";
import TopWorkoutsPage from "../TopWorkoutsPage/TopWorkoutsPage";
import SchedulePage from "../SchedulePage/SchedulePage";
import ProfilePage from "../ProfilePage/ProfilePage";
import WorkoutPage from "../WorkoutPage/WorkoutPage";
import styles from "./App.module.css";

export default function App() {
  return (
    <div id={styles.app}>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="topWorkouts/" element={<TopWorkoutsPage />} />
          <Route path="myWorkouts/" element={<MyWorkoutsPage />} />
          <Route path="schedule/" element={<SchedulePage />} />
          <Route path="profile/" element={<ProfilePage />} />
          <Route path="myWorkouts/1" element={<WorkoutPage />} />
        </Routes>
      </div>
    </div>
  );
}
