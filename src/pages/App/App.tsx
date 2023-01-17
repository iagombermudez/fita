import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
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
  CREATE_WORKOUT_URL,
} from "../../common/routes";
import Dashboard from "../Dashboard/Dashboard";
import CreateWorkoutPage from "../CreateWorkoutPage/CreateWorkoutPage";

export default function App() {
  const navigate = useNavigate();
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedUser");
    if (loggedUserJSON === null) {
      navigate(LOGIN_URL);
    }
  }, []);
  return (
    <div id={styles.app}>
      <Routes>
        <Route path={HOME_PAGE_URL} element={<Dashboard />}>
          <Route path={HOME_PAGE_URL} element={<HomePage />} />
          <Route path={TOP_WORKOUTS_URL} element={<TopWorkoutsPage />} />
          <Route path={MY_WORKOUTS_URL} element={<MyWorkoutsPage />} />
          <Route
            path={MY_WORKOUTS_URL + CREATE_WORKOUT_URL}
            element={<CreateWorkoutPage />}
          />
          <Route path={SCHEDULE_URL} element={<SchedulePage />} />
          <Route path={PROFILE_URL} element={<ProfilePage />} />
          <Route path={MY_WORKOUTS_INDEX_URL} element={<WorkoutPage />} />
        </Route>
        <Route path={LOGIN_URL} element={<LoginPage />} />
      </Routes>
    </div>
  );
}
