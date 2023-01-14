import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./NavbarLink.module.css";

export default function NavbarLink(props) {
  const { icon, url, address } = props;
  const path = useLocation().pathname;

  function isSelected(path, url) {
    return path.split("/")[1] === url.split("/")[1];
  }

  return (
    <li
      className={styles.navLink}
      id={isSelected(path, url) && styles.selected}
    >
      {icon}
      <Link to={url}>{address}</Link>
    </li>
  );
}
