import React, { FormEvent, useState } from "react";
import TextInput from "../../../components/TextInput/TextInput";
import GoogleIcon from "@mui/icons-material/Google";
import commonStyles from "../../../utils/Styles/commonStyles.module.css";
import styles from "./LoginForm.module.css";
import FormButton from "../../../components/buttons/FormButton/FormButton";
import { login } from "../../../services/user";
import { useNavigate } from "react-router-dom";
import { HOME_PAGE_URL } from "../../../utils/routes";

export default function LoginForm() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  // const [user, setUser] = useState();

  const navigate = useNavigate();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      // const user = await login({ username, password });
      // setUser(user);
      setUsername("");
      setPassword("");

      // window.localStorage.setItem("loggedUser", JSON.stringify(user));

      navigate(HOME_PAGE_URL);
    } catch (exception) {
      console.log(exception);
    }
  }

  return (
    <div className={styles.container}>
      <h2 style={{ marginBottom: "0.5rem" }}>SIGN IN</h2>
      <form className={commonStyles.formContainer} onSubmit={handleSubmit}>
        <TextInput
          type="username"
          placeholder="Enter your username"
          name="username"
          label="Username"
          text={username}
          setText={setUsername}
        />
        <TextInput
          type="password"
          placeholder="Enter your password"
          name="password"
          label="Password"
          text={password}
          setText={setPassword}
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
