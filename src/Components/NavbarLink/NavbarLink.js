import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./styles.css";

export default function NavbarLink(props) {
  const path = useLocation().pathname;

  const { icon, url, address } = props;
  return (
    <li className="nav-link" id={path === url && "selected"}>
      {icon}
      <Link to={url}>{address}</Link>
    </li>
  );
}
