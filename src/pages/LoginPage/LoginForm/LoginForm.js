import React from "react";
import TextInput from "../../../components/TextInput/TextInput";
import GoogleIcon from "@mui/icons-material/Google";
import commonStyles from "../../../utils/Styles/commonStyles.module.css";
import styles from "./LoginForm.module.css";
import FormButton from "../../../components/FormButton/FormButton";

export default function LoginForm() {
  return (
    <div className={styles.container}>
      <h2 style={{ marginBottom: "0.5rem" }}>SIGN IN</h2>
      <form className={commonStyles.formContainer}>
        <TextInput
          type="email"
          placeholder="Enter your email"
          name="email"
          label="Email"
        />
        <TextInput
          type="password"
          placeholder="Enter your password"
          name="password"
          label="Password"
        />
        <FormButton text="SIGN IN" />
        <p className={styles.forgotPassword}>Forgot your password?</p>
        <FormButton
          text={
            <div className={commonStyles.centeredIcon}>
              <GoogleIcon /> Sign in with Google
            </div>
          }
          outlined={true}
        />
      </form>
      <p style={{ marginTop: "0.5rem" }}>
        Don't have an account?{" "}
        <span className={styles.createAccount}>Create an account</span>
      </p>
    </div>
  );
}
