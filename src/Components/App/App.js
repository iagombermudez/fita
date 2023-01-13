import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../utils/Navbar/Navbar";
import MyWorkoutsPage from "../pages/MyWorkoutsPage/MyWorkoutsPage";
import HomePage from "../pages/HomePage/HomePage";
import TopWorkoutsPage from "../pages/TopWorkoutsPage/TopWorkoutsPage";
import SchedulePage from "../pages/SchedulePage/SchedulePage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import "./styles.css";

export default function App() {
  return (
    <div id="app">
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="topWorkouts/" element={<TopWorkoutsPage />} />
          <Route path="myWorkouts/" element={<MyWorkoutsPage />} />
          <Route path="schedule/" element={<SchedulePage />} />
          <Route path="profile/" element={<ProfilePage />} />
        </Routes>
      </div>
    </div>
  );
}
