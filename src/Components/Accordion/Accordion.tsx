import React, { FC, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import styles from "./Accordion.module.css";

interface Props {
  header: JSX.Element;
  body: JSX.Element;
  selected?: boolean;
}
export default function Accordion(props: Props) {
  const { header, body, selected = false } = props;
  const [open, setOpen] = useState(false);

  function handleAccordionOpen() {
    setOpen(!open);
  }

  function setSelectedStyle(): React.CSSProperties | undefined {
    return selected ? { backgroundColor: "#39ff13" } : undefined;
  }

  return (
    <div className={styles.accordionContainer} style={setSelectedStyle()}>
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
