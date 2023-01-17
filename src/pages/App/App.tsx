import React, { useEffect } from "react";
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
import {
  HOME_PAGE_URL,
  LOGIN_URL,
  MY_WORKOUTS_INDEX_URL,
  MY_WORKOUTS_URL,
  PROFILE_URL,
  SCHEDULE_URL,
  TOP_WORKOUTS_URL,
} from "../../utils/routes";

export default function App() {
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedUser");
  }, []);
  return (
    <div id={styles.app}>
      <Routes>
        <Route
          path={HOME_PAGE_URL}
          element={
            <>
              <Navbar />
              <HomePage />
            </>
          }
        />
        <Route
          path={TOP_WORKOUTS_URL}
          element={
            <>
              <Navbar />
              <TopWorkoutsPage />
            </>
          }
        />
        <Route
          path={MY_WORKOUTS_URL}
          element={
            <>
              <Navbar />
              <MyWorkoutsPage />
            </>
          }
        />
        <Route
          path={SCHEDULE_URL}
          element={
            <>
              <Navbar />
              <SchedulePage />
            </>
          }
        />
        <Route
          path={PROFILE_URL}
          element={
            <>
              <Navbar />
              <ProfilePage />
            </>
          }
        />
        <Route
          path={MY_WORKOUTS_INDEX_URL}
          element={
            <>
              <Navbar />
              <WorkoutPage />
            </>
          }
        />
        <Route path={LOGIN_URL} element={<LoginPage />} />
      </Routes>
    </div>
  );
}
