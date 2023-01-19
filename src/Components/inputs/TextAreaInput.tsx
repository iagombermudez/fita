import React, { Dispatch, SetStateAction, useState } from "react";
import styles from "./Inputs.module.css";

interface Props {
  type: string;
  name: string;
  placeholder: string;
  label: string;
  text: string;
  height?: number | string;
  setText: Dispatch<SetStateAction<string>>;
  maxLength: number;
}

export default function TextAreaInput(props: Props) {
  const { name, placeholder, label, text, setText, height, maxLength } = props;

  const [characterCount, setCharacterCount] = useState<number>(0);

  function handleOnChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setCharacterCount(e.target.value.length);
    setText(e.target.value);
  }

  return (
    <div className={styles.inputContainer}>
      <label htmlFor={name}>{label}</label>
      <textarea
        maxLength={maxLength}
        placeholder={placeholder}
        name={name}
        value={text}
        onChange={(e) => handleOnChange(e)}
        className={styles.textInput}
        style={{ height: height }}
        required
      />
      <div style={{ textAlign: "right" }}>
        <span>{characterCount}</span>
        <span>/{maxLength}</span>
      </div>
    </div>
  );
}
