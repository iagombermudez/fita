import React from "react";
import styles from "./FormButton.module.css";

interface Props {
  text: JSX.Element | string;
  outlined?: boolean;
}

export default function FormButton(props: Props) {
  const { text, outlined = false } = props;
  return (
    <button
      className={`${styles.formButton} ${
        outlined ? styles.outlined : styles.filled
      }`}
    >
      {text}
    </button>
  );
}
