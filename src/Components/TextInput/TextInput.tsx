import React, { Dispatch, SetStateAction } from "react";
import styles from "./TextInput.module.css";

interface Props {
  type: string;
  name: string;
  placeholder: string;
  label: string;
  text: string;
  setText: Dispatch<SetStateAction<string>>;
}

export default function TextInput(props: Props) {
  const { type, name, placeholder, label, text, setText } = props;

  return (
    <div className={styles.inputContainer}>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={text}
        onChange={(e) => setText(e.target.value)}
        className={styles.textInput}
        required
      />
    </div>
  );
}
