import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import MyWorkoutsPage from "../MyWorkoutsPage/MyWorkoutsPage";
import HomePage from "../HomePage/HomePage";
import TopWorkoutsPage from "../TopWorkoutsPage/TopWorkoutsPage";
import SchedulePage from "../SchedulePage/SchedulePage";
import ProfilePage from "../ProfilePage/ProfilePage";
import WorkoutPage from "../WorkoutPage/WorkoutPage";
import styles from "./App.module.css";
import LoginPage from "../LoginPage/LoginPage";

export default function App() {
  function showNavbar() {
    const path = window.location.pathname;
    switch (path) {
      case "/":
      case "/topWorkouts":
      case "/myWorkouts":
      case "/schedule":
      case "/profile":
      case "/myWorkouts/1":
        return <Navbar />;
    }
  }

  return (
    <div id={styles.app}>
      {showNavbar()}
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="topWorkouts/" element={<TopWorkoutsPage />} />
          <Route path="myWorkouts/" element={<MyWorkoutsPage />} />
          <Route path="schedule/" element={<SchedulePage />} />
          <Route path="profile/" element={<ProfilePage />} />
          <Route path="myWorkouts/1" element={<WorkoutPage />} />
          <Route path="login" element={<LoginPage />} />
        </Routes>
      </div>
    </div>
  );
}
