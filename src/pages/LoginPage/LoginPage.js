import React from "react";
import LoginForm from "./LoginForm/LoginForm";
import styles from "./LoginPage.module.css";

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <div className={`${styles.column} ${styles.backgroundImage}`} />
      <LoginForm className={styles.column} />
    </div>
  );
}
