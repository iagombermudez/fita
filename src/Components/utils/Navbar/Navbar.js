import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link, useLocation } from "react-router-dom";
import "./styles.css";

export default function Navbar() {
  const path = useLocation().pathname;

  const links = [
    <li className="nav-link" id={path === "/" && "selected"}>
      <HomeIcon fontSize="large" />
      <Link to="/">Home</Link>
    </li>,
    <li className="nav-link" id={path === "/topWorkouts" && "selected"}>
      <WhatshotIcon fontSize="large" />
      <Link to="/topWorkouts">Top Workouts</Link>
    </li>,
    <li className={"nav-link"} id={path === "/myWorkouts" && "selected"}>
      <FitnessCenterIcon fontSize="large" />
      <Link to="/myWorkouts">My Workouts</Link>
    </li>,
    <li className="nav-link" id={path === "/schedule" && "selected"}>
      <CalendarMonthIcon fontSize="large" />
      <Link to="/schedule">Schedule</Link>
    </li>,
    <li className="nav-link" id={path === "/profile" && "selected"}>
      <AccountCircleIcon fontSize="large" />
      <Link to="/profile">Profile</Link>
    </li>,
  ];

  return (
    <nav id="navbar">
      <div id="navbar-container">
        <div id="logo">
          <Link to="/">FITAPP</Link>
        </div>
        <ul id="link-list">{links.map((link) => link)}</ul>
      </div>
    </nav>
  );
}
