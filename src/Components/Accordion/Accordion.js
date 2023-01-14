import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import styles from "./Accordion.module.css";

export default function Accordion(props) {
  const { header, body } = props;
  const [open, setOpen] = useState();

  function handleAccordionOpen() {
    setOpen(!open);
  }

  return (
    <div className={styles.accordionContainer}>
      <div className={styles.accordionHeaderContainer}>
        {header}
        <button
          onClick={handleAccordionOpen}
          className={styles.accordionToggleIcon}
        >
          {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </button>
      </div>
      {open && body}
    </div>
  );
}
