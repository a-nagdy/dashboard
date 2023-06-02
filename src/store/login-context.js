import React, { useReducer, useState } from "react";

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
const LoginCTX = (props) => {
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
  return <div>{props.children}</div>;
};

export default LoginCTX;
