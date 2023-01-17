import React, { FC, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import styles from "./Accordion.module.css";

interface Props {
  header: JSX.Element;
  body: JSX.Element;
}
export default function Accordion(props: Props) {
  const { header, body } = props;
  const [open, setOpen] = useState(false);

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
