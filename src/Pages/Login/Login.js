import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import React, { Fragment, useReducer, useState } from "react";
import Button from "../../Components/Button/Button";
import styles from "./Login.module.css";
const initialState = {
  email: "",
  password: "",
  validEmail: false,
  validPassword: false,
};
function reducer(state, action) {
  if (action.type === "setEmail") {
    return { ...state, email: action.action };
  } else if (action.type === "setPassword") {
    return { ...state, password: action.action };
  } else if (action.type === "setValidEmail") {
    return { ...state, validEmail: action.action };
  } else if (action.type === "setValidPassword") {
    return { ...state, validPassword: action.action };
  } else {
    throw new Error();
  }
}
const Login = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [authenticated, setAuthenticated] = useState(false);
  const authenticatedUser = () => {
    if (authenticated === true) {
      props.isAdminLogged();
    } else {
      alert("wrong Data");
    }
  };
  const checkValidity = () => {
    if (state.email.includes("@") && state.password.trim().length > 8) {
      dispatch({ type: "setValidEmail", action: true });
      dispatch({ type: "setValidPassword", action: true });
      setAuthenticated(true);
    } else {
      dispatch({ type: "setValidEmail", action: false });
      dispatch({ type: "setValidPassword", action: false });
      setAuthenticated(false);
    }
  };
  return (
    <Fragment>
      (
      <div className={styles.container}>
        <div className={styles.logo}>
          <SupervisorAccountIcon className={styles.adminLogo} />
        </div>
        <div className={styles.login}>
          <h4> Welcome Please Login</h4>
          <input
            type="text"
            className={styles.email}
            placeholder="Email"
            onBlur={checkValidity}
            onChange={(event) =>
              dispatch({ type: "setEmail", action: event.target.value })
            }
          />
          <input
            type="password"
            className={styles.email}
            placeholder="Password"
            onBlur={checkValidity}
            onChange={(event) =>
              dispatch({ type: "setPassword", action: event.target.value })
            }
          />
        </div>
        <div className={styles.btn}>
          <Button className={styles.button} onClick={authenticatedUser}>
            Login
          </Button>
        </div>
      </div>
      )
    </Fragment>
  );
};

export default Login;
