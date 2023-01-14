import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import "./styles.css";

export default function Accordion(props) {
  const { header, body } = props;
  const [open, setOpen] = useState();

  function handleAccordionOpen() {
    setOpen(!open);
  }

  return (
    <div className="accordion-container">
      <div className="accordion-header-container">
        {header}
        <button onClick={handleAccordionOpen} className="accordion-toggle-icon">
          {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </button>
      </div>
      {open && body}
    </div>
  );
}
