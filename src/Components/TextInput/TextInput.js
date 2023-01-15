import React from "react";
import styles from "./TextInput.module.css";

export default function TextInput(props) {
  const { type, name, placeholder, label } = props;
  return (
    <div className={styles.inputContainer}>
      <label for={name}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className={styles.textInput}
        required
      />
    </div>
  );
}
