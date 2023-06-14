import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import React, {
  Fragment,
  useCallback,
  useEffect,
  useReducer,
  useState,
} from "react";
import { ReactComponent as Loading } from "../../Assets/Loading.svg";
import Button from "../../Components/Button/Button";
import Modal from "../../Components/Modal/Modal";
import useHttp from "../../hooks/use-http";
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
  const [admin, setAdmin] = useState([]);
  const getAdmin = useCallback((admin) => {
    const adminLogin = [];
    for (const login in admin) {
      adminLogin.push({ name: login, password: admin[login] });
    }
    return adminLogin;
  }, []);

  const { isLoading, error, sendRequest } = useHttp();

  const authenticatedUser = async () => {
    if (authenticated === true) {
      const url = `https://admins-login-default-rtdb.europe-west1.firebasedatabase.app/admin.json`;
      const response = await sendRequest(url);

      const adminData = response ? Object.values(response)[0] : null;
      const adminKey = response ? Object.keys(response)[0] : null;

      if (
        adminData &&
        adminData.email === state.email &&
        adminData.password === state.password
      ) {
        setAdmin({ key: adminKey, ...adminData });
        props.isAdminLogged();
      } else {
        setAuthenticated(false);
      }
    }
    //  else {
    //   // alert("wrong Data");
    // }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const isValidEmail = state.email.includes("@");
      const isValidPassword = state.password.trim().length >= 8;
      dispatch({ type: "setValidEmail", action: isValidEmail });
      dispatch({ type: "setValidPassword", action: isValidPassword });
      setAuthenticated(isValidEmail && isValidPassword);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [state.email, state.password]);
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
            onChange={(event) =>
              dispatch({ type: "setEmail", action: event.target.value })
            }
            id="emailInput"
          />
          <input
            type="password"
            className={styles.email}
            placeholder="Password"
            onChange={(event) =>
              dispatch({ type: "setPassword", action: event.target.value })
            }
          />
        </div>
        <div className={styles.btn}>
          <Button className={styles.button} onClick={authenticatedUser}>
            Login
          </Button>
          {!authenticated && error && <p>Wrong Data</p>}
          {isLoading && authenticated && (
            <Modal className={styles.loadingModal}>
              <Loading />
            </Modal>
          )}
        </div>
      </div>
      )
    </Fragment>
  );
};

export default Login;
