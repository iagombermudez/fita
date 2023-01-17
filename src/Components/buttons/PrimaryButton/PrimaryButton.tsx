import React from "react";
import styles from "./PrimaryButton.module.css";

interface Props {
  text: string | JSX.Element;
}
export default function PrimaryButton(props: Props) {
  return <button className={styles.primaryButton}>{props.text}</button>;
}
