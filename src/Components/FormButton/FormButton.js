import React from "react";
import styles from "./FormButton.module.css";

export default function FormButton(props) {
  const { text, outlined = false } = props;
  return (
    <button
      type="button"
      className={`${styles.formButton} ${
        outlined ? styles.outlined : styles.filled
      }`}
    >
      {text}
    </button>
  );
}
