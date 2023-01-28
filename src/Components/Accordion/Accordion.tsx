import React, { FC, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import styles from "./Accordion.module.css";

interface Props {
  header: JSX.Element;
  body: JSX.Element;
  selected?: boolean;
  index: number;
  handleSetSelected?: (index: number) => void;
}
export default function Accordion(props: Props) {
  const { header, body, selected = false, index, handleSetSelected } = props;
  const [open, setOpen] = useState(false);

  function handleAccordionOpen(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.stopPropagation();
    setOpen(!open);
  }

  function handleOnDivClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.stopPropagation();
    handleSetSelected && handleSetSelected(index);
  }

  function setSelectedStyle(): React.CSSProperties | undefined {
    return selected ? { backgroundColor: "#39ff13" } : undefined;
  }

  return (
    <div
      className={styles.accordionContainer}
      style={setSelectedStyle()}
      onClick={(e) => handleOnDivClick(e)}
    >
      <div className={styles.accordionHeaderContainer}>
        {header}
        <button
          onClick={(e) => handleAccordionOpen(e)}
          className={styles.accordionToggleIcon}
        >
          {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </button>
      </div>
      {open && body}
    </div>
  );
}
