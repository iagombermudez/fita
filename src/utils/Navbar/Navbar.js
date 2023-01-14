import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import NavbarLink from "../../components/NavbarLink/NavbarLink";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const links = [
    <NavbarLink icon={<HomeIcon fontSize="large" />} url="/" address="Home" />,
    <NavbarLink
      icon={<WhatshotIcon fontSize="large" />}
      url="/topWorkouts"
      address="Top Workouts"
    />,
    <NavbarLink
      icon={<FitnessCenterIcon fontSize="large" />}
      url="/myWorkouts"
      address="My Workouts"
    />,
    <NavbarLink
      icon={<CalendarMonthIcon fontSize="large" />}
      url="/schedule"
      address="Schedule"
    />,
    <NavbarLink
      icon={<AccountCircleIcon fontSize="large" />}
      url="/profile"
      address="Profile"
    />,
  ];

  return (
    <nav id={styles.navbar}>
      <div id={styles.navbarContainer}>
        <div id={styles.logo}>
          <Link to="/">FITAPP</Link>
        </div>
        <ul id={styles.linkList}>{links.map((link) => link)}</ul>
      </div>
    </nav>
  );
}
