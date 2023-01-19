import React, { Dispatch, SetStateAction } from "react";
import styles from "./Inputs.module.css";

interface Props {
  type: string;
  name: string;
  placeholder: string;
  label: string;
  text: string;
  height?: number | string;
  setText: Dispatch<SetStateAction<string>>;
}

export default function TextInput(props: Props) {
  const { type, name, placeholder, label, text, setText, height } = props;

  return (
    <div className={styles.inputContainer}>
      <label htmlFor={name}>{label}</label>
      <input
        type={"textarea"}
        placeholder={placeholder}
        name={name}
        value={text}
        onChange={(e) => setText(e.target.value)}
        className={styles.textInput}
        style={{ height: height }}
        required
      />
    </div>
  );
}
